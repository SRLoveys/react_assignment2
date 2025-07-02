import { Text, View, Image} from "react-native";
import { useState } from "react";
import Games from "../components/Games.jsx";
import Button from "../components/Button.jsx";
import { useRouter } from 'expo-router';
import { useContext } from 'react';
import { GamesContext } from '../components/GamesContext'

const balatro = require("../assets/images/Balatro_cover.jpg");
const eldenRing = require("../assets/images/eldenRing.jpg");
const bluePrince = require("../assets/images/bluePrince.png");

const images = {"balatro": balatro, "eldenRing": eldenRing, "bluePrince": bluePrince};

export default function Index() {

   const router = useRouter();
   const { gameData } = useContext(GamesContext)
   const [gamesIndex, setGamesIndex] = useState(0);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <Games gameData={gameData[gamesIndex]} image={images[gameData[gamesIndex].image]}/>

        <View
            style={{
                flexDirection: "row",
                marginTop: 20,
            }}
        >
        <Button setGame={setGamesIndex} label="1" index={0} currentIndex={gamesIndex}/>
        <Button setGame={setGamesIndex} label="2" index={1} currentIndex={gamesIndex}/>
        <Button setGame={setGamesIndex} label="3" index={2} currentIndex={gamesIndex}/>
       </View>
    </View>
  );
}
