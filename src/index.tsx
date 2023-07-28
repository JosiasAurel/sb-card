import React from "react";
import { Text, Button } from "@geist-ui/core";

export default function Index() {
    return (
        <div className="index">
            <div className="nav-class">
                <div>
<Text h1 style={{ fontSize: "3em"}}>SB Carte Classique</Text>
                <ul>
                    <li>Partager votre fiche de contacte</li>
                    <li>Trois (3) couleurs non personalisables</li>
                    <li>Mise a jour en temps reel gratuitement</li>
                </ul>
                <Text h2>a partir de 5 euros</Text>
                <Button type="secondary">Commander</Button>
                </div>
                
            </div>

            <div className="nav-pro">
                <div>
<Text h1 style={{ fontSize: "3em", color: "white" }}>SB Carte Pro</Text>
                <ul>
                    <li>Partager votre fiche de contacte</li>
                    <li>Personalisation logo et couleur</li>
                    <li>Ajouter votre nom, poste et contacte</li>
                    <li>Mise a jour en temps reel gratuitement</li>
                </ul>
                <Text h2>a partir de 5 euros</Text>
                <Button type="secondary">Commander</Button>
                </div>
                
            </div>
        </div>
    )
}