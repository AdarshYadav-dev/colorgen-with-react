import { useEffect, useState } from "react";
import "./index.css";
import ColorPalette from "./components/ColorPalette.jsx";
import ColorCard from "./components/ColorCard.jsx";
import ColorBox from "./components/ColorBox.jsx";

export default function App() {
  const [color, setColor] = useState({ hex: "#000000", rgb: "rgb(0,0,0)" });

  const generateColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const hex =
      "#" +
      [r, g, b]
        .map((x) => x.toString(16).padStart(2, "0"))
        .join("")
        .toUpperCase();

    const rgb = `rgb(${r}, ${g}, ${b})`;

    setColor({ hex, rgb });
    document.body.style.backgroundColor = hex;
  };

  useEffect(() => {
    generateColor();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center transition-colors">
      <div className="glass rounded-3xl shadow-2xl p-8 max-w-lg w-full mx-4 fade-in">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
            ColorGen (React)
          </h1>
          <p className="text-gray-600">Generate beautiful random colors</p>
        </div>

        <ColorBox hex={color.hex} />

        <div className="grid grid-cols-2 gap-4 mb-6">
          <ColorCard title="HEX Color" value={color.hex} type="hex" />
          <ColorCard title="RGB Color" value={color.rgb} type="rgb" />
        </div>

        <ColorPalette color={color} />

        <button
          onClick={generateColor}
          className="w-full generate-btn text-white font-bold py-4 rounded-xl text-lg flex items-center justify-center"
        >
          <i className="fas fa-palette mr-3"></i> Generate New Color
        </button>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Click the button to generate a beautiful random color
          </p>
        </div>
      </div>
    </div>
  );
}
