import React from 'react'
import { func, object } from 'prop-types'
import { Card, Typography, withStyles } from '@material-ui/core'

import UserAvatar from 'components/User/UserAvatar'
import UserInfo from 'components/User/UserInfo'
import UserForm from 'components/@settings/SettingsScene/DesctopScene/UserForm'
import UserFormPassword from 'components/@settings/SettingsScene/DesctopScene/UserFormPassword'

const styles = () => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    padding: 15,
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-around',
    paddingTop: 10,
    paddingBottom: 40,
  },
  text: {
    paddingTop: 10,
  },
  card: {
    maxWidth: 400,
  },
  cardPassword: {
    maxWidth: 400,
    marginTop: 50,
  },
})

const DesctopScene = ({ classes, user, onChangeAvatar }) =>
  <div className={classes.root}>
    <div>
      <div className={classes.profile}>
        <div>
          <UserAvatar user={user} />
          <Typography
            className={classes.text}
            align="center"
            color="primary"
            onClick={onChangeAvatar}
          >
            Сменить аватар
          </Typography>
        </div>
        <UserInfo user={user} />
      </div>
      <Card className={classes.card}>
        <UserForm />
      </Card>
      <Card className={classes.cardPassword}>
        <UserFormPassword />
      </Card>
    </div>
  </div>

DesctopScene.propTypes = {
  classes: object.isRequired,
  user: object.isRequired,
  onChangeAvatar: func.isRequired,
}

export default withStyles(styles)(DesctopScene)
