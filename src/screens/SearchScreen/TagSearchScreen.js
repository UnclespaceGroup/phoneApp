import React from 'react'
import { View, Text, StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native'
import _ from 'lodash'
import Icon from 'react-native-vector-icons/Ionicons'
import { RkButton, RkText, RkTextInput } from 'react-native-ui-kitten'
import { Actions } from 'react-native-router-flux'
import { tag as s } from './style'
import { custom, colors } from '../../global'

// const colors = [
//   'success', 'danger', 'info', 'warning', 'primary'
// ]

const color = [
  colors.reda, colors.redb, colors.reda, colors.redb, colors.reda
]

class TagSearchScreen extends React.PureComponent {
  state = {
    tags: [],
    currentTag: '',
    danger: false
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
        currentTag,
        danger
      },
      click,
      addTag,
      deleteTag,
      change
    } = this
    return (
      <View style={s.wrapper}>
        <View>
          <View style={s.search}>
            <RkTextInput
              style={danger ? s.input_red : s.input}
              label={<Icon name={'ios-search'} />}
              rkType='rounded' placeholder={'#tag...'}
              value={currentTag}
              onChangeText={change}
            />
            <RkButton
              style={danger ? s.buttonAdd_danger : s.buttonAdd}
              onPress={addTag}><Icon name={'md-checkmark'} color={custom.white} size={20} /></RkButton>
          </View>
          <View style={s.tags}>
            {
              _.map(tags, (item, key) =>
                <RkButton style={{
                  backgroundColor: color[key % color.length],
                  margin: 5
                }} key={key} onPress={() => {deleteTag(item.id)}}
                  // rkType={`small ${item.color}`}
                >#{item.name}<Icon name={'md-close'}
                                   style={{marginLeft: 10}}
                                   color={'white'} /></RkButton>)
            }
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <RkButton
            onPress={click}
            style={s.button}
          >
            <Text style={s.button_text}>Показать</Text>
            <Icon name={'ios-arrow-forward'} color={custom.white} size={30} />
          </RkButton>
          <Text style={s.text}>*Поиск по тегам - удобный инструмент в поиске нужных Вам отзывов</Text>
        </View>
      </View>
    )
  }

  change = (currentTag) => {
    if (currentTag.length > 10)
      this.setState({
        danger: true, currentTag
      })
    else
      this.setState({currentTag, danger: false})
  }

  deleteTag = (Id) => {
    const {tags} = this.state
    let current = tags.slice()
    const index = _.find(current, ({id}) => id === Id)
    current.splice(current.indexOf(index), 1)
    this.setState({
      tags: current
    })
  }
  addTag = () => {
    const {tags, currentTag, danger} = this.state
    if (danger) return
    if (!currentTag) return
    let currentTags = tags.slice()
    const length = currentTags.length
    currentTags.push({
      name: currentTag,
      color: colors[length % colors.length],
      id: length
    })
    this.setState({
      tags: currentTags,
      currentTag: ''
    })
  }
  click = () => {
    const {
      state: {
        tags
      },
      props: {}
    } = this
    let tagsArray = _.map(tags, ({name}) => name.toLowerCase())
    Actions.push('catalog', {tags: tagsArray})
  }
  static defaultProps = {
    filter: {
      brands: {},
      country: {}
    }
  }
}

export default TagSearchScreen
