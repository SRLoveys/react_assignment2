import { Text, View, Image, Pressable } from "react-native";
import { useState } from "react";
import Games from "../components/Games.jsx";
import gamesData from "../assets/games.json";
import Button from "../components/Button.jsx";

const balatro = require("../assets/images/Balatro_cover.jpg");
const eldenRing = require("../assets/images/eldenRing.jpg");
const bluePrince = require("../assets/images/bluePrince.png");

const images = {"balatro": balatro, "eldenRing": eldenRing, "bluePrince": bluePrince};

export default function Index() {

   const [gamesIndex, setGamesIndex] = useState(0);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <Games gamesData={gamesData[gamesIndex]} image={images[gamesData[gamesIndex].image]}/>

        <View
            style={{
                flexDirection: "row",
                marginTop: 20,
            }}
        >
        <Button setGame={setGamesIndex} label="1" index={0} />
        <Button setGame={setGamesIndex} label="2" index={1} />
        <Button setGame={setGamesIndex} label="3" index={2} />
       </View>
    </View>
  );
}
