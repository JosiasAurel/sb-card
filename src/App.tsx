import { useState, useRef, useEffect } from "react";
import { Radio, Text, Card, Spacer, Input, Button } from "@geist-ui/core";
import { toPng } from "html-to-image";
import { renderToStaticMarkup } from "react-dom/server";
import download from "downloadjs";
import SBLogo from "./assets/logo.png";
import Network from "./assets/network.png";
import MiniLogo from "./assets/petit.png";
import { replaceFill } from "../replace";

type Variant = "Gold" | "White" | "Black" | "Silver";
type Type = "Team" | "Classic";

function App() {
  const [variant, setVariant] = useState<Variant>("Gold");
  const [type, setType] = useState<Type>("Classic");

  const [name, setName] = useState<string>("");
  const [position, setPosition] = useState<string>("");

  const [logo, setLogo] = useState<any>(SBLogo);

  const [svgLogo, setSvgLogo] = useState<string>("");
  useEffect(() => {
    setSvgLogo(
      replaceFill(
        variant === "White"
          ? "black"
          : variant === "Silver" || variant === "Black"
          ? "white"
          : "silver"
      )
    );
  }, [variant]);

  const cardChangeHandler = (value: Variant) => setVariant(value);

  const cardTypeChangeHandler = (value: Type) => setType(value);

  return (
    <div className="app">
      <div className="editor">
        <Text h1>Customiser votre SB Card</Text>
        <Radio.Group
          value={type}
          onChange={(e) => cardTypeChangeHandler(e as Type)}
          useRow
        >
          <Radio value="Classic">Classique</Radio>
          <Radio value="Team">SB Team</Radio>
        </Radio.Group>
        <Text h2>Choissiser votre couleur</Text>
        <Radio.Group
          value={variant}
          onChange={(e) => cardChangeHandler(e as Variant)}
          useRow
        >
          <Radio value="Black">Noir</Radio>
          <Radio value="White">Blanc</Radio>
          <Radio value="Gold">Gold</Radio>
          <Radio value="Silver">Silver</Radio>
        </Radio.Group>

        <Text h2>Vos Informations</Text>
        {type === "Team" ? (
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
                reader.onloadend = function () {
                  setLogo(reader.result);
                };
                reader.readAsDataURL(file);
                // setLogo(imageFile);
              }}
            />
          </>
        ) : (
          ""
        )}
        <Spacer />
        {type === "Classic" ? (
          <Input
            clearable
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            placeholder="Votre Poste e.g CEO"
          />
        ) : (
          ""
        )}
        <Spacer />
        <Button
          onClick={(_) =>
            toPng(document.getElementById("preview") as HTMLElement).then((dataUrl) =>
              download(dataUrl)
            )
          }
        >
          Telecharger
        </Button>
      </div>
      <div id="preview" className="preview">
        <Card
          shadow
          style={{
            width: "400px",
            height: "250px",
            backgroundColor:
              variant === "Gold"
                ? "#FFD700"
                : variant === "Silver"
                ? "silver"
                : variant === "Black" ?
                  "black"
                  : "white"
          }}
          className="card"
        >
          <Card.Content
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <img className="neticon" src={Network} />
          </Card.Content>

          <div
            style={{ textAlign: "center" }}
            dangerouslySetInnerHTML={{ __html: svgLogo }}
          ></div>

          <Card.Content>
            <img className="miniLogo" src={MiniLogo} />
          </Card.Content>
        </Card>
        <Spacer />
        <Card
          shadow
          style={{ width: "400px", height: "250px", backgroundColor:
              variant === "Gold"
                ? "#FFD700"
                : variant === "Silver"
                ? "silver"
                : variant === "Black" ?
                  "black"
                  : "white"}}

          className="card"
        >
          <Card.Content></Card.Content>
          <Card.Content className="backCard">
            <div>
              <Text style={{ color: variant === "Black" ? "white": "black" }}>{name}</Text>
              <Text style={{ fontWeight: "bold", color: variant === "Black" ? "white" : "black" }}>{position}</Text>
            </div>
            <QRCode color={variant === "Black" ? "white" : "black"} />
          </Card.Content>

          <Card.Content>
            <img className="miniLogo" src={MiniLogo} />
          </Card.Content>
        </Card>
      </div>
    </div>
  );
}

function QRCode({ color }: { color: string }) {
  return (
    <>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="300px"
        fill={color}
        height="300px"
        viewBox="0 0 1200.000000 1200.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,1200.000000) scale(0.100000,-0.100000)"
          fill={color}
          stroke="none"
        >
          <path
            d="M1300 9565 l0 -1135 1135 0 1135 0 0 1135 0 1135 -1135 0 -1135 0 0
-1135z m1940 5 l0 -810 -810 0 -810 0 0 810 0 810 810 0 810 0 0 -810z"
          />
          <path d="M1950 9565 l0 -485 485 0 485 0 0 485 0 485 -485 0 -485 0 0 -485z" />
          <path
            d="M4220 10375 l0 -325 160 0 160 0 0 -160 0 -160 160 0 160 0 0 325 0
325 165 0 165 0 0 160 0 160 -165 0 -165 0 0 -160 0 -160 -160 0 -160 0 0 160
0 160 -160 0 -160 0 0 -325z"
          />
          <path
            d="M6162 10378 l3 -323 163 -3 162 -2 0 -160 0 -160 -325 0 -325 0 0
325 0 325 -165 0 -165 0 0 -650 0 -650 -160 0 -160 0 -2 163 -3 162 -160 0
-160 0 0 -160 0 -160 163 -3 162 -2 0 -485 0 -485 160 0 160 0 0 -165 0 -165
-160 0 -160 0 0 -160 0 -160 160 0 160 0 0 160 0 160 165 0 165 0 0 -160 0
-160 160 0 160 0 0 325 0 325 165 0 165 0 0 -165 0 -165 160 0 160 0 0 -160 0
-160 -160 0 -160 0 0 -160 0 -160 -162 -2 -163 -3 -3 -162 -2 -163 165 0 165
0 0 -325 0 -325 160 0 160 0 0 -160 0 -160 163 -2 162 -3 0 -160 0 -160 -487
-3 -488 -2 0 165 0 165 -160 0 -160 0 0 160 0 160 160 0 160 0 0 165 0 165
-160 0 -160 0 0 -165 0 -165 -165 0 -165 0 0 -485 0 -485 -160 0 -160 0 0 325
0 325 -162 -2 -163 -3 -3 -322 -2 -323 -160 0 -160 0 0 325 0 325 -325 0 -325
0 0 -165 0 -165 165 0 165 0 0 -160 0 -160 160 0 160 0 0 -165 0 -165 -325 0
-325 0 0 165 0 165 -160 0 -160 0 0 160 0 160 -165 0 -165 0 0 165 0 165 165
0 165 0 0 160 0 160 160 0 160 0 0 165 0 165 163 -2 162 -3 3 -162 2 -163 320
0 320 0 0 975 0 975 -160 0 -160 0 0 160 0 160 160 0 160 0 0 165 0 165 -160
0 -160 0 0 160 0 160 -325 0 -325 0 0 -485 0 -485 165 0 165 0 -2 -162 -3
-163 -162 -3 -163 -2 0 -320 0 -320 -160 0 -160 0 0 160 0 160 -165 0 -165 0
0 160 0 160 163 2 162 3 3 163 2 162 -165 0 -165 0 0 -165 0 -165 -325 0 -325
0 0 -160 0 -160 -160 0 -160 0 0 325 0 325 -325 0 -325 0 0 -325 0 -325 325 0
325 0 0 -160 0 -160 160 0 160 0 0 160 0 160 325 0 325 0 0 -160 0 -160 165 0
165 0 0 -165 0 -165 -975 0 -975 0 0 165 0 165 -160 0 -160 0 0 -490 0 -490
322 2 323 3 3 163 2 162 160 0 160 0 0 -165 0 -165 485 0 485 0 0 -160 0 -160
-485 0 -485 0 0 -165 0 -165 485 0 485 0 0 -160 0 -160 165 0 165 0 0 -165 0
-165 -325 0 -325 0 0 165 0 165 -162 -2 -163 -3 -3 -163 -2 -163 -158 3 -157
3 -3 162 -2 163 -160 0 -160 0 0 160 0 160 -325 0 -325 0 0 -325 0 -325 160 0
160 0 0 165 0 165 165 0 165 0 0 -325 0 -325 -325 0 -325 0 0 -160 0 -160 322
-2 323 -3 3 -162 2 -163 160 0 160 0 0 325 0 325 325 0 325 0 0 -160 0 -160
-162 -2 -163 -3 0 -160 0 -160 648 -3 647 -2 0 -160 0 -160 325 0 325 0 0
-165 0 -165 -160 0 -160 0 0 -485 0 -485 -165 0 -165 0 0 -325 0 -325 165 0
165 0 0 -160 0 -160 645 0 645 0 2 322 3 323 160 0 160 0 3 -162 2 -163 160 0
160 0 0 -160 0 -160 325 0 325 0 0 160 0 160 -325 0 -325 0 2 163 3 162 163 3
162 2 0 160 0 160 -165 0 -165 0 0 325 0 325 165 0 165 0 0 325 0 325 325 0
325 0 0 160 0 160 -165 0 -165 0 0 650 0 650 163 -2 162 -3 3 -163 2 -162 160
0 160 0 0 -160 0 -160 -160 0 -160 0 0 -160 0 -160 160 0 160 0 0 -165 0 -165
160 0 160 0 0 -325 0 -325 -160 0 -160 0 0 -485 0 -485 -160 0 -160 0 0 485 0
485 -165 0 -165 0 0 -645 0 -645 163 -2 162 -3 3 -162 2 -163 160 0 160 0 0
325 0 325 160 0 160 0 0 -485 0 -485 325 0 325 0 0 160 0 160 -160 0 -160 0 0
165 0 165 160 0 160 0 0 320 0 320 165 0 165 0 0 -320 0 -320 325 0 325 0 -2
-163 -3 -162 -322 -3 -323 -2 0 -160 0 -160 485 0 485 0 0 325 0 325 485 0
485 0 0 160 0 160 -160 0 -160 0 0 485 0 485 160 0 160 0 0 325 0 325 -160 0
-160 0 0 325 0 325 160 0 160 0 0 485 0 485 -325 0 -325 0 0 -160 0 -160 165
0 165 0 0 -325 0 -325 -165 0 -165 0 0 160 0 160 -160 0 -160 0 0 165 0 165
-160 0 -160 0 -2 -162 -3 -163 -162 -3 -163 -2 0 -160 0 -160 165 0 165 0 0
-160 0 -160 -325 0 -325 0 0 160 0 160 -490 0 -490 0 0 160 0 160 -160 0 -160
0 0 325 0 325 160 0 160 0 0 -160 0 -160 165 0 165 0 0 -165 0 -165 323 2 322
3 3 162 2 163 160 0 160 0 0 160 0 160 325 0 325 0 0 165 0 165 160 0 160 0 0
160 0 160 -160 0 -160 0 0 490 0 490 160 0 160 0 0 160 0 160 165 0 165 0 0
-160 0 -160 160 0 160 0 0 320 0 320 -325 0 -325 0 0 -160 0 -160 -160 0 -160
0 0 325 0 325 -160 0 -160 0 0 -325 0 -325 160 0 160 0 0 -160 0 -160 -325 0
-325 0 0 485 0 485 -325 0 -325 0 0 -325 0 -325 165 0 165 0 0 -160 0 -160
-325 0 -325 0 0 810 0 810 -162 -2 -163 -3 -3 -162 -2 -163 -160 0 -160 0 0
490 0 490 -160 0 -160 0 0 320 0 320 160 0 160 0 0 -160 0 -160 325 0 325 0 0
485 0 485 -325 0 -325 0 0 -160 0 -160 -160 0 -160 0 0 -165 0 -165 -325 0
-325 0 0 165 0 165 160 0 160 0 0 160 0 160 -325 0 -325 0 2 -322z m1618 -163
l0 -165 -160 0 -160 0 0 165 0 165 160 0 160 0 0 -165z m-970 -645 l0 -160
165 0 165 0 -2 -162 -3 -163 -162 -3 -163 -2 0 165 0 165 -160 0 -160 0 0
-490 0 -490 160 0 160 0 0 165 0 165 163 -2 162 -3 3 -162 2 -163 160 0 160 0
0 -160 0 -160 160 0 160 0 0 -485 0 -485 -160 0 -160 0 0 -165 0 -165 160 0
160 0 0 -160 0 -160 325 0 325 0 0 -165 0 -165 165 0 165 0 0 165 0 165 160 0
160 0 0 160 0 160 165 0 165 0 0 -485 0 -485 -165 0 -165 0 0 -165 0 -165
-160 0 -160 0 0 165 0 165 -325 0 -325 0 0 160 0 160 -162 2 -163 3 -3 163 -2
162 -320 0 -320 0 -2 -162 -3 -163 -162 -3 -163 -2 0 325 0 325 -160 0 -160 0
0 165 0 165 160 0 160 0 0 160 0 160 165 0 165 0 0 485 0 485 -165 0 -165 0 0
-160 0 -160 -160 0 -160 0 0 160 0 160 -165 0 -165 0 2 488 3 487 163 3 162 2
0 160 0 160 160 0 160 0 0 -160z m-970 -815 l0 -325 -162 2 -163 3 -3 323 -2
322 165 0 165 0 0 -325z m-1300 -160 l0 -165 -160 0 -160 0 0 165 0 165 160 0
160 0 0 -165z m0 -1620 l0 -165 -160 0 -160 0 0 165 0 165 160 0 160 0 0 -165z
m-650 -325 l0 -160 -160 0 -160 0 0 -165 0 -165 -165 0 -165 0 2 163 3 162
163 3 162 2 0 160 0 160 160 0 160 0 0 -160z m4540 -1300 l0 -160 -160 0 -160
0 0 160 0 160 160 0 160 0 0 -160z m-1940 -485 l0 -325 -165 0 -165 0 0 160 0
160 -160 0 -160 0 0 165 0 165 325 0 325 0 0 -325z m-2600 -165 l0 -160 165 0
165 0 0 -160 0 -160 160 0 160 0 0 -165 0 -165 160 0 160 0 2 163 3 162 163 3
162 2 0 -165 0 -165 325 0 325 0 0 165 0 165 -165 0 -165 0 0 160 0 160 165 0
165 0 0 -160 0 -160 323 -2 322 -3 3 -162 2 -163 -325 0 -325 0 0 -160 0 -160
-650 0 -650 0 0 160 0 160 -160 0 -160 0 0 165 0 165 -165 0 -165 0 0 160 0
160 -160 0 -160 0 0 -160 0 -160 -165 0 -165 0 0 160 0 160 165 0 165 0 0 160
0 160 160 0 160 0 0 -160z m970 0 l0 -160 -160 0 -160 0 0 160 0 160 160 0
160 0 0 -160z m5190 -645 l0 -485 165 0 165 0 0 -165 0 -165 -165 0 -165 0 0
-325 0 -325 -160 0 -160 0 0 -320 0 -320 -160 0 -160 0 0 485 0 485 160 0 160
0 0 160 0 160 160 0 160 0 0 165 0 165 -160 0 -160 0 0 485 0 485 160 0 160 0
0 -485z m-970 -650 l0 -485 -485 0 -485 0 0 485 0 485 485 0 485 0 0 -485z
m-3570 -650 l0 -485 -160 0 -160 0 0 -325 0 -325 -325 0 -325 0 0 165 0 165
-160 0 -160 0 0 160 0 160 160 0 160 0 0 160 0 160 323 2 322 3 3 163 2 162
-165 0 -165 0 0 160 0 160 325 0 325 0 0 -485z m650 325 l0 -160 -160 0 -160
0 0 160 0 160 160 0 160 0 0 -160z m1950 -650 l0 -160 -165 0 -165 0 0 160 0
160 165 0 165 0 0 -160z"
          />
          <path d="M8760 6000 l0 -160 160 0 160 0 0 160 0 160 -160 0 -160 0 0 -160z" />
          <path d="M8430 3405 l0 -165 163 2 162 3 3 163 2 162 -165 0 -165 0 0 -165z" />
          <path
            d="M8430 9565 l0 -1135 1135 0 1135 0 0 1135 0 1135 -1135 0 -1135 0 0
-1135z m1950 5 l0 -810 -810 0 -810 0 0 810 0 810 810 0 810 0 0 -810z"
          />
          <path d="M9080 9565 l0 -485 485 0 485 0 0 485 0 485 -485 0 -485 0 0 -485z" />
          <path d="M3890 9570 l0 -160 165 0 165 0 0 160 0 160 -165 0 -165 0 0 -160z" />
          <path
            d="M10050 6650 l0 -160 165 0 165 0 0 -325 0 -325 160 0 160 0 0 325 0
325 -160 0 -160 0 0 160 0 160 -165 0 -165 0 0 -160z"
          />
          <path
            d="M1300 2435 l0 -1135 1135 0 1135 0 0 1135 0 1135 -1135 0 -1135 0 0
-1135z m1940 -5 l0 -810 -810 0 -810 0 0 810 0 810 810 0 810 0 0 -810z"
          />
          <path d="M1950 2435 l0 -485 485 0 485 0 0 485 0 485 -485 0 -485 0 0 -485z" />
          <path d="M10380 1460 l0 -160 160 0 160 0 0 160 0 160 -160 0 -160 0 0 -160z" />
        </g>
      </svg>
    </>
  );
}

export default App;
