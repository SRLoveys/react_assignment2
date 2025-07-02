import { Tabs } from "expo-router";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { GamesContext } from '../components/GamesContext';
import { useState } from 'react';
import gameObject from "../assets/games.json"

export default function RootLayout() {

  const [gameData, setGameData] = useState(gameObject);

  return (
      <GamesContext.Provider value={{gameData, setGameData}}>
      <Tabs>
      <Tabs.Screen name="index"
          options={{
              title:"Game Home",
              tabBarIcon: ({color}) => <MaterialIcons size={28} name="home" color={color} />,
              }}
      />
      <Tabs.Screen name="updateGames"
                  options={{
                      title:"Game Info",
                      tabBarIcon: ({color}) => <MaterialIcons size={28} name="360" color={color} />,
                      }}
                  />
      <Tabs.Screen name="games"
            options={{
                title:"Game Info",
                tabBarIcon: ({color}) => <MaterialIcons size={28} name="games" color={color} />,
                }}
            />
      </Tabs>
      </GamesContext.Provider>
      )
}
