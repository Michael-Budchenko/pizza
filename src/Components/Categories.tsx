import React from "react";


type CategoriesProps = {
	value: number;
	onChangeCategory:any;
}

function Categories ({ value, onChangeCategory }:CategoriesProps ) {
  const arrCategory = [
    "Усі",
    "Мясні",
    "Вегетеріанські",
    "Гриль",
    "Гострі",
    "Закриті",
  ];

  return (
    <div className="categories">
      <ul>
        {arrCategory.map((categoryName, i) => (
          <li
            key={i}
            onClick={() => onChangeCategory(i)}
            className={value === i ? "active" : ""}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
