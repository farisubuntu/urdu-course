const categoriesNumbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 22, 23, 24, 25, 26,
  27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 88, 89, 90, 91,
];

function resolveLessonUrl(cat_no, num) {
  const baseurl = `https://raw.githubusercontent.com/farisubuntu/vite-app1/main/src/assets/data/${cat_no}`;
  return `${baseurl}/${cat_no}0${num}.json`;
}

function resolveCategoryUrl(cat_no) {
  const baseurl = `https://raw.githubusercontent.com/farisubuntu/vite-app1/main/src/assets/data/${cat_no}`;
  return `${baseurl}/${cat_no}.json`;
}

export { resolveCategoryUrl, resolveLessonUrl, categoriesNumbers };
