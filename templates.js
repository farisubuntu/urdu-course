function get_template_category() {
  var category = `

  <div class="cell">
    <div class="field-label">Lesson ID:</div>
    <div class="id">${lesson.id}</div>
  </div>
  <div class="cell">
    <div class="field-label">Index:</div>
    <div class="index">${lesson.index}</div>
  </div>
  <div class="cell">
    <div class="field-label">Category ID:</div>
    <div class="category">${lesson.category}</div>
  </div>
  <div class="cell">
    <div class="field-label">Lesson Name:</div>
    <div class="name">${lesson.name}</div>
  </div>
  <div class="cell">
    <div class="field-label">Quizzes:</div>
    <div class="count-quiz">${lesson.countQuiz}</div>
  </div>
  <div class="cell">
    <div class="field-label">Words:</div>
    <div class="count-words">${lesson.countWords}</div>
  </div>
  <div class="cell">
    <div class="field-label">Phrases:</div>
    <div class="count-phrases">${lesson.countPhrases}</div>
  </div>
`;

  return category;
}
