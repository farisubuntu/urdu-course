var container = document.querySelector(".container");

var quizzes = JSON.parse(data).quizzes;



var Sols = new Array();
var Alts = new Array();



var quizzes_with_alts = quizzes.filter(function (n) {
  if (n.alts !== undefined) {
    Alts.push(n.alts);
    return true;
  }
});

var quizzes_without_alts = quizzes.filter(function (n) {
  if (n.alts == undefined) {
    Sols.push(n.sols);
    return true;
  }
});



function displaySols() {
  Alts.forEach(function fun(p) {
    for (k = 0; k < p.length; k++) {
      console.log(p[k].key);
      console.log(p[k].text);
    }
  });
}
