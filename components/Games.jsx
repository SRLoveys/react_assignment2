import { Text, View, Image, StyleSheet } from "react-native";

export default function Games( {gameData, image} ) {
    return (
        <>
            <Image source={image} style={styles.image}/>
            <Text>Game Name: {gameData.Name}</Text>
            <Text>Price: {gameData.Price}</Text>
            <Text>Awards: {gameData.Awards}</Text>
            <Text>Personal Rating: {gameData.personalRating}</Text>
        </>
        )

    }

    const styles = StyleSheet.create({
        image: {
            width: 450,
            height: 350,
            },
        });