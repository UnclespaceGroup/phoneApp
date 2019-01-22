import React from 'react'
import { ScrollView } from 'react-native'
import ForumCard from '../../components/ForumCard/ForumCard'
import _ from 'lodash'
import Spinner from 'react-native-loading-spinner-overlay'

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
        filter,
        reviews
      },
      state: {
        current,
        preloader
      }
    } = this
    return (
      preloader ? <Spinner />
        : <ScrollView>
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
    this.setState({
      preloader: true
    })

    const countryActive = _.find(filter.country, f => f.active) ? true
      : _.filter(reviews, item => {
          const {
            CountryId
          } = item
          const countryEnable = _.find(filter.country, c => c.Id === CountryId)
          return countryEnable && countryEnable.active
        }
      )
    const brandActive = _.find(filter.brand, f => f.active) ? true
      : _.filter(reviews, item => {
          const {
            BrandId
          } = item
          const brandEnable = _.find(filter.brands, b => b.Id === BrandId)
          return brandEnable && brandEnable.active
        }
      )
    const nameActive = _.filter(reviews, item => {
        const {Title} = item
        return filter.search ? Title && (Title.toLowerCase().indexOf(filter.search.toLowerCase()) !== -1) : true
      }
    )
    this.setState({
      preloader: false
    })
    return brandActive && countryActive && nameActive
  }
  static defaultProps = {
    filter: []
  }
}

export default FilteredForumScreen
