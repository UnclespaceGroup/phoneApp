import React from 'react'
import { ScrollView } from 'react-native'
import _ from 'lodash'
import ForumCard from '../../components/ForumCard'
import { TextInput } from 'react-native';
import { RkButton } from 'react-native-ui-kitten'

class PostScreen extends React.Component {
  state = {
    country: ''
  }
  render () {
    const {
      props: {
        products,
        filter
      },
      state: {
        country
      },
      change,
      click
    } = this
    const current = products.filter(x =>
    {
      return filter.country === true || ( x.country === filter.country)
    }
    )
    return (
      <ScrollView>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={change}
          value={country}
        />
        <RkButton rkType='small' onPress={click}>Button</RkButton>
        {
          _.map(current, (item, key) =>
            <ForumCard key={key} {...item} />
          )
        }
      </ScrollView>
    )
  }
  change = (text) => {
    this.setState({
      country: text
    })
  }
  click = () => {
    const { setFilter } = this.props
    const { country } = this.state
    setFilter({
      country: country
    })
  }
}

export default PostScreen
