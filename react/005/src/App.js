import React, { useState } from "react";
import About from "./stylePractice/about";
import Product from "./stylePractice/product";
import Contact from "./stylePractice/contact";

const ContentsContainer = ({ listName }) => {
  if (listName === "about") {
    return <About />;
  } else if (listName === "product") {
    return <Product />;
  } else if (listName === "contact") {
    return <Contact />;
  }
};

function NavBar() {
  const [listName, setListName] = useState("about");
  const checkId = (e) => {
    setListName(e.target.id);
  };

  return (
    <>
      <nav>
        <ul>
          <li
            id="about"
            style={
              listName === "about" ? { color: "blue" } : { color: "black" }
            }
            onClick={checkId}
          >
            About
          </li>
          <li
            id="product"
            onClick={checkId}
            style={listName === "product" ? { color: "blue" } : { color: "black" }}
          >
            Prodct
          </li>
          <li
            id="contact"
            onClick={checkId}
            style={
              listName === "contact" ? { color: "blue" } : { color: "black" }
            }
          >
            Contact
          </li>
        </ul>
      </nav>
      <ContentsContainer listName={listName} />
    </>
  );
}

export default NavBar;