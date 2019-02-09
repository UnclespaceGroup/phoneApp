import { StyleSheet } from 'react-native'
import { custom } from '../../global'

export const tag = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'space-between'
  },
  search: {
    marginTop: 10,
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10
  },
  input: {
    height: '100%',
    width: '80%',
    paddingLeft: 10
  },
  input_red: {
    height: '100%',
    width: '80%',
    paddingLeft: 10,
    borderColor: 'red'
  },
  buttonAdd: {
    backgroundColor: custom.green,
    height: 40,
    width: 40,
    marginTop: 7,
    borderRadius: 20
  },
  buttonAdd_danger: {
    height: 40,
    width: 40,
    marginTop: 7,
    borderRadius: 20,
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
    height: 60,
    width: 180,
    marginRight: '10%',
    marginBottom: 20,
    backgroundColor: custom.red,
    borderRadius: 30,
    paddingHorizontal: 15,
    marginLeft: '10%'
  },
  button_text: {
    color: 'white',
    marginRight: 20,
    fontSize: 16
  },
  text: {
    paddingHorizontal: '5%',
    marginHorizontal: '5%',
    marginBottom: 10,
    paddingVertical: 40,
    backgroundColor: 'white',
    borderRadius: 20
  }
})