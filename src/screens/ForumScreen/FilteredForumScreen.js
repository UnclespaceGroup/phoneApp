import React from 'react'
import { ScrollView, Text } from 'react-native'
import ForumCard from '../../components/ForumCard/ForumCard'
import { filterReviews, filterByName } from '../../utils'
import _ from 'lodash'

class FilteredForumScreen extends React.Component {
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
        ...props
      },
      state: {
        current
      }
    } = this
    return (
        <ScrollView>
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
    const {
      filterBrands,
      filterCountry,
      filterSearch,
      reviews
    } = this.props

    let current = reviews.slice()

    current = filterBrands.length ? filterReviews(current, filterBrands, 'BrandId') : current



    current = filterCountry.length ? filterReviews(current, filterCountry, 'CountryId') : current

    current = filterSearch ? filterByName(current, filterSearch) : current

    return current
  }
  static defaultProps = {
    filter: []
  }
}

export default FilteredForumScreen
