import React from "react";
import { Spacer, Card, Text } from "@geist-ui/core";
import type { Variant, Orientation, Alignment } from "./index";

type CardProps = {
  variant: Variant;
  orientation: Orientation;
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
  backLogo: any;
  backSize: number;
};

const SBCard: React.FC<CardProps> = ({
  variant,
  orientation,
  Network,
  logo,
  SBLogo,
  svgLogo,
  MiniLogo,
  name,
  position,
  telephone,
  align,
  frontSize,
  showName,
  showPosition,
  showTel,
  backLogo,
  backSize,
}): JSX.Element => {
  return (
    <>
      {orientation === "Horizontal" ? (
        <>
          <Card
            shadow
            style={{
              width: "400px",
              height: "250px",
              backgroundColor: variant,
            }}
          >
            <Card.Content
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <img className="neticon" src={Network} />
            </Card.Content>

            {logo === SBLogo ? (
              <div
                style={{ textAlign: "center" }}
                dangerouslySetInnerHTML={{ __html: svgLogo }}
              ></div>
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  style={{ transform: `scale(${frontSize})`, maxWidth: "10px" }}
                  src={logo}
                  alt="your-logo"
                />
              </div>
            )}

            <Card.Content>
              <img className="miniLogo" src={MiniLogo} />
            </Card.Content>
          </Card>
          <Spacer />
          <Card
            shadow
            style={{
              width: "400px",
              height: "250px",
              backgroundColor: "white",
            }}
            className="card"
          >
            <Card.Content></Card.Content>
            <Card.Content className="backCard">
              <div>
                <img
                  style={{
                    transform: `scale(${backSize}) translateX(8px) translateY(-2px)`,
                    maxWidth: "10px",
                  }}
                  src={backLogo}
                />
                <Text
                  style={{
                    color: "black",
                    marginBottom: "-1em",
                    textAlign: align,
                  }}
                >
                  {showName ? (name.length > 0 ? name : "John Doe") : ""}
                </Text>
                <Text
                  style={{
                    color: "black",
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
                    color: "black",
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
              <QRCode color={"black"} orientation={orientation} />
            </Card.Content>

            <Card.Content>
              <img className="miniLogo" src={MiniLogo} />
            </Card.Content>
          </Card>
        </>
      ) : (
        <>
          <Card
            shadow
            style={{
              width: "280px",
              height: "400px",
              backgroundColor: variant,
            }}
          >
            <Card.Content
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <img className="neticon" src={Network} />
            </Card.Content>

            {logo === SBLogo ? (
              <div
                style={{ textAlign: "center" }}
                dangerouslySetInnerHTML={{ __html: svgLogo }}
              ></div>
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  style={{ transform: `scale(${frontSize})`, maxWidth: "10px" }}
                  src={logo}
                  alt="your-logo"
                />
              </div>
            )}

            <Card.Content>
              <img className="miniLogo" src={MiniLogo} />
            </Card.Content>
          </Card>
          <Spacer />
          <Card
            shadow
            style={{
              width: "280px",
              height: "400px",
              backgroundColor: "white",
            }}
            className="card"
          >
            <Card.Content></Card.Content>
            <Card.Content
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
              className="backCard"
            >
              <div style={{ marginBottom: "1em" }}>
                <img
                  style={{
                    transform: `scale(${backSize}) translateX(8px) translateY(-2px)`,
                    maxWidth: "10px",
                  }}
                  src={backLogo}
                />
                <Text
                  style={{
                    color: "black",
                    marginBottom: "-1em",
                    textAlign: align,
                  }}
                >
                  {showName ? (name.length > 0 ? name : "John Doe") : ""}
                </Text>
                <Text
                  style={{
                    color: "black",
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
                    color: "black",
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
              <QRCode color={"black"} orientation={orientation} />
            </Card.Content>

            <Card.Content>
              <img className="miniLogo" src={MiniLogo} />
            </Card.Content>
          </Card>
        </>
      )}
    </>
  );
};

function QRCode({
  color,
  orientation,
}: {
  color: string;
  orientation: Orientation;
}) {
  return (
    <>
      <svg
        style={{
          transform: `scale(1.4) ${
            orientation === "Horizontal" ? "translateX(20px)" : ""
          } translateY(7px)`,
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
