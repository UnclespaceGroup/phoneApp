import React from 'react';
import AuthorizationScreen from "./src/screens/AuthorizationScreen/AuthorizationScreen";
import ForumScreen from "./src/screens/ForumScreen/ForumScreen";
import CountryScreen from './src/screens/CountryScreen/CountryScreen'
import PostScreen from './src/screens/PostScreen/PostScreen'
import {Router, Scene, Tabs} from "react-native-router-flux";

class App extends React.Component {
    render() {
        console.log('console')
        return (
            <Router>
                <Scene key={'root'}>
                    <Scene
                        hideNavBar tabs={true} key={'tabs'}>
                        <Scene key="authorization" component={AuthorizationScreen} title="1"/>
                        <Scene key="forum" component={ForumScreen} title="2"/>
                        <Scene key="country" component={CountryScreen} title="3"/>
                        <Scene key="post" component={PostScreen} title={'post'} hideTabBar/>
                    </Scene>
                </Scene>
            </Router>
        );
    }
}

export default App