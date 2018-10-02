/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/interactive-supports-focus,no-shadow */
import React from 'react'
import { bool, object } from 'prop-types'
import { Link } from 'react-router-dom'
import { Button, Typography, withStyles } from '@material-ui/core'

import Loading from 'components/Loading'
import NotFound from 'components/NotFound'
import GroupCard from './GroupCard'
import InviteUrl from './GroupCard/InviteUrl'
import Member from './GroupCard/Member'
import Users from './GroupCard/Users'

import isEmpty from 'lodash/isEmpty'
import connector from './connector'

const styles = (theme) => ({
  root: {
    overflowX: 'hidden',
    position: 'relative',
    height: '100%',
  },
  loading: {
    marginTop: 20,
    textAlign: 'center',
  },
  papers: {
    margin: 9,
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  loginLink: {
    color: theme.palette.primary.main,
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
  }
  checkIsPartyMember = () => {
    const { actions, match, group, member: { isMember }, auth } = this.props
    actions.members.load(match.params.id)
    if (!auth.user) return false
    if (isMember !== null && group.id !== match.params.id) {
      actions.members.isMember(match.params.id)
    }
    return true
  }
  toggleJoinParty = async () => {
    const { actions, match, auth: { user }, member: { isMember } } = this.props

    if (!isMember) {
      await actions.members.join(match.params.id, user.id)
    } else {
      await actions.members.leave(match.params.id, user.id)
    }

    await actions.members.load(match.params.id)
  }

  render() {
    const { classes, auth, loading, memberLoading, group, member: { isMember, users } } = this.props
    if (loading) return <Loading />
    if (isEmpty(group)) return <NotFound />

    return (
      <div className={classes.root}>
        <div className={classes.papers}>
          <InviteUrl group={group} />
          <GroupCard group={group} />
          {
            auth.user ?
              <React.Fragment>
                <div className={classes.flex}>
                  <Button color="primary"> Смотреть чат </Button>
                  <Member
                    auth={auth}
                    group={group}
                    memberLoading={memberLoading}
                    isMember={isMember}
                    toggleJoinParty={this.toggleJoinParty}
                  />
                </div>
                <Users users={users} />
              </React.Fragment>
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
  actions: object.isRequired,
  match: object.isRequired,
  auth: object.isRequired,
  loading: bool.isRequired,
  member: object.isRequired,
  memberLoading: bool.isRequired,
  group: object,
}

GroupScene.defaultProps = {
  group: {},
}

export default withStyles(styles)(connector(GroupScene))
