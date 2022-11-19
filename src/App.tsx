import { useState, useEffect } from "react";
import { Radio, Text, Card, Spacer, Input, Button } from "@geist-ui/core";
import { toPng } from "html-to-image";
import { renderToStaticMarkup } from "react-dom/server";
import download from "downloadjs";

// white variants
import WhiteFront from "./assets/blanc.png";
import WhiteBack from "./assets/dos-blanc.png";

// gold variants
import GoldFront from "./assets/face-gold.png";
import GoldCustom from "./assets/gold.png";

// silver variant
import SilverFront from "./assets/silver.png";

// black variant
import BlackFront from "./assets/noir.png";

import SBLogo from "./assets/logo-sbcard.png";

type Variant = "Gold" | "White" | "Black" | "Silver";
type Type = "Team" | "Classic";

function App() {
  const [variant, setVariant] = useState<Variant>("Gold");
  const [type, setType] = useState<Type>("Classic");

  const [name, setName] = useState<string>("");
  const [position, setPosition] = useState<string>("");

  const [logo, setLogo] = useState<any>(SBLogo);

  const cardChangeHandler = (value: Variant) => setVariant(value);

  const cardTypeChangeHandler = (value: Type) => setType(value);


  return (
    <div className="app">
      <div className="editor">
        <Text h1>Customiser votre SB Card</Text>
    <Radio.Group value={type} onChange={e => cardTypeChangeHandler(e as Type)} useRow>
          <Radio
            value="Classic"
          >
            Classique
          </Radio>
          <Radio
            value="Team"
          >
            SB Team
          </Radio>
          </Radio.Group>
        <Text h2>Choissiser votre couleur</Text>
        <Radio.Group value={variant} onChange={e => cardChangeHandler(e as Variant)} useRow>
          <Radio
            value="Black"
          >
            Noir
          </Radio>
          <Radio
            value="White"
          >
            Blanc
          </Radio>
          <Radio
            value="Gold"
          >
            Gold
          </Radio>
          <Radio
            value="Silver"
          >
            Silver
          </Radio>

        </Radio.Group>

        <Text h2>Vos Informations</Text>
        {type === "Team" ? 
          <>
<Input
          clearable
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nom"
        /> 
            <Spacer />
        <Input
          htmlType="file"
          id="file"
          onChange={() => {
            const filesEl = document.getElementById("file") as any;
            const file = filesEl.files[0];
            const reader = new FileReader();
            reader.onloadend = function() {
              setLogo(reader.result);
            };
            reader.readAsDataURL(file);
            // setLogo(imageFile);
          }}
        /> 
          </>: ""}
        <Spacer />
        { type === "Classic" ?<Input
          clearable
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          placeholder="Votre Poste e.g CEO"
        /> : ""}
        <Spacer />
        <Button onClick={_ => toPng(document.getElementById("image") as HTMLElement).then(dataUrl => download(dataUrl))}>Telecharger</Button>
      </div>

      <div className="preview" id="image">
        <img className="sbLogo" src={logo} id="imageCont" alt="sb-logo" />
        <Text className="position" h4> {type === "Classic" ? position : name} {name === "" && position === "" ? "CEO" : ""} </Text>
<>
            <div className="card-front">
              <img src={variant === "White" ? WhiteFront : variant === "Gold" ? GoldFront : variant === "Silver" ? SilverFront : BlackFront} />
            </div>
            <div className="card-back">
              <img src={WhiteBack} />
            </div>
          </>
      
      </div>
    </div >
  );
}

export default App;
