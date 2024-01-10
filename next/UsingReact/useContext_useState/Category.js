import "./Category.css";
import { useContext, useEffect, useState } from "react";
import {CategoryContext} from "./CategoryContext";
import { resolveCategoryUrl, resolveLessonUrl, categoriesNumbers } from "./api";

function Lesson({ index }) {
  const currentCat = useContext(CategoryContext);
  // console.log('currentCat Context in Lesson({index})',currentCat);
  const [currnetLesson, setCurrentLesson] = useState({});
  let url = resolveLessonUrl(currentCat, index);

  useEffect(() => {
    console.log('in lesson, ',currentCat)
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCurrentLesson(data.lesson));
      
  },[currentCat]);
  return (
    <>
      <div className="card">
        <div className="card-header">
          <span className="badge bg-primary larger">{currnetLesson.name}</span>
          <span className="badge bg-secondary">{currnetLesson.id}</span>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            الإختبارات
            <span className="badge bg-secondary">
              {" "}
              {currnetLesson.countQuiz}
            </span>
          </li>
          <li className="list-group-item">
            الكلمات:
            <span className="badge bg-secondary">
              {" "}
              {currnetLesson.countWords}
            </span>
          </li>
          <li className="list-group-item">
            العبارات:
            <span className="badge bg-secondary">
              {" "}
              {currnetLesson.countPhrases}
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}
function Category({cat_no}) {
  const currentCat=useContext(CategoryContext);
  let imageUrl = `https://raw.githubusercontent.com/farisubuntu/vite-app1/main/src/assets/images/${cat_no}.jpeg`;
  console.log("befor useEffect, cat_no = ", cat_no);
  

  return (
    <>
      <CategoryContext.Provider value={currentCat}>
        <img src={imageUrl} className="card-img-top" alt={imageUrl} />
          
        <div className="card-wrapper">
          <Lesson index={1} />
          <Lesson index={2} />
          <Lesson index={3} />
          <Lesson index={4} />
          <Lesson index={5} />
          <Lesson index={6} />
        </div>
      </CategoryContext.Provider>
    </>
  );
}
export default Category;
