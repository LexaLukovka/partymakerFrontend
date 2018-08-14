import React, { Component } from 'react'
import { object, bool } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { Avatar, Typography, Grid, IconButton } from '@material-ui/core'
import Create from 'mdi-react/CreateIcon'
import PartiesScene from '../@parties/PartiesScene'
import Loading from 'components/Loading'
import NotFound from 'components/NotFound'
import isEmpty from 'lodash/isEmpty'
import connector from './connector'

const styles = () => ({
  root: {
    padding: 15,
  },
  flex: {
    display: 'flex',
  },
  avatar: {
    width: 100,
    height: 100,
  },
  icon: {
    alignSelf: 'center',
  },
})

class UserScene extends Component {
  componentDidMount() {
    const { actions } = this.props
    actions.header.title('Мои профиль')
  }

  componentWillUnmount() {
    const { actions } = this.props
    actions.header.resetTitle()
  }

  render() {
    const { classes, loading, user } = this.props
    if (loading) return <Loading />
    if (isEmpty(user)) return <NotFound />
    return (
      <div>
        <div className={classes.root}>
          <div className={classes.flex}>
            <Avatar src={user.avatar_url} className={classes.avatar} />
            <Grid container justify="center">
              <Typography align="left" variant="title">{user.name}</Typography>
              <Typography align="left" variant="subheading">{user.email}</Typography>
              <Typography align="left" variant="subheading">{user.phone}</Typography>
            </Grid>
            <div className={classes.icon}>
              <Link to="/settings">
                <IconButton>
                  <Create />
                </IconButton>
              </Link>
            </div>
          </div>
        </div>
        <PartiesScene />
      </div>
    )
  }
}

UserScene.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  loading: bool.isRequired,
  user: object.isRequired,
}

export default withStyles(styles)(connector(UserScene))
