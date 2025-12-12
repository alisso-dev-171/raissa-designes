import React from "react";
import '../assets/styles/Main.scss';
import avatar from "../assets/images/avatar.png"

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatar} alt="Rayssa cruz • Perfil" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://wa.me/5593991049454" target="_blank" rel="noreferrer"><i className="bi bi-whatsapp"></i></a>
            <a href="https://www.instagram.com/16raissacruz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a>
          </div>
          <h1>Rayssa Cruz</h1>
          <p>Designer Gráfico</p>

          <div className="mobile_social_icons">
            <a href="https://wa.me/5593991049454" target="_blank" rel="noreferrer"><i className="bi bi-whatsapp"></i></a>
            <a href="https://www.instagram.com/16raissacruz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a>          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
