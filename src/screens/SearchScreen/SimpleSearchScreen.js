import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import CheckBoxBlock from '../../components/CheckBoxBlock/CheckBoxBlock'
import _ from 'lodash'
import Icon from 'react-native-vector-icons/Ionicons'
import { RkButton, RkText, RkTextInput } from 'react-native-ui-kitten'
import { Actions } from 'react-native-router-flux'

const s = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  input: {
    paddingLeft: 5,
    margin: 10
  },
  block: {
    marginBottom: 30,
  },
  button: {
    bottom: 10,
    width: '80%',
    marginLeft: '10%',
    marginRight: '10%'
  }
})

class SimpleSearchScreen extends React.PureComponent {
  state = {
    brands: [],
    country: [],
    search: ''
  }

  componentDidMount () {
    const {
      filter
    } = this.props
    this.setState({
      brands: filter.brands,
      country: filter.country
    })
  }

  render () {
    const {
      props: {

      },
      state: {
        brands,
        country,
        search
      },
      click,
      brandFilterClick
    } = this
    return (
      <ScrollView style={s.container}>
        <RkTextInput
          style={s.input}
          label={<Icon name={'ios-search'} />}
          rkType='rounded' placeholder={'Поиск...'}
          value={search}
          onChangeText={(search) => this.setState({search})}
        />

        <View style={s.block}>
          <CheckBoxBlock
            title={'Выбирете бренды'}
            name={'brands'}
            click={brandFilterClick}
            items={brands}
          />
        </View>
        <View style={s.block}>
          <CheckBoxBlock
            title={'Выберете страны'}
            name={'country'}
            click={brandFilterClick}
            items={country}
          />
        </View>
        <View>
          <RkButton
            onPress={click}
            style={s.button}
          >Применить фильтры</RkButton>
        </View>
      </ScrollView>
    )
  }

  brandFilterClick = (name, Id) => {
    const {filter} = this.props
    let something = filter[name].find(item => item.Id === Id)
    if (something) {
      let cur = filter[name].slice()
      cur.find(item => item.Id === Id).active = !cur.find(item => item.Id === Id).active
      this.setState({
        [name]: cur
      })
    }
  }
  click = () => {
    const {
      state: {
        brands,
        country,
        search
      },
      props: {
        setFilter
      }
    } = this

    setFilter({
      brands,
      country,
      search
    })
    Actions.push('catalog', {filtered: true})
  }
  static defaultProps = {
    filter: {
      brands: {},
      country: {}
    }
  }
}

export default SimpleSearchScreen