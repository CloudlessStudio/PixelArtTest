import React, {useState} from "react";
import "../styles/pixel.css";
export default function Pixel(props) {

    const {selectedColor}= props;

    const [pixelColor, setPixelColor] = useState("#fff");
    const [oldColor, setOldColor] = useState(pixelColor);
    const [canChangeColor, setCanChangeColor] = useState(true);

    function applyColor() {
        setPixelColor(selectedColor);
        setCanChangeColor(false);
      }
    
      function changeColorHover() {
        setOldColor(pixelColor);
        setPixelColor(selectedColor);
      }
    
      function resetColor() {
        if (canChangeColor) {
          setPixelColor(oldColor);
        }
    
        setCanChangeColor(true);
      }

    return <div className= "pixel" onClick={applyColor} onMouseEnter={changeColorHover} onMouseLeave={resetColor} style={{backgroundColor:pixelColor}}></div>;
}