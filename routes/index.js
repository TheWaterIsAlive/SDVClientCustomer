import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Main from '../pages/Main';
import Character from '../pages/Character';
import Gift from '../pages/Gift';
import FinalisedCharacter from '../pages/FinalisedCharacter.js';
import themes from '../styles/theme.style';
const Route = createStackNavigator(
{
    Main: { screen: Main},
    Character: { screen: Character},
    Gift: { screen: Gift},
    FinalisedCharacter: { screen: FinalisedCharacter},
},
{
 navigationOptions: {
    headerStyle: {
        backgroundColor: themes.BACKGROUND_COLOR,
        paddingHorizontal: 10,
    },
    headerTintColor: '#fff'
 }
}
);export default Route;