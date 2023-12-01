onload = function () {
  caller(url_all, "a");
};
// global Objects:
var all;
var category; // such 1.json,36.json,......
var vocabularies; //such as ...../vocabularies/201.json,....
var lesson; // such as ...../id/203.json,...
var quizzes; // later uses
var lesson_urls;
// sample full url for an audio file=> https://d13tz37rv54ob.cloudfront.net/ur/TnBUFMy7uqu_Rwilf-UzaSzeyNFwNZFm?t=1688826351
var url_all =
  "https://raw.githubusercontent.com/farisubuntu/urdu-course/gh-pages/data/all.json";

// data_obj;
// category; // 1,2,...,88,.....
// lesson; // lesson object inside files 101,102,103....lesson
// quizzes; // quizzes array inside file 101,102,.......quizzes[quiz_no]
// all; // always 'all'

async function getJSON(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    });
}
async function caller(url, obj_type) {
  const json = await this.getJSON(url); // command waits until completion
  // data is now available
  if (obj_type == "a") {
    // all.json
    all = json.data;
    console.log("all: ", all);
    appendCardsContent();
  }
  if (obj_type == "v") {
    // vocabularies
    vocabularies = json;
    console.log("vocabularies", vocabularies);
    appendVocabularies();
  }
  if (obj_type == "c") {
    category = json;
    console.log("obj_type=l, so", category);
    get_top_bar();
  }
  if (obj_type == "l") {
    // such 201.json,.....
    lesson = json.lesson;
    quizzes = json.quizzes;
    console.log("lesson_obj", lesson);
    console.log("quizzes obj", quizzes);
    appendLessonData();
  } else {
    console.log("object type unknowen....");
  }
}

function appendCardsContent() {
  var html = `<div class="cards">`;
  for (var index = 0; index < all.length; index++) {
    html += get_card_category(all[index].category);
  }
  html += "</div>";
  document.querySelector(".content-wrapper").innerHTML = html;
  // add cards events:
  document.querySelectorAll(".card").forEach(function f(elem) {
    elem.addEventListener("click", showLessonContent);
  });
}
function showLessonContent(target) {
  console.log(target.currentTarget); //always get the .card element

  let id = target.currentTarget.getAttribute("id");
  lesson_urls = makeUrls(id);

  // fetch category and append top bar:
  caller(lesson_urls[0], "c"); // now cat has the same data as global 'category' has the data
  caller(lesson_urls[7], "v");
  // empty content-wrapper area:
  document.querySelector(".content-wrapper").innerHTML = "";
}

// vocabularies fiels:
// https://raw.githubusercontent.com/farisubuntu/urdu-course/gh-pages/data/....

function makeUrls(id) {
  let urls = [];
  // add 'id'
  let const_portion =
    "https://raw.githubusercontent.com/farisubuntu/urdu-course/gh-pages/data/";
  console.log(const_portion);
  // append 'id'+'.json' (lesson file) as the zero index item
  var category_file = const_portion + id + "/" + id + ".json";
  console.log("category file url=", category_file);
  urls[0] = category_file; //category url
  // append lessons urls
  for (var i = 1; i < 7; i++) {
    urls[i] = const_portion + id + "/" + id + "0" + i.toString() + ".json";
  }
  // append seventh item -- const_portion+id/vocabularies/id01.json'
  urls[7] = const_portion + id + "/vocabularies/" + id + "01.json";
  return urls;
}

// sample audio link:
//+ https://d13tz37rv54ob.cloudfront.net/ur/5yJIklmE-tT6L44G-d2no9epgjQXY1kV?t=1580691716
//+ 'https://d13tz37rv54ob.cloudfront.net/ur/' +
// sample image link (phrase-image): 'https://d37sy4vufic209.cloudfront.net/phrase-images/4LxKr9YvDJgNMNCsfBNDDmpo1QDNYJsM'
function openLesson(e, id) {
  console.log(
    "button pressed=> ",
    e.currentTarget,
    " ..... and id=> ",
    id.valueOf()
  );
  //  keep this button as pressed:
  e.currentTarget.style.backgroundColor = "#106DBD";
  e.currentTarget.style.color = "white";
  // keep other buttons as initial state
  resetButtons(id);

  let cat_no, lesson_no, url;
  if (id.length == 3) {
    cat_no = id.valueOf()[0];
    lesson_no = cat_no + id.valueOf()[1] + id.valueOf()[2];
  }
  if (id.length == 4) {
    cat_no = id.valueOf()[0] + id.valueOf()[1];
    lesson_no = cat_no + id.valueOf()[2] + id.valueOf()[3];
  }

  url = `https://raw.githubusercontent.com/farisubuntu/urdu-course/gh-pages/data/${cat_no}/${lesson_no}.json`;
  caller(url, "l");
}

function appendLessonData() {
  console.log("appendLessonData()...all..");
  get_word_template_table();
}

function appendVocabularies() {
  console.log("appendVocabularies()......");
}

function resetButtons(id) {
  document.querySelectorAll(".tablinks").forEach(function f(btn) {
    if (btn.getAttribute("id") !== id) {
      
      btn.style.backgroundColor = "initial";
      btn.style.color = "initial";
    }
  });
}


// media queries

// Create a MediaQueryList object
// var x = window.matchMedia("(width < 605px)");


// function toggleAudioControls(x){
//  if(x.matches){ // if media query matches
//   document.querySelectorAll('td.audio audio').forEach(function f(audio){
//    console.log(audio);
//    audio.removeAttribute('controls');
//   });
//  }
// }

// toggleAudioControls(x);
// x.addEventListener("change",function(){
//  toggleAudioControls(x);
// });