/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/interactive-supports-focus,no-shadow */
import React from 'react'
import { bool, object } from 'prop-types'
import { Avatar, Button, Typography, withStyles } from '@material-ui/core'
import isEmpty from 'lodash/isEmpty'
import { Link } from 'react-router-dom'
import Loading from 'components/Loading'
import NotFound from 'components/NotFound'
import GroupCard from './GroupCard'
import connector from './connector'

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
    top: 260,
    left: 0,
    right: 0,
    margin: 9,
  },
  loginLink: {
    color: theme.palette.primary.main,
  },
  amInButton: {
    margin: '0 auto',
    maxWidth: 500,
    display: 'block',
  },
  picture: {
    width: '100%',
    height: 300,
    borderRadius: '3px',
  },
})

class GroupScene extends React.Component {
  componentDidMount() {
    const { actions } = this.props
    actions.header.back()
    this.loadGroup()
    this.checkIsPartyMember()
  }

  componentDidUpdate() {
    const { group } = this.props
    if (!isEmpty(group)) document.title = group.title
  }

  componentWillUnmount() {
    const { actions } = this.props
    actions.header.menu()
  }

  loadGroup = () => {
    const { actions, match, group } = this.props

    if (isEmpty(group) || group.id !== match.params.id) {
      actions.groups.show(match.params.id)
    }

    if (!isEmpty(group) && !isEmpty(group.place)) {
      actions.place.show(group.place.id)
    }
  }
  checkIsPartyMember = () => {
    const { actions, match, group, isMember, auth } = this.props
    if (!auth.user) return false
    if (isMember !== null && group.id !== match.params.id) {
      actions.members.isMember(match.params.id)
    }
    return true
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
    const { classes, auth, loading, memberLoading, group, place, isMember } = this.props
    const url = '/images/parties.jpg'
    if (loading) return <Loading />
    if (isEmpty(group)) return <NotFound />
    return (
      <div className={classes.root}>
        <Avatar className={classes.picture} src={url} />
        <div className={classes.papers}>
          <GroupCard group={group} place={place} />
          {auth.user ?
            auth.user.id !== group.admin_id &&
            <Button
              variant="raised"
              size="large"
              fullWidth
              className={classes.amInButton}
              color="primary"
              disabled={memberLoading}
              onClick={this.toggleJoinParty}
            >{isMember ? 'ПОКИНУТЬ' : 'Я ПОЙДУ'}
            </Button>
            :
            <Typography align="center" gutterBottom>
              <Link to="/auth/login" className={classes.loginLink}>Войдите </Link>
              что бы принять участие в компании
            </Typography>
          }
        </div>
      </div>
    )
  }
}

GroupScene.propTypes = {
  classes: object.isRequired,
  group: object,
  place: object,
  loading: bool.isRequired,
  memberLoading: bool.isRequired,
  actions: object.isRequired,
  isMember: bool,
  match: object.isRequired,
  auth: object.isRequired,
}

GroupScene.defaultProps = {
  group: {},
  place: {},
  isMember: null,
}

export default withStyles(styles)(connector(GroupScene))
