import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CheckBoxBlock from '../../components/CheckBoxBlock/CheckBoxBlock'
import _ from 'lodash'
import Icon from 'react-native-vector-icons/Ionicons'
import { RkButton, RkText, RkTextInput } from 'react-native-ui-kitten'
import { Actions } from 'react-native-router-flux'

const s = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%'
  },
  search: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  input: {
    paddingLeft: 5,
    margin: 10,
    width: '60%'
  },
  button: {
    bottom: 10,
    width: '80%',
    marginLeft: '10%',
    marginRight: '10%'
  }
})

class TagSearchScreen extends React.PureComponent {
  state = {
    tags: [],
    currentTag: ''
  }

  componentWillReceiveProps (props) {
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
      props: {},
      state: {
        tags,
        currentTag
      },
      click,
      addTag
    } = this
    return (
      <View style={s.container}>
        <View>
          {
            _.map(tags, (item, key) => <RkButton key={key} rkType={'small'}>{item}</RkButton>)
          }
        </View>
        <View style={s.search}>
          <RkTextInput
            style={s.input}
            label={<Icon name={'ios-search'} />}
            rkType='rounded' placeholder={'#tag...'}
            value={currentTag}
            onChangeText={(currentTag) => this.setState({currentTag})}
          />
          <RkButton onPress={addTag}>Добавить</RkButton>
        </View>

        <View>
          <RkButton
            onPress={click}
            style={s.button}
          >Применить фильтры</RkButton>
        </View>
      </View>
    )
  }

  addTag = () => {
    const {tags, currentTag} = this.state
    let currentTags = tags.slice()
    currentTags.push(currentTag)
    this.setState({
      tags: currentTags,
      currentTag: ''
    })
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
    console.log('searchScreen')
    Actions.push('catalog', {filtered: true})
  }
  static defaultProps = {
    filter: {
      brands: {},
      country: {}
    }
  }
}

export default TagSearchScreen