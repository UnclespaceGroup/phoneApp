import React from 'react'
import { ScrollView, Text } from 'react-native'
import ForumCard from '../../components/ForumCard/ForumCard'
import _ from 'lodash'
import Spinner from 'react-native-loading-spinner-overlay'

class FilteredByTagsForumScreen extends React.Component {
  state = {
    current: [],
    preloader: false
  }

  componentDidMount () {
    this.setState({current: this.filterArray()})
  }

  render () {
    const {
      props: {
        tags,
        reviews,
        ...props
      },
      state: {
        current,
        preloader
      }
    } = this
    return (
      preloader ? <Spinner />
        : <ScrollView>
          <Text style={{padding: 10, fontSize: 15}}>Всего найдено {current.length}</Text>
          {
            _.map(current, (item, key) =>
              <ForumCard key={key} {...{...item, ...props}} />
            )
          }
        </ScrollView>
    )
  }

  filterArray = () => {
    const {tags, reviews} = this.props
    return _.filter(reviews, item => {
        let activeTags = _.filter(tags, tag => item.Tags && item.Tags.indexOf(tag) !== -1)
      return activeTags.length
      }
    )
  }
  static defaultProps = {
    filter: []
  }
}

export default FilteredByTagsForumScreen
