'use strict';
import React, { useState, useRef } from "react";
import "react-color-palette/css";
import "./App.css";
import Header from "./header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import dojaImage from "./assets/img/doja_concert.png";
import coverPink from "./assets/img/Tcover_pink-removebg-preview.png";
import coverMauve from "./assets/img/Tcover_mauve-removebg-preview.png";
import coverViolet from "./assets/img/Tcover_violet-removebg-preview.png";
import Pink from "./assets/img/doja1.png";
import Mauve from "./assets/img/doja2.png";
import Violet from "./assets/img/doja3.png";

const colorThemes = {
  rose: ["#FFC0CB", "#FFB6C1", "#FF69B4", "#FF1493"],
  fuchsia: ["#FF00FF", "#FF77FF", "#FF44CC", "#FF0088"],
  violet: ["#EE82EE", "#DA70D6", "#BA55D3", "#9400D3"],
  mauve: ["#E0B0FF", "#DDA0DD", "#C8A2C8", "#A020F0"]
};

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");
  const [generatedColor, setGeneratedColor] = useState("");
  const [selectedCover, setSelectedCover] = useState(null);
  const mainRef = useRef(null);
  const coverMakerRef = useRef(null);

  const handleScrollToCoverMaker = () => {
    setIsVisible(true);
    coverMakerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
    const randomIndex = Math.floor(Math.random() * colorThemes[color].length);
    setGeneratedColor(colorThemes[color][randomIndex]);
  };

  return (
    <div className="app-container">
      {/* Section principale */}
      <div ref={mainRef} className={`main-section ${isVisible ? "hidden" : ""}`}>
        <Header />
        <h1 className="page-title">Exprimez vos 5 langages de l'amour en image</h1>
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} className="text-center">
              <img
                src={dojaImage}
                alt="Doja Cat"
                className="img-fluid hero-image"
              />
            </Col>

            <Col xs={12} md={6} className="text-content">
              <p>
                Créez votre pochette personnalisée pour l'album{" "}
                <strong>5 Love Languages</strong> de Doja Cat avec notre app
                générative.
              </p>
              <div className="thumbnail-gallery d-flex justify-content-center gap-3">
                <img src={coverPink} alt="Thumbnail 1" className="thumbnail" />
                <img src={coverMauve} alt="Thumbnail 2" className="thumbnail" />
                <img src={coverViolet} alt="Thumbnail 3" className="thumbnail" />
              </div>

              <button
                className="cta-button mt-3"
                onClick={handleScrollToCoverMaker}
              >
                COMMENCER L'EXPERIENCE
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Section Cover Maker */}
      <div
        ref={coverMakerRef}
        className={`covermaker-section ${isVisible ? "" : "hidden"}`}
      >
        <Container>
          <Row>
            {/* Première ligne avec éléments */}
            <Col xs={6} md={3} className="text-center">
              <label className="form-label">COULEUR-BACKGROUND</label>
              <select
                className="form-input"
                onChange={(e) => handleColorChange(e.target.value)}
              >
                <option value="">Sélectionner</option>
                <option value="rose">Rose</option>
                <option value="fuchsia">Fuchsia</option>
                <option value="violet">Violet</option>
                <option value="mauve">Mauve</option>
              </select>
            </Col>

            <Col xs={6} md={3} className="text-center">
              <label className="form-label">TEXTE</label>
              <input
                type="text"
                className="form-input"
                placeholder="Ecrire un texte"
              />
            </Col>

            <Col xs={6} md={3} className="text-center">
              <label className="form-label">IMAGE COVER</label>
              <select
                className="form-input"
                onChange={(e) => setSelectedCover(e.target.value)}
              >
                <option value={null}>Aucune</option>
                <option value={Pink}>image1 </option>
                <option value={Mauve}>Image 2</option>
                <option value={Violet}>Image 3</option>
              </select>
            </Col>

            <Col xs={6} md={3} className="text-center">
              <label className="form-label">Nombres illustration</label>
              <input
                type="text"
                className="form-input"
                placeholder="Ecrire un texte"
              />
            </Col>
          </Row>
          

          {/* Deuxième ligne avec checkboxs et bouton */}
          <Row className="mt-4">
            <Col xs={4} className="text-center">
              <label>
                <input type="checkbox" className="form-check-input" /> Effet 1
              </label>
            </Col>
            <Col xs={4} className="text-center">
              <label>
                <input type="checkbox" className="form-check-input" /> Effet 2
              </label>
            </Col>
            <Col xs={4} className="text-center">
              <label>
                <input type="checkbox" className="form-check-input" /> Effet 3
              </label>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col xs={12} className="text-center">
              <button className="cta-button">GÉNÉRER</button>
            </Col>
          </Row>

          {/* Zone d'aperçu */}
          <Row className="mt-5">
            {/* Ccover preview */}
            <Col xs={6} className="text-center">
              <div
                className="cover-preview"
                style={{
                  width: "300px",
                  height: "300px",
                  backgroundImage: `url(${selectedCover})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: generatedColor,
                  border: "1px solid #ccc",
                  borderRadius: "15px",
                }}
              ></div>
            </Col>
            <Col xs={6} className="text-center">
              {/* CD Preview */}
              <div
                className="cd-preview"
                style={{
                  position: "relative",
                  width: "300px",
                  height: "300px",
                  borderRadius: "50%",
                  background:
                    "repeating-radial-gradient(rgba(228, 228, 228, 0) 23px, rgba(228, 228, 228, .05) 25px, rgba(228, 228, 228, 0) 27px) content-box, repeating-radial-gradient(rgba(166, 166, 166, 0) 13px, rgba(166, 166, 166, .05) 15px, rgba(166, 166, 166, 0) 17px) content-box, repeating-radial-gradient(rgba(139, 139, 139, 0) 19px, rgba(139, 139, 139, .05) 21px, rgba(139, 139, 139, 0) 23px) content-box, conic-gradient(#cdcdcd, #9d9d9d, #808080, #bcbcbc, #c4c4c4, #e6e6e6, #ddd, #a1a1a1, #7f7f7f, #8b8b8b, #bfbfbf, #e3e3e3, #d2d2d2, #a6a6a6, #858585, #8d8d8d, #c0c0c0, #e5e5e5, #d6d6d6, #9e9e9e, #828282, #8f8f8f, #bdbdbd, #e3e3e3, #cdcdcd)",
                  backgroundSize: "cover",
                  boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
                  margin: "0 auto",
                }}
              >
                {/* Cercle de couleur au centre */}
                {generatedColor && (
                  <div
                    style={{
                      position: "absolute",
                      top: "15%",
                      left: "15%",
                      width: "70%" ,
                      height: "70%",
                      borderRadius: "50%",
                      backgroundColor: generatedColor,
                      zIndex: 1,
                    }}
                  ></div>
                )}

                {/* Image sélectionnée au centre */}
                {selectedCover && (
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "60%",
                      height: "60%",
                      borderRadius: "50%",
                      backgroundImage: `url(${selectedCover})`,
                      backgroundSize: "cover",
                      backgroundPosition: "top",
                      zInde: 2,
                    }}
                  ></div>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
