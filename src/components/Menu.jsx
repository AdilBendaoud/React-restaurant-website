import React from "react";
import { Cart } from "./Cart";
import { FoodList } from "./FoodList";
import SubNav from "./SubNav";
import { useEffect, useRef } from "react";
export default function Menu() {
  const myRef = useRef(null);
  let navButtons=null;
  let categorySections = null;
  useEffect(() => {
    navButtons = myRef.current.querySelectorAll(".nav-button");
    categorySections = myRef.current.querySelectorAll(".category-section");
    window.addEventListener("scroll", scrollFunc);
  }, []);
  const hundelClick = (e) => {
    window.removeEventListener('scroll',scrollFunc)
    const sectionId = e.currentTarget.getAttribute("data-section-id");
    const section = document.getElementById(sectionId);
    const position = section.offsetTop - 200;
    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
    navButtons.forEach((btn) => {btn.classList.remove("active")});
    e.currentTarget.classList.add('active')
    setTimeout(() => {
      window.addEventListener("scroll", scrollFunc);
    }, 2000);
  };
  let scrollFunc = () => {
    const currentPosition = window.pageYOffset;
    categorySections.forEach((section) => {
      const sectionTop = section.offsetTop - 250;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (currentPosition >= sectionTop && currentPosition < sectionBottom) {
        const sectionId = section.getAttribute("id");
        navButtons.forEach((btn) => {
          btn.classList.remove("active");
          if (btn.getAttribute("data-section-id") === sectionId) {
            btn.classList.add("active");
          }
        });
      }
    });
  };
  return (
    <div className=" bg-light" style={{ minWidth: 600 }}>
      <div className=" d-flex position-relative">
        <div ref={myRef}>
          <SubNav hundelClick={hundelClick}/>
          <FoodList/>
        </div>
        <Cart/>
      </div>
    </div>
  );
}
