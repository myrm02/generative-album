'use strict';
import React, { useState, useRef } from "react";
import "react-color-palette/css";
import "./App.css";
import Header from "./header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import dojaback from "./assets/img/dojaback2.png";
import Pink from "./assets/img/doja1.png";
import Mauve from "./assets/img/doja2.png";
import Violet from "./assets/img/doja3.png";
import Concert from "./assets/img/doja_concert.png";
import Back from "./assets/img/dojaback.png";

const colorThemes = {
  rose: [
    "#FFC0CB", "#FFB6C1", "#FF69B4", "#FF1493", "#FF66B2", 
    "#FF3399", "#FF1D6A", "#F50057", "#D50045", "#C2185B"
  ],
  fuchsia: [
    "#FF00FF", "#FF77FF", "#FF44CC", "#FF0088", "#F500F5", 
    "#D500D1", "#C500B2", "#A4008F", "#9A008D", "#8800FF"
  ],
  violet: [
    "#EE82EE", "#DA70D6", "#BA55D3", "#9400D3", "#8A2BE2", 
    "#7A4B93", "#6A0DAD", "#9B30FF", "#A64DFF", "#9B4F96"
  ],
  mauve: [
    "#E0B0FF", "#DDA0DD", "#C8A2C8", "#A020F0", "#A9A2D6", 
    "#9E6BFF", "#B39DDB", "#9C81B1", "#B0A0D2", "#A7A8D3"
  ],
  bleu: [
    "#0000FF", "#1E90FF", "#6495ED", "#4682B4", "#5F9EA0", 
    "#00BFFF", "#ADD8E6", "#87CEFA", "#4169E1", "#00008B"
  ],
  rouge: [
    "#FF0000", "#DC143C", "#B22222", "#FF6347", "#FF4500", 
    "#E9967A", "#FA8072", "#F08080", "#CD5C5C", "#8B0000"
  ]
};


const fontThemes = {
  themes: [
    "Lavishly Yours",
    "Kavoon",
    "Montserrat",
    "Playfair Display",
    "Roboto",
    "Fira Sans",
    "Imperial Script",
    "Cursive",
    "Poppins",
    "Lobster",
  ],
};


function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");
  const [generatedColor, setGeneratedColor] = useState("");
  const [selectedCover, setSelectedCover] = useState(null);
  const mainRef = useRef(null);
  const coverMakerRef = useRef(null);
  const [inputText, setInputText] = useState("");
  const [randomFont, setRandomFont] = useState(fontThemes.themes[0]);

  const handleScrollToCoverMaker = () => {
    setIsVisible(true);
    coverMakerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const getRandomFont = () => {
    const fonts = fontThemes.themes;
    return fonts[Math.floor(Math.random() * fonts.length)];
  };

  const handleGenerateFont = () => {
    const font = getRandomFont();
    setRandomFont(font);
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
        <div className="background-image-container">
          <img src={dojaback} alt="Background" className="background-image" />
        </div>
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} className="text-content">
              <h1 className="page-title">DOJA CAT</h1>
              <h2 className="album-title">5 Love Languages</h2>
              <p className="page-texte">Exprimez vos 5 langages de l'amour en image</p>
              <button
                className="cta-button mt-3"
                onClick={handleScrollToCoverMaker}
              >
                COMMENCER L'EXPERIENCE
              </button>
            </Col>
            <Col xs={12} md={6} className="text-center"></Col>
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
                <option value="rouge">Rouge</option>
                <option value="fuchsia">Fuchsia</option>
                <option value="violet">Violet</option>
                <option value="mauve">Mauve</option>
                <option value="bleu">Bleu</option>
              </select>
            </Col>

            {/* Saisie du texte */}
            <Col xs={6} md={3} className="text-center">
              <label className="form-label">TEXTE</label>
              <input
                type="text"
                className="form-input"
                placeholder="Ecrire un texte"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
            </Col>

            {/* Sélection de l'image */}
            <Col xs={6} md={3} className="text-center">
              <label className="form-label">IMAGE COVER</label>
              <select
                className="form-input"
                onChange={(e) => setSelectedCover(e.target.value)}
              >
                <option value={null}>Aucune</option>
                <option value={Pink}>Image 1</option>
                <option value={Mauve}>Image 2</option>
                <option value={Violet}>Image 3</option>
                <option value={Concert}>Image 4</option>
                <option value={Back}>Image 5</option>
                <option value={dojaback}>Image 6</option>
              </select>
            </Col>

            <Col xs={6} md={3} className="text-center">
              <label className="form-label">Nombre d'illustrations</label>
              <input
                type="number"
                className="form-input"
                min="0"
                max="10"
                placeholder="Entrez un nombre"
              />
            </Col>
          </Row>
          

          {/* Ligne effets */}
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
              <button className="cta-button" onClick={handleGenerateFont}>GÉNÉRER</button>
            </Col>
          </Row>

          {/* Zone d'aperçu */}
          <Row className="mt-5">
            {/* Aperçu Cover */}
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
                  position: "relative",
                }}
              >
                {/* Texte affiché */}
                {inputText && (
                  <div
                    style={{
                      fontFamily: randomFont,
                      Color: generatedColor,
                      position: "absolute",
                      bottom: "10px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      // color: "#000",
                      fontSize: "20px",
                      fontWeight: "bold",
                      textAlign: "center",
                      textShadow: "1px 1px 2px rgba(255, 255, 255, 0.8)",
                    }}
                  >
                    {inputText}
                  </div>
                )}
              </div>
            </Col>

            {/* Aperçu CD */}
            <Col xs={6} className="text-center">
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
                      width: "70%",
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
                      zIndex: 2,
                    }}
                  ></div>
                )}

                {/* Texte affiché */}
                {inputText && (
                  <div
                    style={{
                      fontFamily: randomFont,
                      position: "absolute",
                      top:"50%",
                      left: "50%",
                      transform: "translateX(-50%)",
                      Color: generatedColor,
                      // color: "#000",
                      fontSize: "16px",
                      fontWeight: "bold",
                      textAlign: "center",
                      textShadow: "1px 1px 2px rgba(255, 255, 255, 0.8)",
                      zIndex: 3,
                    }}
                  >
                    {inputText}
                  </div>
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