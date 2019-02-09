import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import CheckBoxBlock from '../../components/CheckBoxBlock/CheckBoxBlock'
import _ from 'lodash'
import Icon from 'react-native-vector-icons/Ionicons'
import { RkButton, RkText, RkTextInput } from 'react-native-ui-kitten'
import { Actions } from 'react-native-router-flux'
import { custom } from '../../global'

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
    width: 80,
    height: 80,
    marginLeft: '10%',
    borderRadius: 40,
    backgroundColor: 'red'
  }
})

class SimpleSearchScreen extends React.PureComponent {
  state = {
    filterBrands: [],
    filterCountry: [],
    filterSearch: ''
  }

  componentDidMount () {
    const {
      filter
    } = this.props
    this.setState({
      filterBrands: filter.brands,
      filterCountry: filter.country
    })
  }

  render () {
    const {
      props: {

      },
      state: {
        filterBrands,
        filterCountry,
        filterSearch
      },
      click,
      filterItemClick
    } = this
    return (
      <ScrollView style={s.container}>
        <RkTextInput
          style={s.input}
          label={<Icon name={'ios-search'} />}
          rkType='rounded' placeholder={'Поиск...'}
          value={filterSearch}
          onChangeText={(filterSearch) => this.setState({filterSearch})}
        />

        <View style={s.block}>
          <CheckBoxBlock
            title={'Выбирете бренды'}
            name={'filterBrands'}
            click={filterItemClick}
            items={filterBrands}
          />
        </View>
        <View style={s.block}>
          <CheckBoxBlock
            title={'Выберете страны'}
            name={'filterCountry'}
            click={filterItemClick}
            items={filterCountry}
          />
        </View>
        <View>
          <RkButton
            onPress={click}
            style={s.button}
          ><Icon name={'ios-arrow-forward'} color={custom.white} size={60} /></RkButton>
        </View>
      </ScrollView>
    )
  }

  filterItemClick = (name, Id) => {
    let something = this.state[name].find(item => item.Id === Id)
    if (something) {
      let cur = this.state[name].slice()
      cur.find(item => item.Id === Id).active = !cur.find(item => item.Id === Id).active
      this.setState({
        [name]: cur
      })
    }
  }
  click = () => {
    const {
      state: {
        filterBrands,
        filterCountry,
        filterSearch
      }
    } = this

    const filterListBrands = _.filter(filterBrands, item => item.active === true)
    const filterListCountries = _.filter(filterCountry, item => item.active === true)

    const simpleFilter = {
      filterBrands: _.map(filterListBrands, ({Id}) => Id),
      filterCountry: _.map(filterListCountries, ({ Id }) => Id),
      filterSearch
    }

    Actions.push('catalog', {...simpleFilter, filtered: true})
  }
  static defaultProps = {
    filter: {
      brands: {},
      country: {}
    }
  }
}

export default SimpleSearchScreen