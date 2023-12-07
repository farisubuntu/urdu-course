CREATE TABLE [2] (
  [category.id] INT,
  [category.customIndex] TEXT NULL,
  [category.progressType] INT,
  [category.uiModifiers.learningUnitNamesAndIndex] INT,
  [category.uiModifiers.vocabularyRecapSubtitle] INT,
  [category.modifiers] TEXT NULL,
  [category.name] TEXT,
  [category.countLesson] INT,
  [category.countDialogue] INT,
  [category.countVocabulary] INT,
  [category.countOxfordTest] INT,
  [category.countReviewLesson] INT,
  [category.lessons] TEXT,
  [category.dialogues] TEXT,
  [category.vocabularies] TEXT,
  [category.oxfordTests] TEXT,
  [category.reviewLessons] TEXT,
  [category.disabled] INT,
  [category.countDone] INT,
  [category.time] REAL,
  [lessons] TEXT,
  [dialogues] TEXT,
  [vocabularies] TEXT,
  [oxfordTests] TEXT,
  [reviewLessons] TEXT
);

INSERT INTO [2] VALUES
(2,NULL,1,TRUE,TRUE,NULL,'الأسرة',6,1,1,0,0,'[201,202,203,204,205,206]','[201]','[201]','[]','[]',FALSE,8,6689.099999999998,'[{"id":201,"i":1,"index":1,"positionIndex":1,"unitNumber":null,"unitType":0,"unitStyle":0,"unitScope":0,"category":2,"categoryID":2,"name":"الوالدان والأطفال","disabled":false,"done":true,"stars":3,"countDone":6},{"id":202,"i":2,"index":2,"positionIndex":2,"unitNumber":null,"unitType":0,"unitStyle":0,"unitScope":0,"category":2,"categoryID":2,"name":"الأسرة والحيوانات الأليفة","disabled":false,"done":true,"stars":3,"countDone":4},{"id":203,"i":3,"index":3,"positionIndex":3,"unitNumber":null,"unitType":0,"unitStyle":0,"unitScope":0,"category":2,"categoryID":2,"name":"الأجداد","disabled":false,"done":true,"stars":2,"countDone":4},{"id":204,"i":4,"index":4,"positionIndex":4,"unitNumber":null,"unitType":0,"unitStyle":0,"unitScope":0,"category":2,"categoryID":2,"name":"الأسرة والأصدقاء","disabled":false,"done":true,"stars":3,"countDone":2},{"id":205,"i":5,"index":5,"positionIndex":5,"unitNumber":null,"unitType":0,"unitStyle":0,"unitScope":0,"category":2,"categoryID":2,"name":"الأقارب","disabled":false,"done":true,"stars":3,"countDone":3},{"id":206,"i":6,"index":6,"positionIndex":6,"unitNumber":null,"unitType":0,"unitStyle":0,"unitScope":0,"category":2,"categoryID":2,"name":"أسرتي","disabled":false,"done":true,"stars":3,"countDone":2}]','[{"id":201,"i":7,"index":1,"positionIndex":6,"category":2,"categoryID":2,"categoryModifiers":0,"name":"أسرتي","done":true,"disabled":false,"countItem":15,"countDone":15,"countWords":0,"countPhrases":0}]','[{"id":201,"i":8,"index":1,"positionIndex":8,"category":2,"categoryID":2,"name":null,"disabled":false,"done":true,"stars":3,"countDone":2}]','[]','[]');
