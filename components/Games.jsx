import { Text, View, Image, StyleSheet } from "react-native";

export default function Games( {gamesData, image} ) {
    return (
        <>
            <Image source={image} style={styles.image}/>
            <Text>Game Name: {gamesData.Name}</Text>
            <Text>Price: {gamesData.Price}</Text>
            <Text>Awards: {gamesData.Awards}</Text>
            <Text>Personal Rating: {gamesData.personalRating}</Text>
        </>
        )

    }

    const styles = StyleSheet.create({
        image: {
            width: 450,
            height: 350,
            },
        });