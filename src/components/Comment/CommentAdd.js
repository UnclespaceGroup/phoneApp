import React from 'react'
import { View, TextInput, StyleSheet, ScrollView } from 'react-native'
import { RkButton } from 'react-native-ui-kitten'

class CommentAdd extends React.Component {
  render () {
    const {
      move
    } = this.props
    return (
      <ScrollView style={s.container}>
        <TextInput
          onFocus={() => {
            console.log('focus')
            move(200)
          }}
          multiline={true}
          numberOfLines={3}
          style={s.input}
          placeholder={'Оставьте свой комментарий'}
        />
        <RkButton
          rkType={'outline'}
          onPress={() => alert('Ваш комментарий добавлен')}
          style={s.button}
        >Отправить</RkButton>
      </ScrollView>
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
    flex: 1
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
  button: {}
})

export default CommentAdd