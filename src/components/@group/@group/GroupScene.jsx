/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/interactive-supports-focus,no-shadow */
import React from 'react'
import { bool, object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import isEmpty from 'lodash/isEmpty'

import Loading from 'components/Loading'
import NotFound from 'components/NotFound'
import GroupCard from './GroupCard'
import Member from 'components/@group/@group/GroupCard/Member'
import InviteUrl from 'components/@group/@group/GroupCard/InviteUrl'

import connector from './connector'
import MembersScene from 'components/@group/@group/GroupCard/MembersScene'

const styles = () => ({
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
    const { actions, match, group, member: { isMember }, auth } = this.props
    actions.members.load(match.params.id)
    if (!auth.user) return false
    if (isMember !== null && group.id !== match.params.id) {
      actions.members.isMember(match.params.id)
    }
    return true
  }
  toggleJoinParty = () => {
    const { actions, match, member: { isMember } } = this.props

    if (!isMember) {
      actions.members.join(match.params.id)
    } else {
      actions.members.leave(match.params.id)
    }
  }

  render() {
    const { classes, auth, loading, memberLoading, group, place, member: { isMember, users } } = this.props
    if (loading) return <Loading />
    if (isEmpty(group)) return <NotFound />

    return (
      <div className={classes.root}>
        <div className={classes.papers}>
          <InviteUrl group={group} />
          <GroupCard group={group} place={place} />
          <Member group={group} auth={auth} memberLoading={memberLoading} isMember={isMember} />
          <MembersScene auth={auth.user} users={users} />
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
  place: object,
}

GroupScene.defaultProps = {
  group: {},
  place: {},
}

export default withStyles(styles)(connector(GroupScene))
