import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/es/TextField/TextField'

const styles = theme => ({
  card: {
    minWidth: 800,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  pos: {
    marginBottom: 16,
  },
  input: {
    marginBottom: theme.spacing.size3,
  },
})

const ProfileCard = ({ classes, user }) =>
  <div>
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="headline" color="primary" className="mb-4">
          Общие данные аккаунта
        </Typography>
        <div className={classes.input}>
          <Typography variant="subheading">Ваше имя и фамилия</Typography>
          <TextField
            type="text"
            name="name"
            defaultValue={user.name}
          />
        </div>
        <div className={classes.input}>
          <Typography variant="subheading">Ваш email</Typography>
          <TextField
            type="text"
            name="email"
            defaultValue={user.email}
          />
        </div>
        <div className={classes.input}>
          <Typography variant="subheading">Ваш номер телефона</Typography>
          <TextField
            type="text"
            name="phone"
            defaultValue={user.phone}
          />
        </div>
      </CardContent>
      <CardActions>
        <Button
          variant="raised"
          color="primary"
        >
          Сохранить
        </Button>
      </CardActions>
    </Card>
  </div>

ProfileCard.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object,
}
ProfileCard.defaultProps = {
  user: null,
}

export default withStyles(styles)(ProfileCard)
