import { useState } from "react";
import { Radio, Text, Card, Spacer, Input } from "@geist-ui/core";
import { Wifi } from "@geist-ui/icons";
import QRCode from "./assets/qr.png";

function App() {
  const [color, setColor] = useState<string>("black");
  const [vertical, setVertical] = useState<boolean>(false);

  const toggleColor = (): void =>
    color === "white" ? setColor("black") : setColor("white");

  const [name, setName] = useState<string>("Nom et Prenom");
  const [position, setPosition] = useState<string>("Fonction");
  const [tel, setTel] = useState<number>(237656047446);

  return (
    <div className="app">
      <div className="editor">
        <Text h1>Customiser votre SB Card</Text>
        <Text h2>Choissiser votre couleur</Text>
        <Radio.Group useRow>
          <Radio
            value="black"
            onClick={toggleColor}
            checked={color === "black" ? true : false}
          >
            Noir
          </Radio>
          <Radio
            value="white"
            onClick={toggleColor}
            checked={color === "white" ? true : false}
          >
            Blanc
          </Radio>
          <Radio
            value="white"
            onClick={toggleColor}
            checked={color === "white" ? true : false}
          >
            Gold
          </Radio>
          <Radio
            value="white"
            onClick={toggleColor}
            checked={color === "white" ? true : false}
          >
            Team
          </Radio>

        </Radio.Group>

        <Text h2>Orientation</Text>
        <Radio.Group useRow>
          <Radio
            value="black"
            onClick={(_) => setVertical(!vertical)}
            checked={!vertical}
          >
            Horizontale
          </Radio>
          <Radio
            value="white"
            onClick={(_) => setVertical(!vertical)}
            checked={vertical}
          >
            Verticale
          </Radio>
        </Radio.Group>

        <Text h2>Vos Informations</Text>
        <Input
          clearable
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nom"
        />
        <Spacer />
        <Input
          clearable
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          placeholder="Votre Poste"
        />
        <Spacer />
        <Input
          clearable
          value={tel.toString()}
          onChange={(e) => setTel(parseInt(e.target.value))}
          placeholder="Telephone"
        />
      </div>

      {vertical ? (
        <div
          className="preview"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Card
            shadow
            type={color === "black" ? "dark" : "default"}
            style={{
              width: "250px",
              height: "400px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
            className="card"
          >
            <Card.Content
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Wifi style={{ transform: "rotate(45deg)" }} />
            </Card.Content>

            <div style={{ textAlign: "center" }}>
              <Text h1 style={{ fontWeight: "bolder" }}>
                SB
              </Text>
              <Text h3>Card</Text>
            </div>

            <Card.Content>SBCard</Card.Content>
          </Card>
          <Spacer />
          <Card
            shadow
            type={color === "black" ? "dark" : "default"}
            style={{
              width: "250px",
              height: "400px",
            }}
            className="card"
          >
            <Card.Content
              style={
                vertical
                  ? {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }
                  : {}
              }
              className="backCard"
            >
              <div>
                <Text>{name}</Text>
                <Text style={{ fontWeight: "bold" }}>{position}</Text>
                <Text>+{tel}</Text>
              </div>
              {color === "white" ? (
                <img src={QRCode} alt="qr-code" />
              ) : (
                <img
                  style={{
                    backgroundColor: "white",
                    borderRadius: "8px",
                  }}
                  src={QRCode}
                  alt="qr-code"
                />
              )}
            </Card.Content>
          </Card>
        </div>
      ) : (
        <div className="preview">
          <Card
            shadow
            type={color === "black" ? "dark" : "default"}
            style={{
              width: "400px",
              height: "250px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
            className="card"
          >
            <Card.Content
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Wifi style={{ transform: "rotate(45deg)" }} />
            </Card.Content>

            <div style={{ textAlign: "center" }}>
              <Text h1 style={{ fontWeight: "bolder" }}>
                SB
              </Text>
              <Text h3>Card</Text>
            </div>

            <Card.Content>SBCard</Card.Content>
          </Card>
          <Spacer />
          <Card
            shadow
            type={color === "black" ? "dark" : "default"}
            style={{
              width: "400px",
              height: "250px",
            }}
            className="card"
          >
            <Card.Content className="backCard">
              <div>
                <Text>{name}</Text>
                <Text style={{ fontWeight: "bold" }}>{position}</Text>
                <Text>+{tel}</Text>
              </div>
              {color === "white" ? (
                <img src={QRCode} alt="qr-code" />
              ) : (
                <img
                  style={{
                    backgroundColor: "white",
                    borderRadius: "8px",
                  }}
                  src={QRCode}
                  alt="qr-code"
                />
              )}
            </Card.Content>
          </Card>
        </div>
      )}
    </div>
  );
}

export default App;
