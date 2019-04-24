import React, { Component } from 'react'
import { object, arrayOf, func } from 'prop-types'
import userShape from 'shapes/user'
import { withStyles, List } from '@material-ui/core'
import SearchField from 'components/elements/SearchField'
import isEmpty from 'lodash/isEmpty'
import Guest from './Guest'
import arrayToObject from 'utils/arrayToObject'
import Loading from 'components/elements/Loading'

const styles = {
  root: {
    overflow: 'auto',
    flexGrow: 1,
  },
  search: {
    padding: '0px 20px 30px 20px',
  },
  loading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  }
}

class Guests extends Component {

  state = {
    searchString: '',
    filtered_ids: [],
    isLoading: false,
  }

  componentDidMount() {
    this.load().catch(console.error)
  }

  load = async () => {
    const { onLoad } = this.props
    this.setState({ isLoading: true })
    const result = await onLoad()
    this.setState({ isLoading: false })

    return result
  }

  userSearchString = searchString => guest => {
    return `${guest.name} ${guest.email}`.toLowerCase().includes(searchString.toLowerCase())
  }

  searchGuests = e => {
    const searchString = e.target.value
    const { guests } = this.props

    const filtered_ids = guests
      .filter(this.userSearchString(searchString))
      .map(user => user.id)

    this.setState({ searchString, filtered_ids })
  }

  filterGuests = (guests) => {
    const { filtered_ids, searchString } = this.state
    if (isEmpty(filtered_ids) && isEmpty(searchString)) return guests
    if (isEmpty(filtered_ids) && !isEmpty(searchString)) return []

    return filtered_ids.map(id => arrayToObject(guests)[id])

  }

  render() {
    const { classes, guests } = this.props
    const { isLoading } = this.state
    const filtered = this.filterGuests(guests)

    if (isLoading) return <Loading className={classes.loading} />

    return (
      <>
        <SearchField className={classes.search} onChange={this.searchGuests} />
        <List className={classes.root}>
          {filtered.map(guest => (
            <Guest key={guest.id} guest={guest} />
          ))}
        </List>
      </>
    )
  }
}

Guests.propTypes = {
  classes: object.isRequired,
  guests: arrayOf(userShape).isRequired,
  onLoad: func.isRequired,
}

export default withStyles(styles)(Guests)
