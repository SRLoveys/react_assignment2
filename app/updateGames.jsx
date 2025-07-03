import { Text, TextInput, Button } from 'react-native';
import { useState } from 'react';
import { useContext } from 'react';
import { GamesContext } from '../components/GamesContext';
import { Picker } from '@react-native-picker/picker';

export default function UpdateGames() {
    const [currentGame, setCurrentGame] = useState(0)
    const { gameData, setGameData } = useContext(GamesContext);

    const [name, setName] = useState(gameData[currentGame].Name)
    const [price, setPrice] = useState(gameData[currentGame].Price)
    const [awards, setAwards] = useState(gameData[currentGame].Awards)
    const [personalRating, setPersonalRating] = useState(gameData[currentGame].personalRating)
    const [cover, setCover] = useState(gameData[currentGame].Image)

    const updateGameData = () => {

        const updatedData = {
            Name: name,
            Price: price,
            Awards: awards,
            personalRating: personalRating,
            image: cover
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
        setCover(gameData[index].Image)
        setCurrentGame(index);

    }

    return (
        <>
            <Text>Game Index</Text>
            <Picker
                selectedValue={currentGame}
                onValueChange={(itemValue, itemIndex) =>
                    changeGameIndex(itemIndex)
                }>
                <Picker.Item label="Game 1" value="g1" />
                <Picker.Item label="Game 2" value="g2" />
                <Picker.Item label="Game 3" value="g3" />
            </Picker>

            <Text>Name</Text>
            <TextInput value={name} onChangeText={setName}/>

            <Text>Price</Text>
            <TextInput value={price} onChangeText={setPrice}/>

            <Text>Awards</Text>
            <TextInput value={awards} onChangeText={setAwards}/>

            <Text>Personal Rating</Text>
            <TextInput value={personalRating} onChangeText={setPersonalRating}/>

            <Text>Cover</Text>
            <Picker
                selectedValue={cover}
                onValueChange={(itemValue, itemIndex) =>
                    setCover(itemValue)
                }>
                <Picker.Item label = "Balatro 1" value="balatro" />
                <Picker.Item label = "Balatro 2" value="balatro2" />
                <Picker.Item label = "Elden Ring 1" value="eldenRing" />
                <Picker.Item label = "Elden Ring 2" value="eldenRing2" />
                <Picker.Item label = "Blue Prince 1" value="bluePrince" />
                <Picker.Item label = "Blue Prince 2" value="bluePrince2" />
            </Picker>

            <Button title="Update" onPress={updateGameData} />

        </>

    )

}