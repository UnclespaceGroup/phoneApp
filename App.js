import React from 'react'
import Post from './src/containers/Post'
import { Router, Scene } from 'react-native-router-flux'
import store from './src/store/store'
import { Provider } from 'react-redux'
import Country from './src/containers/Country'
import Forum from './src/containers/Forum'
import AddReview from './src/containers/AddReview/AddReview'
import { StyleSheet, StatusBar } from 'react-native'
import TabIcon from './src/components/TabIcons/TabIcon'
import Entry from './src/containers/Entry/Entry'
import Brand from './src/containers/Brand'
import Search from './src/containers/Search'
import LoginButton from './src/containers/SmartComponents/LoginButton'
import Profile from './src/containers/Profile'
import SearchScreenSwitcher from './src/containers/SmartComponents/SearchScreenSwitcher'
import { colors as c, custom as a } from './src/global'
import TabIconPlus from './src/components/TabIcons/TabIconPlus'

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#00BCD4" translucent={true} />
        <Router>
          <Scene key="root"
                 navigationBarStyle={styles.nav}
                 navBarButtonColor={c.bezh}
                 activeTintColor={'black'}
          >
            <Scene key="entry" component={Entry}
                   hideNavBar />
            <Scene
              hideNavBar
              tabs={true}
              key="tabs"
              showLabel={false}
              tabBarStyle={styles.tabs}
            >
              <Scene key="forum"
                     component={Forum}
                     title="Главная"
                     iconName={'list-ul'}
                     renderRightButton={<LoginButton />}
                     icon={TabIcon}
              />
              <Scene key="search"
                     component={Search}
                     title="Поиск"
                     headerMode={'none'}
                     renderTitle={''}
                     iconName={'search'}
                     icon={TabIcon}
                     renderLeftButton={<SearchScreenSwitcher />}
                     renderRightButton={<LoginButton />}
              />
              <Scene key="addReview"
                     component={AddReview}
                     iconName={'pluscircle'}
                     title="Добавить"
                     showLabel={false}
                     icon={TabIconPlus}
                     renderRightButton={<LoginButton />}
              />
              <Scene key="country"
                     component={Country}
                     title="Страны"
                     iconName={'globe'}
                     icon={TabIcon}
                     renderRightButton={<LoginButton />}
              />
              <Scene key="brand"
                     component={Brand}
                     title="Бренды"
                     iconName={'ticket'}
                     icon={TabIcon}
                     renderRightButton={<LoginButton />}
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
                   tabs={true}
            />
            <Scene key="profile"
                   component={Profile}
                   title="Личный профиль"
                   iconName={'search'}
                   tabs={true}
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
  },
  nav: {
    backgroundColor: c.red,
    color: c.bezh
  }
})

export default App