// script.js
// for more about fetch json -> https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
onload = function () {
  caller(url_all, "a");
};
// global Objects:
var all;
var category;
var lesson;

// sample full url for an audio file=> https://d13tz37rv54ob.cloudfront.net/ur/TnBUFMy7uqu_Rwilf-UzaSzeyNFwNZFm?t=1688826351
var url_all =
  "https://raw.githubusercontent.com/farisubuntu/urdu-course/gh-pages/data/all.json";
var urls_category_lessons = [
  "https://raw.githubusercontent.com/farisubuntu/urdu-course/main/data/2/2.json",
  "https://raw.githubusercontent.com/farisubuntu/urdu-course/main/data/2/201.json",
  "https://raw.githubusercontent.com/farisubuntu/urdu-course/main/data/2/202.json",
  "https://raw.githubusercontent.com/farisubuntu/urdu-course/main/data/2/203.json",
  "https://raw.githubusercontent.com/farisubuntu/urdu-course/main/data/2/204.json",
  "https://raw.githubusercontent.com/farisubuntu/urdu-course/main/data/2/205.json",
  "https://raw.githubusercontent.com/farisubuntu/urdu-course/main/data/2/206.json",
  "https://raw.githubusercontent.com/farisubuntu/urdu-course/main/data/2/201_vocab.json",
];
// sample image link: https://d37sy4vufic209.cloudfront.net/phrase-images/4LxKr9YvDJgNMNCsfBNDDmpo1QDNYJsM?t=1689159098
// sample for last lesson (category review) (~=400 lines) : https://api.mondly.com/v2/categories/2/vocabularies/201
// sample for first lesson (lesson review ) (~=10168 lines): https://api.mondly.com/v2/categories/2/lessons/201
// the same ^ but ("اعادة المحاولة") ()

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
  }
  //  if(obj_type=='c')//category
  //  {
  //    category=json;
  //    console.log('category: ',category);
  //  }
  //  if(obj_type=='l') // lesson: 202.json ,.......
  // {
  //  lesson=json.lesson;
  //  console.log('lesson object is ready: ',lesson)
  //  quizzes=json.quizzes;
  //  console.log('quizzes object is ready: ',quizzes);
  // }
  else {
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
  
}