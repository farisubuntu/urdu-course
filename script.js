// script.js
// for more about fetch json -> https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
onload=function(){
 caller(urls_category_lessons[0]); 
}

// sample full url for an audio file=> https://d13tz37rv54ob.cloudfront.net/ur/TnBUFMy7uqu_Rwilf-UzaSzeyNFwNZFm?t=1688826351
var url_raw = 'https://raw.githubusercontent.com/farisubuntu/mondly/master/sections/1201.json';
var urls_category_lessons = [
    "https://api.mondly.com/v1/categories/2",
    "https://api.mondly.com/v2/categories/2/lessons/201",
    "https://api.mondly.com/v2/categories/2/lessons/202",
    "https://api.mondly.com/v2/categories/2/lessons/203",
    "https://api.mondly.com/v2/categories/2/lessons/204",
    "https://api.mondly.com/v2/categories/2/lessons/205",
    "https://api.mondly.com/v2/categories/2/lessons/206"
];
// sample image link: https://d37sy4vufic209.cloudfront.net/phrase-images/4LxKr9YvDJgNMNCsfBNDDmpo1QDNYJsM?t=1689159098

// sample for last lesson (category review) (~=400 lines) : https://api.mondly.com/v2/categories/2/vocabularies/201
// sample for first lesson (lesson review ) (~=10168 lines): https://api.mondly.com/v2/categories/2/lessons/201
// the same ^ but ("اعادة المحاولة") ()

var urls_lessons

var data_obj;
var lesson;
var quizzes;

async function getJSON(url) {
    return fetch(url)
        .then((response)=>response.json())
        .then((responseJson)=>{return responseJson});
}
async function caller(url) {
    const json = await this.getJSON(url);  // command waits until completion
    // data is now available
    lesson=json.lesson;
    console.log('lesson object is ready: ',lesson)
    quizzes=json.quizzes;
    console.log('quizzes object is ready: ',quizzes);
}

function start_up(){
    injectLessonData();
    // injectLessonQuiz(quiz_no);
}

function injectLessonData(){
    document.querySelector(".cell .id").innerText=lesson.id;
    document.querySelector(".cell .index").innerText=lesson.index;
    document.querySelector(".cell .category").innerText=lesson.category;
    document.querySelector(".cell .name").innerText=lesson.name;
    document.querySelector(".cell .count-quiz").innerText=lesson.countQuiz;
    document.querySelector(".cell .count-words").innerText=lesson.countWords;
    document.querySelector(".cell .count-phrases").innerText=lesson.countPhrases;
}
function injectLessonQuiz(quiz_no=0){
    var linked_quizzes=document.querySelector(".lesson-quizzes-numbers");
    var html='';
    html+=`
        <h2 class='grid-item'>
         <span class='quiz-label'>${quiz_no+1} : </span>
         <span class='quiz-no'> ${quizzes[quiz_no].id}</span>
        </h2>
        `;
    linked_quizzes.innerHTML=html;
}


