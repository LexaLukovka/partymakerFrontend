import React, { Component } from 'react'
import { object, arrayOf, func, bool } from 'prop-types'
import userShape from 'shapes/user'
import matchShape from 'shapes/match'
import { withStyles, List } from '@material-ui/core'
import SearchField from 'components/elements/SearchField'
import { withRouter } from 'react-router-dom'
import isEmpty from 'lodash/isEmpty'
import arrayToObject from 'utils/arrayToObject'
import Loading from 'components/elements/Loading'
import Guest from './Guest'

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
    const { match, onLoad } = this.props
    this.setState({ isLoading: true })
    const result = await onLoad(match.params.id)
    this.setState({ isLoading: false })

    return result
  }

  kick = (guest) => {
    const { match, onKick } = this.props
    onKick(match.params.id, guest.id)
  }

  look = searchString => guest => {
    return `${guest.name} ${guest.email}`.toLowerCase().includes(searchString.toLowerCase())
  }

  search = e => {
    const searchString = e.target.value
    const { guests } = this.props

    const filtered_ids = guests
      .filter(this.look(searchString))
      .map(user => user.id)

    this.setState({ searchString, filtered_ids })
  }

  filter = (guests) => {
    const { filtered_ids, searchString } = this.state
    if (isEmpty(filtered_ids) && isEmpty(searchString)) return guests
    if (isEmpty(filtered_ids) && !isEmpty(searchString)) return []

    return filtered_ids.map(id => arrayToObject(guests)[id])
  }

  render() {
    const { classes, isAdmin, guests } = this.props
    const { isLoading } = this.state
    const filtered = this.filter(guests)

    if (isLoading) return <Loading className={classes.loading} />

    return (
      <>
        <SearchField className={classes.search} onChange={this.search} />
        <List className={classes.root}>
          {filtered.map(guest => (
            <Guest
              key={guest.id}
              isAdmin={isAdmin}
              guest={guest}
              onKick={this.kick}
            />
          ))}
        </List>
      </>
    )
  }
}

Guests.propTypes = {
  classes: object.isRequired,
  match: matchShape.isRequired,
  isAdmin: bool.isRequired,
  guests: arrayOf(userShape).isRequired,
  onLoad: func.isRequired,
  onKick: func.isRequired,
}

export default withStyles(styles)(withRouter(Guests))
