import React from "react";
import Navbar from "./Navbar";
import pic from "../images/Heropic.jpg";
import { Link } from "react-router-dom";
import {Food} from '../Food'
import logo from '../images/logoBlack.png'
import footerimg from '../images/footer-payment.svg';
export default function Home() {
  return (
    <>
    <div id='myBg' style={{backgroundImage: `url(${pic})`}}>
      <div style={{height: "100vh", backdropFilter:'blur(2.5px)', backgroundColor:'rgba(0,0,0,0.15)'}}>  
        <Navbar />
        <div className="d-flex justify-content-center h-75 container flex-column" style={{zIndex:2}}>
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
          <Link
            to={'/menu'}
            id="herobtn"
            className="btn text-white fw-bold"
            style={{ width: 150, backgroundColor: "#ed9f40" }}
          >
            GO TO MENU
          </Link>
        </div>
      </div>
    </div>
    <div className=" pt-5">
      <h1 className=" text-center fw-bold mb-5">Actualités</h1>
      <div className="container">
        <div className="row gap-xl-0 gap-4" style={{marginBottom:120}}>
          <div className=" col-xl-4 col-12 d-flex justify-content-center" style={{height:500}}>
            <div id="cardDiv" className="card rounded-5" style={{ width: "100%"}}>
              <img className="card-img-top rounded-5 rounded-bottom" src={Food[0].foodImage}/>
              <div className="card-body pb-3 d-flex flex-column justify-content-center align-items-center">
                <h3 className="card-title fw-bold mb-4">{Food[0].foodName}</h3>
                <button
                  className="btn p-0 rounded-pill p-3 fw-bold text-white"
                  style={{backgroundColor: "#ed9f40"}}
                >
                  EN SAVOIR PLUS
                </button>
              </div>
            </div>
          </div>     
          <div className=" col-xl-4 col-12 d-flex justify-content-center" style={{height:500}}>
            <div id="cardDiv" className="card rounded-5" style={{ width: "100%"}}>
              <img className="card-img-top rounded-5 rounded-bottom" src={Food[1].foodImage}/>
              <div className="card-body pb-3 d-flex flex-column justify-content-center align-items-center">
                <h3 className="card-title fw-bold mb-4">{Food[1].foodName}</h3>
                <button
                  className="btn p-0 rounded-pill p-3 fw-bold text-white"
                  style={{backgroundColor: "#ed9f40"}}
                >
                  EN SAVOIR PLUS
                </button>
              </div>
            </div>
          </div>     
          <div className=" col-xl-4 col-12 d-flex justify-content-center" style={{height:500}}>
            <div id="cardDiv" className="card rounded-5" style={{ width: "100%"}}>
              <img className="card-img-top rounded-5 rounded-bottom" src={Food[3].foodImage}/>
              <div className="card-body pb-3 d-flex flex-column justify-content-center align-items-center">
                <h3 className="card-title fw-bold mb-4">{Food[3].foodName}</h3>
                <button
                  className="btn p-0 rounded-pill p-3 fw-bold text-white"
                  style={{backgroundColor: "#ed9f40"}}
                >
                  EN SAVOIR PLUS
                </button>
              </div>
            </div>
          </div>     
  
        </div>
        <div className="row mb-5 gap-xl-0 gap-5">
          <div className='col-xl-4 col-12 d-flex flex-column justify-content-center align-items-center' style={{height:250}}>
            <div className=" mb-4">
              <img src={logo} style={{width:300}}/>
            </div>
            <div>
              <a href="#" className=" btn">
                <i className="bi bi-facebook fs-2"></i>
              </a>
              <a href="#" className=" btn">
                <i className="bi bi-twitter fs-2"></i>
              </a>
              <a href="#" className=" btn">
                <i className="bi bi-youtube fs-2"></i>
              </a>
              <a href="#" className=" btn">
                <i className="bi bi-instagram fs-2"></i>
              </a>
            </div>
          </div>
          <div className='col-xl-4 col-12 d-flex flex-column justify-content-center align-items-center'>
            <h2 className=' mb-4 fw-bold'> Nous contacter </h2>
            <p><span className='fw-bold'>Marrakech</span>, xx, street Lorem, ipsum dolor.</p>
            <p><span className='fw-bold'>Telephone:</span> 0612345678</p>
            <a href="#" className="btn fw-bold rounded-pill" style={{borderWidth:2,borderColor:'#252525'}}>Google Maps</a>
          </div>
          <div className='col-xl-4 col-12 d-flex flex-column justify-content-center align-items-center'>
            <h2 className="mb-4 fw-bold">Nos Horaires</h2>
            <p><span className="fw-bold">AFTER MIDNIGHT :</span> DE 00H00 À 02H30</p>
            <p><span className="fw-bold">JOURNÉE :</span> DE 12H00 À 23H59</p>
          </div>
        </div>
      </div>
    </div>
    <div className=' flex-column container d-flex align-items-center justify-content-evenly' style={{height:300}}>
      <img src={footerimg} style={{width:350}} />
      <span className="fw-bold">{`Adil Bendoud © ${new Date().getFullYear()} - Tous droits réservés.`}</span>
    </div>
    </>
  );
}
