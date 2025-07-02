import { Text, TextInput, Button } from 'react-native';
import { useState } from 'react';
import { useContext } from 'react';
import { GamesContext } from '../components/GamesContext';

export default function UpdateGames() {
    const [currentGame, setCurrentGame] = useState(0)
    const { gameData, setGameData } = useContext(GamesContext);

    const [name, setName] = useState(gameData[currentGame].Name)
    const [price, setPrice] = useState(gameData[currentGame].Price)
    const [awards, setAwards] = useState(gameData[currentGame].Awards)
    const [personalRating, setPersonalRating] = useState(gameData[currentGame].personalRating)

    const updateGameData = () => {

        const updatedData = {
            Name: name,
            Price: price,
            Awards: awards,
            personalRating: personalRating,
            image: "bluePrince"
        }

        gameData[currentGame] = updatedData
        setGameData(gameData)

    }

    const changeGameIndex = (value) => {

        const index = parseInt(value)
        setName(gameData[index].Name);
        setPrice(gameData[index].Price);
        setAwards(gameData[index].Awards);
        setPersonalRating(gameData[index].personalRating);
        setCurrentGame(index);

    }

    return (
        <>
            <Text>Game Index</Text>
            <TextInput value={currentGame.toString()} onChangeText={changeGameIndex}/>

            <Text>Name</Text>
            <TextInput value={name} onChangeText={setName}/>

            <Text>Price</Text>
            <TextInput value={price} onChangeText={setPrice}/>

            <Text>Awards</Text>
            <TextInput value={awards} onChangeText={setAwards}/>

            <Text>Personal Rating</Text>
            <TextInput value={personalRating} onChangeText={setPersonalRating}/>

            <Button title="Update" onPress={updateGameData} />

        </>

    )

}