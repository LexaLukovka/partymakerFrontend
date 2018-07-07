import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/es/TextField/TextField'
import Container from '../../Container'

const styles = theme => ({
  card: {
    maxWidth: 800,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  input: {
    marginBottom: theme.spacing.size3,
  },
})

const PasswordCard = ({ classes }) =>
  <Container>
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="headline" color="primary" className="mb-4">
          Смена пароля
        </Typography>
        <div className={classes.input}>
          <Typography variant="subheading">Введите старый пароль</Typography>
          <TextField
            fullWidth
            type="password"
            name="oldPassword"
            label="Старый пароль"
          />
        </div>
        <div className={classes.input}>
          <Typography variant="subheading">Введите новый пароль</Typography>
          <TextField
            fullWidth
            type="password"
            name="newPassword"
            label="Новый пароль"
          />
        </div>
        <div className={classes.input}>
          <Typography variant="subheading">Повторите новый пароль</Typography>
          <TextField
            fullWidth
            type="password"
            name="repeatPassword"
            label="Повторите новый пароль"
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
  </Container>

PasswordCard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PasswordCard)
