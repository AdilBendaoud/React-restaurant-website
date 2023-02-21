import React, { useState } from "react";
import SubNavItems from "./SubNavItems";

export default function SubNav() {
  const [navItem, setNavItem] = useState([
    {
      id: "1",
      name: "Plateaux Sushi",
      active: true,
      icon: "https://www.fod.ma/bundles/anonymousfoodondemandsite/img/icons-categories/plateaux-sushi.svg?1613230571",
    },
    {
      id: "2",
      name: "Entrees",
      active: false,
      icon: "https://www.fod.ma/bundles/anonymousfoodondemandsite/img/icons-categories/entrees.svg?1613230577",
    },
    {
      id: "3",
      name: "Fried Treats",
      active: false,
      icon: "https://www.fod.ma/bundles/anonymousfoodondemandsite/img/icons-categories/fried-treats.svg?1613230587",
    },
    {
      id: "4",
      name: "Rouleaux De Printemps",
      active: false,
      icon: "https://www.fod.ma/bundles/anonymousfoodondemandsite/img/icons-categories/rouleaux-de-printemps.svg?1613230610",
    },
    {
      id: "5",
      name: "The Pizza Bar",
      active: false,
      icon: "https://www.fod.ma/bundles/anonymousfoodondemandsite/img/icons-categories/the-pizza-bar.svg?1654790360",
    },
  ]);
  const Clicked = (btn) => {
    setNavItem((elm) => {
      for (let i = 0; i < navItem.length; i++) {
        if (btn.id !== elm[i].id) {
          elm[i].active = false;
        } else {
          elm[i].active = true;
        }
      }
      return [...elm];
    });
    //window.location.href = "#div3";
  };
  return (
    <div
      className="bg-white position-sticky container d-flex align-items-center mb-3"
      style={{ height: 180, top: 0, zIndex: 1 }}
    >
      {navItem.map((elm) => (
        <SubNavItems Clicked={Clicked} key={elm.id} data={elm} />
      ))}
    </div>
  );
}
