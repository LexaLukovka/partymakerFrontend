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

const PasswordCard = ({ classes, user }) =>
  <div>
    {console.log(user)}
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="headline" color="primary" className="mb-4">
          Смена пароля
        </Typography>
        <div className={classes.input}>
          <Typography variant="subheading">Введите старый пароль</Typography>
          <TextField
            type="password"
            name="oldPassword"
          />
        </div>
        <div className={classes.input}>
          <Typography variant="subheading">Введите новый пароль</Typography>
          <TextField
            type="password"
            name="newPassword"
          />
        </div>
        <div className={classes.input}>
          <Typography variant="subheading">Повторите новый пароль</Typography>
          <TextField
            type="password"
            name="repeatPassword"
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

PasswordCard.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object,
}
PasswordCard.defaultProps = {
  user: null,
}

export default withStyles(styles)(PasswordCard)
