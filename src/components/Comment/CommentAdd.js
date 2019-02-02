import React from 'react'
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native'
import { RkButton } from 'react-native-ui-kitten'
import _ from 'lodash'
import { correctDate } from '../../utils'
import _Date from '../Date/Date'
import {custom} from '../../global'
import Icon from 'react-native-vector-icons/Ionicons'

class CommentAdd extends React.Component {
  state = {
    value: ''
  }
  render () {
    const {
      props: {
        move,
        comments,
        id,
        profile
      },
      state: {
        value
      },
      send
    } = this
    return (
      <ScrollView style={s.container}>
        {
          _.map(comments, (item, key) =>
            <View key={key} style={s.comment}>
              <_Date>{item.Date}</_Date>
              <Text>{item.Text}</Text>
            </View>
          )
        }
        {
          profile ?
            <View style={s.form}>
              <TextInput
                onFocus={() => {
                  move(20000)
                }}
                multiline={true}
                numberOfLines={3}
                style={s.input}
                value={value}
                onChangeText={(value) => { this.setState({value})}}
                placeholder={'Оставьте свой комментарий'}
              />
              <RkButton
                onPress={send}
                style={s.button}
              >
                <Text style={s.buttonText}>Отправить</Text><Icon name={'ios-send'} color={custom.white} size={30} /></RkButton>
            </View>
            : <Text>Авторизуйтесь, чтобы оставить комментарий</Text>
        }

      </ScrollView>
    )
  }
  send = () => {
    const {
      props: {
        addComment,
        id,
        profile
      },
      state: {
        value
      }
    } = this

    const date = new Date().toString()
    console.log(date)
    const data = {
      ReviewId: id,
      Text: value,
      AuthorId: profile.Id,
      Date: date
    }
    this.setState({value: ''})
    addComment(
      data
    )
  }

  static defaultProps = {
    move: () => {
      console.log('Не пришло move')
    }
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  comment: {
    marginVertical: 10
  },
  form : {
    flex: 1,
    alignItems: 'center'
  },
  input: {
    textAlignVertical: 'top',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: 10,
    marginBottom: 10,
    width: '80%',
    paddingHorizontal: '5%',
    paddingVertical: 10
  },
  button: {
    height: 60,
    backgroundColor: 'red',
    borderRadius: 30,
    marginTop: 10,
    width: '60%',
    marginHorizontal: '20%'
  },
  buttonText: {
    color: custom.white,
    marginRight: 20
  }
})

export default CommentAdd