import "./App.css";
import { useState, useEffect, useContext } from "react";
import Category from "./Category.js";
import { categoriesNumbers, resolveCategoryUrl } from "./api.js";
import { CategoryContext } from "./CategoryContext.js";

function Page() {
  const [index, setIndex] = useState(0);
  const context = useContext(CategoryContext);
  const [cat_no, setCatNo] = useState(context);
  let [catName, setCatName] = useState("");
  useEffect(() => {
    let url = resolveCategoryUrl(cat_no);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCatName(data.category.name));
  });
  function handleNextClick() {
    setIndex(index + 1);
    setCatNo(categoriesNumbers[index + 1]);
  }
  function handlePrevClick() {
    setIndex(index - 1);
    setCatNo(categoriesNumbers[index - 1]);
  }

  return (
    <>
      <div className="top-buttons">
        <button
          onClick={handlePrevClick}
          type="button"
          className="btn btn-success"
        >
          السابق
        </button>
        <h2>{catName}</h2>
        <button
          onClick={handleNextClick}
          type="button"
          className="btn btn-success"
        >
          التالي
        </button>
      </div>
      <CategoryContext.Provider value={cat_no}>
        <Category cat_no={cat_no} />
      </CategoryContext.Provider>
    </>
  );
}

function App() {
  return <Page />;
}
export default App;
