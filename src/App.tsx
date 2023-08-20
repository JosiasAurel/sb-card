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
import SBCard from "./Card";
import type { Variant, Alignment } from "./types";

const green = "#5afc03";

function App() {
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

  console.log(`
    Made by Josias Aurel
    Contact ->
    Twitter: @JosiasWing
    Email: hey@josiasw.dev
  `);

  return (
    <div className="app">
      <div className="editor">
        <Text h2>Ajouter votre fond</Text>
        <Input
          style={{ width: "100px" }}
          htmlType="color"
          value={variant}
          onChange={(event) => {
            setVariant(event.target.value);
          }}
          placeholder="Choissiser votre fond"
        />

        <Text h2>Changer la couleur du texte</Text>
        <Input
          style={{ width: "100px" }}
          htmlType="color"
          value={textColor}
          onChange={(event) => {
            setTextColor(event.target.value);
          }}
          placeholder="Choissisez la couleur du text"
        />

        <Text h2>Vos Informations</Text>
        <div
          style={{
            width: "40%",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Input
            clearable
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nom"
          />
          <Checkbox
            scale={2}
            checked={showName}
            onChange={(event) => setShowName(event.target.checked)}
          />
        </div>

        <Spacer />
        <div
          style={{
            width: "40%",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Input
            clearable
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            placeholder="Votre Poste e.g CEO"
          />
          <Checkbox
            scale={2}
            checked={showPosition}
            onChange={(event) => setShowPosition(event.target.checked)}
          />
        </div>

        <Spacer />
        <div
          style={{
            width: "40%",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Input
            clearable
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            placeholder="Votre telephone"
          />
          <Checkbox
            scale={2}
            checked={showTel}
            onChange={(event) => setShowTel(event.target.checked)}
          />
        </div>
        <Spacer />

        <Text h3>Alignement de vos informations</Text>
        <Radio.Group
          value={variant}
          onChange={(e) => alighChangeHandler(e as Alignment)}
          useRow
        >
          <Radio value="start" checked={align == "start"}>Gauche</Radio>
          <Radio value="center" checked={align == "center"}>Centre</Radio>
          <Radio value="end" checked={align == "end"}>Droite</Radio>
        </Radio.Group>
        <Spacer />

        <Text h3>Ajouter un logo</Text>
        <Input
          htmlType="file"
          id="file"
          onChange={() => {
            const filesEl = document.getElementById("file") as any;
            const file = filesEl.files[0];
            const reader = new FileReader();
            reader.onloadend = function () {
              setLogo(reader.result);
            };
            reader.readAsDataURL(file);
            // setLogo(imageFile);
          }}
        />
        <Spacer />
        <Slider
          value={frontSize}
          onChange={(value) => setFrontSize(value)}
          style={{ width: "60%" }}
          max={16}
        />

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
        <SBCard
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
        />
      </div>
    </div>
  );
}

export default App;
