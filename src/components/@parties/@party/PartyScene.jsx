/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/interactive-supports-focus,no-shadow */
import React from 'react'
import { bool, object } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { CSSTransition } from 'react-transition-group'
import { Button } from '@material-ui/core'
import isEmpty from 'lodash/isEmpty'
import Loading from 'components/Loading'
import NotFound from 'components/NotFound'
import Carousel from 'components/Carousel'
import PartyCard from './PartyCard'
import connector from './connector'

import './style.css'
import Typography from '@material-ui/core/Typography/Typography'
import { Link } from 'react-router-dom'

const styles = (theme) => ({
  root: {
    overflowX: 'hidden',
    position: 'relative',
    height: '100%',
    background: theme.palette.common.white,
  },
  loading: {
    marginTop: 20,
    textAlign: 'center',
  },
  papers: {
    position: 'absolute',
    top: 200,
    left: 0,
    right: 0,
    margin: 9,
  },
  paperse: {
    marginTop: 20,
    marginLeft: 9,
    marginRight: 9,
  },

  loginLink: {
    color: theme.palette.primary.main,
  },
  container: {
    display: 'flex',
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
})

class PartyScene extends React.Component {
  state = {
    checked: false,
  }

  componentDidMount() {
    const { actions } = this.props
    actions.header.back()
    this.loadParty()
    this.checkIsPartyMember()
  }

  componentWillUnmount() {
    const { actions } = this.props
    actions.header.menu()
  }

  loadParty = () => {
    const { actions, match, party } = this.props
    if (isEmpty(party) || party.id !== match.params.id) {
      actions.parties.show(match.params.id)
    }
  }

  checkIsPartyMember = () => {
    const { actions, match, party, isMember, auth } = this.props
    if (!auth.user) return false
    if (isMember === null && party.id !== match.params.id) {
      actions.members.isMember(match.params.id)
    }
    return true
  }

  handleClick = (check) => {
    this.setState({
      checked: check === this.state.checked && !check,
    })
  }

  toggleJoinParty = () => {
    const { actions, match, isMember } = this.props

    if (!isMember) {
      actions.members.join(match.params.id)
    } else {
      actions.members.leave(match.params.id)
    }
  }

  render() {
    const { classes, loading, memberLoading, party, isMember, auth } = this.props
    if (loading) return <Loading />
    if (isEmpty(party)) return <NotFound />
    const { checked } = this.state

    return (
      <div className={classes.root}>
        <div role="link" onClick={() => this.handleClick(checked)}>
          <Carousel pictures={party.pictures} />
        </div>
        <CSSTransition in={checked} timeout={500} classNames="star">
          <div className={!checked ? classes.papers : classes.paperse}>
            <PartyCard party={party} />
            {auth.user ?
              auth.user.id !== party.admin_id &&
              <Button
                variant="raised"
                size="large"
                fullWidth
                color="primary"
                disabled={memberLoading}
                onClick={this.toggleJoinParty}
              >{isMember ? 'ПОКИНУТЬ' : 'Я ПОЙДУ'}
              </Button>
              :
              <Typography align="center" gutterBottom>
                <Link to="/auth/login" className={classes.loginLink}>Войдите </Link>
                что бы принять участие в вечеринке
              </Typography>
            }
          </div>
        </CSSTransition>
      </div>
    )
  }
}

PartyScene.propTypes = {
  classes: object.isRequired,
  party: object,
  loading: bool.isRequired,
  memberLoading: bool.isRequired,
  actions: object.isRequired,
  isMember: bool,
  match: object.isRequired,
  auth: object.isRequired,
}

PartyScene.defaultProps = {
  party: {},
  isMember: null,
}

export default withStyles(styles)(connector(PartyScene))
