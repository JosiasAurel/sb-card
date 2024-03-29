import React from "react";
import { Spacer, Card, Text } from "@geist-ui/core";
import type { Variant, Alignment } from "./types";
import Wifi from "./Wifi";
import SBC from "./SBC";
import ClassicLogo from "./CLogo";
import MiniLogo from "./MiniLogo";
import MainLogo from "./MainLogo";

function hexToRgb(hex: string) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

// computes the difference between 'color' and white
function colorDiff(color: string): number {
  let colorObj = hexToRgb(color) ?? { r: 0, g: 0, b: 0};
  let white = { r: 255, g: 255, b: 255 };
  const sub = (a: any, b: any) => { return { r: b.r - a.r, g: b.g - a.g, b: b.b - a.b } }
  const mag = (o: any) => Math.sqrt(o.r*o.r + o.g*o.g + o.b*o.b);
  console.log(mag(sub(colorObj, white)));

  return mag(sub(colorObj, white));
}

type CardProps = {
  variant: Variant;
  Network: any;
  logo: any;
  SBLogo: any;
  svgLogo: string;
  MiniLogo: any;
  name: string;
  position: string;
  telephone: string;
  align: Alignment;
  frontSize: number;
  showName: boolean;
  showPosition: boolean;
  showTel: boolean;
  backSize: number;
  textColor: string | "black";
};

const SBCard: React.FC<CardProps> = ({
  variant,
  Network,
  logo,
  SBLogo,
  svgLogo,
  name,
  position,
  telephone,
  align,
  frontSize,
  showName,
  showPosition,
  showTel,
  backSize,
  textColor,
}): JSX.Element => {
  return (
    <>
      <Card
        shadow
        style={{
          width: "400px",
          height: "250px",
          backgroundColor: variant,
        }}
        className="recto"
      >
        <Card.Content
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Wifi fillColor={textColor} />
        </Card.Content>

        <div style={{
          position: "relative",
          top: "-20px"
        }}>
        {logo === SBLogo ? (
          <div
            style={{ textAlign: "center" }}
          >
              <MainLogo fillColor={textColor} />
              </div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
                position: "relative",
                top: "20px"
            }}
          >
            <img
              style={{ transform: `scale(${frontSize})`, maxWidth: "10px" }}
              src={logo}
              alt="your-logo"
            />
          </div>
        )}
  </div>

        <Card.Content style={{
          position: "relative",
          top: logo === SBLogo ? "-20px" : "20px"
        }}>
          <MiniLogo fillColor={textColor} visible={true} />
        </Card.Content>
      </Card>
      <Spacer />

      {/* back of card now*/}

      <Card
        shadow
        style={{
          width: "400px",
          height: "250px",
          backgroundColor: variant,
        }}
        className="card verso"
      >
        <Card.Content
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
        >
          <Wifi fillColor={textColor} />
        </Card.Content>
        <Card.Content className="backCard" style={{
          position: "relative",
          top: "-30px",
          left: "-35px"
        }}>
          <div>
            <Text
              style={{
                color: textColor,
                marginBottom: "-1em",
                textAlign: align,
              }}
            >
              {showName ? (name.length > 0 ? name : "John Doe") : ""}
            </Text>
            <Text
              style={{
                color: textColor,
                marginBottom: "-1em",
                textAlign: align,
              }}
            >
              {showPosition
                ? position.length > 0
                  ? position
                  : "Votre poste"
                : ""}
            </Text>
            <Text
              style={{
                color: textColor,
                marginBottom: "-1em",
                textAlign: align,
              }}
            >
              {showTel
                ? telephone.length > 0
                  ? telephone
                  : "+237 638473754"
                : ""}
            </Text>{" "}
          </div>
          <QRCode color={colorDiff(variant) < 110 ? "#000000" : variant} />
        </Card.Content>

        <Card.Content style={{
          position: "relative",
          top: "-50px"
        }}>
          <MiniLogo fillColor={textColor} visible={true} />
        </Card.Content>
      </Card>
    </>
  );
};

export const Classic: React.FC<
  CardProps & { color?: "white" | "black" | "blue" }
> = ({
  variant,
  Network,
  logo,
  SBLogo,
  svgLogo,
  name,
  position,
  telephone,
  align,
  frontSize,
  showName,
  showPosition,
  showTel,
  backSize,
  textColor,
  color,
}): JSX.Element => {
  return (
    <>
      <Card
        shadow
        style={{
          width: "400px",
          height: "250px",
          background:
            color != "blue"
              ? color
              : "linear-gradient(130deg, rgba(0,159,227,1) 0%, rgba(99,44,135,1) 92%, rgba(103,39,131,1) 100%, rgba(0,212,255,1) 100%, rgba(0,212,255,1) 100%)",
        }}
        className="card"
      >
        <Card.Content
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Wifi fillColor={textColor} />
        </Card.Content>

        <ClassicLogo />

        <Card.Content>
          <MiniLogo fillColor={textColor} visible={false} />
        </Card.Content>
      </Card>
      <Spacer />

      {/* back of card now*/}

      <Card
        shadow
        style={{
          width: "400px",
          height: "250px",
          background:
            color != "blue"
              ? color
              : "linear-gradient(130deg, rgba(0,159,227,1) 0%, rgba(99,44,135,1) 92%, rgba(103,39,131,1) 100%, rgba(0,212,255,1) 100%, rgba(0,212,255,1) 100%)",
        }}
        className="card verso"
      >
        <Card.Content
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
        >
          <Wifi fillColor={textColor} />
        </Card.Content>

        <Card.Content className="backCard">
          {color == "white" ? <SBC /> : <SBC />}
          <QRCode color={colorDiff(variant) < 100 ? "black" : variant} />
        </Card.Content>

        <Card.Content>
          <MiniLogo fillColor={textColor} visible={true} />
        </Card.Content>
      </Card>
    </>
  );
};

function QRCode({ color }: { color: string }) {
  return (
    <>
      <svg
        style={{
          transform: "scale(1.4) translateX(20px)",
          backgroundColor: "white",
        }}
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
export default SBCard;
