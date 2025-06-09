import { Text, View, Image } from "react-native";

export default function Games( {gamesData, image} ) {
    return (
        <>
            <Text>Game Name: {gamesData.Name}</Text>
            <Text>Price: {gamesData.Price}</Text>
            <Text>Awards: {gamesData.Awards}</Text>
            <Text>Personal Rating: {gamesData.personalRating}</Text>
            <Image source={image}/>
        </>
        )
    }