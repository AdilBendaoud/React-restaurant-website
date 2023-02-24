import React from "react";
import Navbar from "./Navbar";
import pic from "../images/Heropic.jpg";
export default function Home() {
  return (
    <div style={{backgroundSize:"cover" ,backgroundImage: `url(${pic})`, height: "100vh" }}>
      <Navbar />
      <div className="d-flex justify-content-center h-75 container flex-column">
        <h1 id="heroh1" className="mb-5 mb-sm-4 fw-bolder" style={{color:'#ed9f40'}}>
          Découvrez la magie du sushi
        </h1>
        <p id="heroPara" className="text-white fw-light mb-5">
          Bienvenue dans le monde du sushi frais et délicieux, confectionné rien
          que pour vous. Nos chefs expérimentés s'engagent à vous offrir la
          meilleure expérience de sushi, de nos célèbres California rolls à nos
          plateaux de sashimi signatures. Nous sommes fiers de ne sourcer que
          les meilleurs ingrédients pour créer des plats qui regorgent de
          saveurs et sont aussi sains que délicieux. Que vous soyez un amateur
          de sushi chevronné ou que vous essayiez pour la première fois, nous
          avons quelque chose pour tout le monde. Venez nous rejoindre pour un
          voyage culinaire inoubliable, où chaque bouchée est un pas de plus
          vers le Japon.
        </p>
        <button
          id="herobtn"
          className="btn text-white fw-bold"
          style={{ width: 150, backgroundColor: "#ed9f40" }}
        >
          GO TO MENU
        </button>
      </div>
    </div>
  );
}
