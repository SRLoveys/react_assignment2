import { Text, View, Image, Button } from "react-native";
import { useState } from "react";
import Games from "../components/Games.jsx";
import gamesData from "../assets/games.json";

const balatro = require("../assets/images/Balatro_cover.jpg");
const eldenRing = require("../assets/images/eldenRing.jpg");
const bluePrince = require("../assets/images/bluePrince.png")


const images = {"balatro": balatro, "eldenRing": eldenRing, "bluePrince": bluePrince}

export default function Index() {

   const [gamesIndex, setMovieIndex] = useState(0)

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <Games gamesData={gamesData[gamesIndex]} image={images[gamesIndex].image}/>
        <Button title="1" onPress={ () => setMovieIndex(0)}/>
        <Button title="2" onPress={ () => setMovieIndex(1)}/>
        <Button title="3" onPress={ () => setMovieIndex(2)}/>
    </View>
  );
}
