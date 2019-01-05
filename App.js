import React from 'react'
import Authorization from './src/containers/Authorization'
import Post from './src/containers/Post'
import { Router, Scene } from 'react-native-router-flux'
import store from './src/store/store'
import { Provider } from 'react-redux'
import Country from './src/containers/Country'
import Forum from './src/containers/Forum'
import AddReview from './src/containers/AddReview/AddReview'
import { StyleSheet } from 'react-native'
import TabIcon from './src/components/TabIcons/TabIcon'
import Entry from './src/containers/Entry/Entry'
import Brand from './src/containers/Brand'
import TopLoginButton from './src/components/TabIcons/TopLoginButton'
import Search from './src/containers/Search'

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <Scene key="root">
            <Scene key="entry" component={Entry}
            hideNavBar/>
            <Scene
              hideNavBar
              tabs={true}
              key="tabs"
              tabBarStyle={styles.tabs}
              activeBackgroundColor={'rgba(0,0,0,0.1)'}
              activeTintColor={'black'}
            >
              <Scene key="forum"
                     component={Forum}
                     title="Главная"
                     iconName={'list-alt'}
                     renderRightButton={<TopLoginButton/>}
                     icon={TabIcon}
              />
              <Scene key="search"
                     component={Search}
                     title="Поиск"
                     iconName={'search'}
                     icon={TabIcon}
                     renderRightButton={<TopLoginButton/>}
              />
              <Scene key="addReview"
                     component={AddReview}
                     iconName={'plus-square'}
                     title="Добавить"
                     icon={TabIcon}
                     renderRightButton={<TopLoginButton/>}
              />
              <Scene key="country"
                     component={Country}
                     title="Страны"
                     iconName={'globe'}
                     icon={TabIcon}
                     renderRightButton={<TopLoginButton/>}
              />
              <Scene key="brand"
                     component={Brand}
                     title="Бренды"
                     iconName={'ticket'}
                     icon={TabIcon}
                     renderRightButton={<TopLoginButton/>}
              />
            </Scene>

            <Scene key="post"
                   component={Post}
                   title={'Постик'}
                   hideTabBar
            />
            <Scene key="catalog"
                   component={Forum}
                   title="Каталог"
            />
            <Scene key="authorization"
                   component={Authorization}
                   title="Поиск"
                   iconName={'search'}

                   icon={TabIcon}
            />
          </Scene>
        </Router>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  tabs: {
    fontSize: 5
  }
})

export default App