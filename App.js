import React from 'react'
import Authorization from './src/containers/Authorization'
import Post from './src/containers/Post'
import { Router, Scene } from 'react-native-router-flux'
import store from './src/store/store'
import { Provider } from 'react-redux'
import Forum from './src/containers/Forum'
import Country from './src/containers/Country'

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <Scene key={'root'}>
            <Scene
              hideNavBar tabs={true} key={'tabs'}>
              <Scene key="authorization" component={Authorization} title="Вход" />
              <Scene key="forum" component={Forum} title="Главная" />
              <Scene key="country" component={Country} title="Категории" />
            </Scene>
            <Scene>
              <Scene key="post" component={Post} title={'post'} hideTabBar />
            </Scene>
          </Scene>
        </Router>
      </Provider>
    )
  }
}

export default App