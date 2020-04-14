import React, { useEffect } from "react";
let isOpened = false;
const conroleListFromButton = () => {
  isOpened = !isOpened;
  if (isOpened) {
    document.querySelector(".list").style.display = "block";
  } else {
    document.querySelector(".list").style.display = "none";
  }
};
const closeList = () => {
  const target = event.target;
  if (target.id !== "button") {
    isOpened = !isOpened;
    return (document.querySelector(".list").style.display = "none");
  }
};
const GoodDetailsWizardPicker = () => {
  useEffect(() => {
    document.addEventListener("click", closeList);
  });
  return (
    <>
      <div>
        <span onClick={conroleListFromButton} id="button">
          But
        </span>
        <ul className="list">
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
      <style jsx>
        {`
          .list {
            display: none;
          }
        `}
      </style>
    </>
  );
};
export default GoodDetailsWizardPicker;
