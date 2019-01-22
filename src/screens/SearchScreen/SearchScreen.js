import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CheckBoxBlock from '../../components/CheckBoxBlock/CheckBoxBlock'
import _ from 'lodash'
import Icon from 'react-native-vector-icons/Ionicons'
import { RkButton, RkText, RkTextInput } from 'react-native-ui-kitten'
import { Actions } from 'react-native-router-flux'

const s = StyleSheet.create({
  container: {},
  input: {
    paddingLeft: 5,
    margin: 10
  },
  block: {
    marginBottom: 10
  }
})

class SearchScreen extends React.PureComponent {
  state = {
    brands: [],
    country: []
  }
  componentWillReceiveProps(props){
    const {
      filter
    } = props
    this.setState({
      brands: filter.brands,
      country: filter.country
    })
  }
  render () {
    const {
      props: {
        filter,
      },
      state: {
        brands,
        country
      },
      brandFilterClick
    } = this
    return (
      <View style={s.container}>
        <Text>Поиск</Text>
        <RkTextInput style={s.input} label={<Icon name={'ios-search'} />} rkType='rounded' placeholder={'Поиск...'} />

        <View>
          <RkText>Выберете бренд</RkText>
          <CheckBoxBlock
            style={s.block}
            name={'brands'}
            click={brandFilterClick}
            items={brands}
          />
        </View>
        <View>
          <RkText>Выберете страну</RkText>
          <CheckBoxBlock
            style={s.block}
            name={'country'}
            click={brandFilterClick}
            items={country}
          />
        </View>
        <RkButton
          onPress={() => Actions.push('catalog', {filtered: true})}
        >Применить фильтры</RkButton>
      </View>
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
        country
      },
      props: {
        setFilter
      }
    } = this
    setFilter({
      brands,
      country
    })
  }
  static defaultProps = {
    filter: {
      brands: {},
      country: {}
    }
  }
}

export default SearchScreen