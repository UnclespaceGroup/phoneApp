import React from 'react';
import AuthorizationScreen from "./src/screens/AuthorizationScreen/AuthorizationScreen";
// import ForumScreen from "./src/screens/ForumScreen/ForumScreen";
import CountryScreen from './src/screens/CountryScreen/CountryScreen'
import PostScreen from './src/screens/PostScreen/PostScreen'
import {Router, Scene } from "react-native-router-flux";
import store from './src/store/store'
import { Provider } from 'react-redux'

class App extends React.Component {
    render() {
        return (
          <Provider store={store}>
            <Router>
                <Scene key={'root'}>
                    <Scene
                        hideNavBar tabs={true} key={'tabs'}>
                        <Scene key="authorization" component={AuthorizationScreen} title="Вход"/>
                        <Scene key="forum" component={PostScreen} title="Главная"/>
                        <Scene key="country" component={CountryScreen} title="Категории"/>
                    </Scene>
                    <Scene>
                      <Scene key="post" component={PostScreen} title={'post'} hideTabBar/>
                    </Scene>
                </Scene>
            </Router>
          </Provider>
        );
    }
}
export default App