import React, {useRef ,useEffect, useState } from "react";
import SubNavItems from "./SubNavItems";

export default function SubNav(props) {
  const [navItem, setNavItem] = useState([
    {
      id: "1",
      name: "Plateaux Sushi",
      active: true,
      icon: "https://www.fod.ma/bundles/anonymousfoodondemandsite/img/icons-categories/plateaux-sushi.svg?1613230571",
    },
    {
      id: "2",
      name: "Rouleaux De Printemps",
      active: false,
      icon: "https://www.fod.ma/bundles/anonymousfoodondemandsite/img/icons-categories/rouleaux-de-printemps.svg?1613230610",
    },
    {
      id: "3",
      name: "California Rolls",
      active: false,
      icon: "https://www.fod.ma/bundles/anonymousfoodondemandsite/img/icons-categories/california-rolls.svg?1612536291",
    },
    {
      id: "4",
      name: "Spring Rolls",
      active: false,
      icon: "https://www.fod.ma/bundles/anonymousfoodondemandsite/img/icons-categories/spring-rolls.svg?1611847680",
    },
    {
      id: "5",
      name: "Fry Rolls",
      active: false,
      icon: "https://www.fod.ma/bundles/anonymousfoodondemandsite/img/icons-categories/fry-rolls.svg?1611847669",
    },
    {
      id: "6",
      name: "Makis",
      active: false,
      icon: "https://www.fod.ma/bundles/anonymousfoodondemandsite/img/icons-categories/makis.svg?1611847675",
    },
    {
      id: "7",
      name: "Grands Crus",
      active: false,
      icon: "https://www.fod.ma/bundles/anonymousfoodondemandsite/img/icons-categories/les-grands-crus.svg?1612536273",
    },
  ]);
  
  return (
    <div
      id="subNav"
      className="bg-white position-sticky container d-flex align-items-center mb-3"
      style={{ height: 180, top: 0, zIndex: 1 }}
    >
      {navItem.map((elm) => (
        <SubNavItems hundelClick={props.hundelClick} key={elm.id} data={elm} />
      ))}
    </div>
  );
}
