class Category {
 // 2.json,3.json,..... https://raw.githubusercontent.com/farisubuntu/urdu-course/gh-pages/data/2/2.json
 constructor(data) {
  this.id = data.id;
  this.name = data.name;
  this.countLesson = data.countLesson;
  this.countDialouge = data.countDialouge;
  this.countVocabulary = data.countVocabulary;
  this.lessons = data.lessons;
 }
 id = "null";
 name = "null";
 countLesson = "6";
 countDialouge = 1;
 countVocabulary = 1;
 lessons = [];
}

class Lesson {
 //201.json,202.json,.... https://raw.githubusercontent.com/farisubuntu/urdu-course/gh-pages/data/2/202.json
}
