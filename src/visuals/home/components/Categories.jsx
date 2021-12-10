import React, { useState } from "react";

const Categories = ({ book }) => {
  let { categories } = book.volumeInfo;

  console.log(categories);

  return <p>{categories}</p>;
};

export default Categories;
