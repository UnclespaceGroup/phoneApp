import React from 'react'
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native'
import CheckBoxBlock from '../../components/CheckBoxBlock/CheckBoxBlock'
import _ from 'lodash'
import Icon from 'react-native-vector-icons/Ionicons'
import { RkButton, RkText, RkTextInput } from 'react-native-ui-kitten'
import { Actions } from 'react-native-router-flux'

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  search: {
    marginTop: 10,
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  input: {
    height: '100%',
    width: '60%',
    paddingLeft: 10
  },
  input_red: {
    height: '100%',
    width: '60%',
    paddingLeft: 10,
    borderColor: 'red'
  },
  buttonAdd: {
    marginTop: 7,
    height: '100%',
    borderRadius: 10
  },
  buttonAdd_danger: {
    marginTop: 7,
    height: '100%',
    borderRadius: 10,
    backgroundColor: 'red'
  },
  tags: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  tag: {
    margin: 5
  },
  button: {
    width: '80%',
    marginLeft: '10%',
    marginRight: '10%'
  }
})
const colors = [
  'success', 'danger', 'info', 'warning', 'primary'
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
      <KeyboardAvoidingView style={s.container} behavior="padding" enabled>
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
              onPress={addTag}>Добавить</RkButton>
          </View>
          <View style={s.tags}>
            {
              _.map(tags, (item, key) => <RkButton style={s.tag} key={key} onPress={() => {deleteTag(item.id)}}
                                                   rkType={`small ${item.color}`}>#{item.name}<Icon name={'md-close'}
                                                                                                    style={{marginLeft: 10}}
                                                                                                    color={'white'} /></RkButton>)
            }
          </View>
        </View>
        <View>
          <RkButton
            onPress={click}
            style={s.button}
          >Применить фильтры</RkButton>
        </View>
      </KeyboardAvoidingView>
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
    console.log(tagsArray)
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