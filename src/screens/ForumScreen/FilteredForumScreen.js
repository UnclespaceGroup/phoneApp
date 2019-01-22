import React from 'react'
import { ScrollView, Text } from 'react-native'
import PropTypes from 'prop-types'
import ForumCard from '../../components/ForumCard/ForumCard'
import _ from 'lodash'

class FilteredForumScreen extends React.Component {
  state = {
    current: []
  }

  componentDidMount () {
    this.setState({current: this.filterArray()})
  }

  render () {
    const {
      props: {
        filter,
        reviews
      },
      state: {
        current
      }
    } = this
    return (
      <ScrollView>
        {
          _.map(current, (item, key) =>
            <ForumCard key={key} {...item} />
          )
        }
      </ScrollView>
    )
  }

  filterArray = () => {
    const {filter, reviews} = this.props
    return _.filter(reviews, item => {
        const {
          CountryId,
          BrandId
        } = item
        const countryEnable = _.find(filter.country, c => c.Id === CountryId)
        const brandEnable = _.find(filter.brands, b => b.Id === BrandId)

      return countryEnable && countryEnable.active && brandEnable && brandEnable.active
      }
    )
  }
  static defaultProps = {
    filter: []
  }
}

export default FilteredForumScreen
