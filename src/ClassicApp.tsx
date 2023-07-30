import { useState, useEffect } from "react";
import {
  Radio,
  Text,
  Slider,
  Spacer,
  Input,
  Button,
  Checkbox,
} from "@geist-ui/core";
import { toPng } from "html-to-image";
import download from "downloadjs";
import SBLogo from "./assets/logo.png";
import Network from "./assets/wifi.svg";
import MiniLogo from "./assets/petit.png";
import { replaceFill } from "../replace";
import { Classic } from "./Card";
import type { Variant, Alignment } from "./types";

const green = "#5afc03";

type Color = "white" | "black" | "blue";

export default function ClassicApp() {
  const [variant, setVariant] = useState<Variant>("white");
  const [align, setAlign] = useState<Alignment>("center");
  const [frontSize, setFrontSize] = useState<number>(14);
  const [backSize, setBackSize] = useState<number>(8);
  const [textColor, setTextColor] = useState<"black" | string>("black");

  const [name, setName] = useState<string>("");
  const [position, setPosition] = useState<string>("");
  const [telephone, setTelephone] = useState<string>("");

  const [showName, setShowName] = useState<boolean>(true);
  const [showPosition, setShowPosition] = useState<boolean>(true);
  const [showTel, setShowTel] = useState<boolean>(true);

  const [logo, setLogo] = useState<any>(SBLogo);

  const [svgLogo, setSvgLogo] = useState<string>("");
  useEffect(() => {
    setSvgLogo(replaceFill(variant === "white" ? "black" : "white"));
  }, [variant]);

  const cardChangeHandler = (value: Variant) => setVariant(value);
  const alighChangeHandler = (value: Alignment) => setAlign(value);

  const [color, setColor] = useState<Color>("white");
  const colorChangeHandler = (value: Color) => setColor(value);

  console.log(`
    Made by Josias Aurel
    Contact ->
    Twitter: @JosiasWing
    Email: hey@josiasw.dev
  `);

  return (
    <div className="app">
      <div className="editor">
        <Text h1>Choissisez votre couleur de carte</Text>
        <Spacer />
        <Radio.Group
          value={variant}
          onChange={(e) => colorChangeHandler(e as Color)}
          useRow
        >
          <Radio value="white">Blanc</Radio>
          <Radio value="blue">Blue</Radio>
          <Radio value="black">Noir</Radio>
        </Radio.Group>
        <Spacer />
        <Button
          onClick={(_) =>
            toPng(document.getElementById("preview") as HTMLElement).then(
              (dataUrl) => download(dataUrl),
            )
          }
        >
          Telecharger
        </Button>
        <Spacer />
      </div>

      <div
        id="preview"
        style={{
          flexDirection: "column",
        }}
        className="preview"
      >
        <Classic
          variant={variant}
          Network={Network}
          logo={logo}
          SBLogo={SBLogo}
          svgLogo={svgLogo}
          MiniLogo={MiniLogo}
          name={name}
          position={position}
          telephone={telephone}
          align={align}
          frontSize={frontSize}
          showName={showName}
          showPosition={showPosition}
          showTel={showTel}
          backSize={backSize}
          textColor={textColor}
          color={color}
        />
      </div>
    </div>
  );
}
