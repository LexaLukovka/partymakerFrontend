import React, { Component } from 'react'
import { object, shape, func, string } from 'prop-types'
import { withStyles } from '@material-ui/core'
import InvitePage from 'components/modules/InvitePage'
import Loading from 'components/elements/Loading'
import NotFound from 'components/modules/NotFound'
import inviteShape from 'shapes/invite'
import userShape from 'shapes/user'
import connector from './connector'


const styles = {
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  actions: {
    marginTop: 150,
  }
}

class InviteScene extends Component {

  state = {
    isLoading: false
  }

  constructor(props) {
    super(props)
    this.load().catch(console.error)
  }

  load = async () => {
    const { actions, match } = this.props
    this.setState({ isLoading: true })
    await actions.loadInviteByToken(match.params.token)
    this.setState({ isLoading: false })
  }

  acceptInvite = async (token) => {
    const { actions, user, history } = this.props

    const { value: room } = await actions.acceptInvite(user.id, token)

    history.push(`/room/${room.id}`)
  }

  render() {
    const { classes, invite, user } = this.props
    const { isLoading } = this.state

    if (isLoading) return <Loading />

    if (!invite) return <NotFound />

    return (
      <div className={classes.root}>
        <InvitePage
          user={user}
          invite={invite}
          onAccept={this.acceptInvite}
        />
      </div>
    )
  }
}

InviteScene.propTypes = {
  classes: object.isRequired,
  invite: inviteShape,
  history: shape({
    push: func.isRequired,
  }),
  match: shape({
    params: shape({
      token: string,
    })
  }).isRequired,
  user: userShape,
  actions: shape({
    loadInviteByToken: func.isRequired,
    acceptInvite: func.isRequired,
  })
}

export default withStyles(styles)(connector(InviteScene))
