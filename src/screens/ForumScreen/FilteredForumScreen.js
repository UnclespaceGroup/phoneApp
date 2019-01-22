import React from 'react'
import { ScrollView, Text } from 'react-native'
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
          <Text style={{padding: 10, fontSize: 15}}>Всего найдено {current.length}</Text>
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
    let current = reviews.slice()
    current = _.find(filter.country, f => f.active) ? current
      : _.filter(current, item => {
          const {
            CountryId
          } = item
          const countryEnable = _.find(filter.country, c => c.Id === CountryId)
          return countryEnable && countryEnable.active
        }
      )
    current = _.find(filter.brand, f => f.active) ? current
      : _.filter(current, item => {
          const {
            BrandId
          } = item
          const brandEnable = _.find(filter.brands, b => b.Id === BrandId)
          return brandEnable && brandEnable.active
        }
      )
    current = _.filter(current, item => {
        const {Title} = item
        return filter.search ? Title && (Title.toLowerCase().indexOf(filter.search.toLowerCase()) !== -1) : current
      }
    )
    this.setState({
      preloader: false
    })
    return current
  }
  static defaultProps = {
    filter: []
  }
}

export default FilteredForumScreen
