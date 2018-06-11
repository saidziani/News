import React from 'react';
import { StatusBar } from 'react-native';
import {ThemeProvider} from 'react-native-material-ui'
import {TabNavigator, StackNavigator} from 'react-navigation'
import style from './assets/style/Style'
import Welcome from './components/Welcome'
import Home from './components/Home'
import Login from './components/Login'
import Main from './components/Main'
import Articles from './components/Articles'
import Sarticles from './components/Sarticles'
import Personalize from './components/Personalize'
import Preferences from './components/Preferences'
import Onearticle from './components/Onearticle'
import Rowstd from './components/Rowstd'
import Categories from "./components/Categories"
import Sources from "./components/Sources"
import Toprow from './components/Toprow'
import Profile from './components/Profile'
import Landing from './components/Landing'
import { Font, AppLoading } from 'expo'


import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillReceiveProps is deprecated',
]);

const RootStack = StackNavigator(
    {
        Welcome: { screen: Welcome,},
        Home: { screen: Home,},
        Login: { screen: Login,},
        Main: { screen: Main,},
        Categories: {screen: Categories,},
        Articles: { screen: Articles,},
        Sarticles: { screen: Sarticles,},
        Personalize: { screen: Personalize,},
        Preferences: { screen: Preferences,},
        Onearticle: { screen: Onearticle,},
        Rowstd: { screen: Rowstd,},
        Sources: { screen: Sources,},
        Profile: { screen: Profile,},
        Landing: { screen: Landing,},
    },
    {
        initialRouteName: 'Landing',
    }
);

export default class App extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            isReady: false
        }
    }

    componentWillMount() {
        (async() => {
            await Font.loadAsync({
            'Publico': require("./assets/fonts/en/Publico/Publico-Medium.otf"),
            'Publico-Black': require("./assets/fonts/en/Publico/Publico-Black.otf"),
            'Raleway': require("./assets/fonts/en/Raleway/Raleway-Regular.ttf"),
            'Raleway-Black': require("./assets/fonts/en/Raleway/Raleway-Black.ttf"),
            'Raleway-Bold': require("./assets/fonts/en/Raleway/Raleway-Bold.ttf"),
            });
            this.setState({ isReady: true});
        })();
    }

    render() {
        if (!this.state.isReady) {
            return <AppLoading />;
        }

        return (
            <ThemeProvider uiTheme={uiTheme}>
                <RootStack />
            </ThemeProvider>
        )
    }
}


/*Material-UI style customization*/
const uiTheme = {
    palette: {
        primaryColor: style.black,
    },
    toolbar: {
        container: {
            paddingTop: StatusBar.currentHeight,
            height: StatusBar.currentHeight + 50,
        },
    }
};