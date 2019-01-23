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
    justifyContent: 'space-between',
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
  tags: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
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
      addTag,
      deleteTag
    } = this
    return (
      <View style={s.container}>
        <View>
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
          <View style={s.tags}>
            {
              _.map(tags, (item, key) => <RkButton key={key} onPress={() => {deleteTag(item)}} rkType={'small'}>{item}</RkButton>)
            }
          </View>
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
  deleteTag = (item) => {
    const {tags} = this.state
    let current = tags.slice()
    let a = current.indexOf(item)
    delete current[a]
    this.setState({
      tags: current
    })
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