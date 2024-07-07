import React from "react";
import "./App.css";
import { rotateCoin } from "../utils/helper";
import Confetti from "react-confetti-boom";

function App() {
  const [selectedImage, setSelectedImage] = React.useState("");
  const [confetti, setConfetti] = React.useState(false);
  const [disable, setDisable] = React.useState(false);

  const handleRotate = async () => {
    setDisable(true);
    const outcome = await rotateCoin();
    setConfetti(outcome === +selectedImage);
    setSelectedImage("");
    setDisable(false);
  };

  const handleImageChange = (event) => {
    setSelectedImage(event.target.value);
  };

  console.log({ selectedImage });

  return (
    <div className="coin-container">
      <div id="coin" className="coin">
        <div className="loading"></div>
        <div className="sides">
          {[...Array(90)].map((_, index) => (
            <div key={index} className="side"></div>
          ))}
        </div>
        <div className="face heads">
          <span></span>
        </div>
        <div className="face tails">
          <span></span>
        </div>
      </div>
      <button
        id="rotateButton"
        onClick={handleRotate}
        disabled={disable || !selectedImage}
      >
        Rotate Coin
      </button>
      <div className="selection-container">
        <div className="image-wrapper">
          <label htmlFor="image1">
            <input
              type="radio"
              id="image1"
              name="image-choice"
              value="0"
              onChange={handleImageChange}
              checked={selectedImage === "0"}
              disabled={disable}
            />
            <img src="/heads.png" alt="Image 1" />
          </label>
        </div>
        <div className="image-wrapper">
          <label htmlFor="image2">
            <input
              type="radio"
              id="image2"
              name="image-choice"
              value="1"
              onChange={handleImageChange}
              checked={selectedImage === "1"}
              disabled={disable}
            />
            <img src="/tails.png" alt="Image 2" />
          </label>
        </div>
      </div>
      {confetti && (
        <Confetti
          mode="boom"
          particleCount={100}
          colors={["#ff577f", "#ff884b"]}
        />
      )}
    </div>
  );
}

export default App;
