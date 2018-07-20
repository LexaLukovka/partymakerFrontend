import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/es/TextField/TextField'
import Avatar from '@material-ui/core/es/Avatar/Avatar'
import Grid from '@material-ui/core/es/Grid/Grid'
import Container from '../../Container'

const styles = theme => ({
  card: {
    maxWidth: 800,
    display: 'flex',
    '@media only screen and (max-width: 765px)': {
      display: 'block',
    },
  },
  cardContainer: {
    minWidth: 400,
    '@media only screen and (max-width: 1280px)': {
      minWidth: 150,
    },
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  input: {
    marginBottom: theme.spacing.size3,
    width: 300,
  },
  bottom_save: {
    marginTop: 55,
    marginLeft: 25,
    marginRight: 25,
    '@media only screen and (max-width: 765px)': {
      marginTop: 0,
      marginLeft: 0,
      marginRight: 0,
    },
  },
  user_avatar: {
    flex: '0 0 150px', /* do not grow, do not shrink, start at 250px */
    width: 200,
    height: 200,
    margin: '2rem',
    borderRadius: 10,
  },
})

const ProfileCard = ({ classes, user }) =>
  <Container>
    <Card className={classes.card}>
      <Grid>
        {user &&
        <CardContent className={classes.cardContainer}>
          <Typography variant="headline" color="primary" className="mb-4">
            Общие данные аккаунта
          </Typography>
          {document.documentElement.clientWidth <= 765 &&
          <Avatar className={classes.user_avatar} src="http://localhost:3333/uploads/1531914556056.jpeg" />
          }
          <div className={classes.input}>
            <Typography variant="subheading">Ваше имя и фамилия</Typography>
            <TextField
              fullWidth
              type="text"
              name="name"
              defaultValue={user.name}
            />
          </div>
          <div className={classes.input}>
            <Typography variant="subheading">Ваш email</Typography>
            <TextField
              fullWidth
              type="text"
              name="email"
              defaultValue={user.email}
            />
          </div>
          <div className={classes.input}>
            <Typography variant="subheading">Ваш номер телефона</Typography>
            <TextField
              fullWidth
              type="text"
              name="phone"
              defaultValue={user.phone}
            />
          </div>
        </CardContent>
        }
      </Grid>
      <Grid
        container
        justify={document.documentElement.clientWidth >= 765 ? 'flex-end' : 'center'}
      >
        {document.documentElement.clientWidth > 765 &&
        <div>
          <Avatar className={classes.user_avatar} src="http://localhost:3333/uploads/photo_2018-06-02.jpg" />
        </div>
        }
        <CardActions className={classes.bottom_save}>
          <Button
            fullWidth
            variant="raised"
            color="primary"
          >
            Сохранить
          </Button>
        </CardActions>
      </Grid>
    </Card>
  </Container>

ProfileCard.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object,
}
ProfileCard.defaultProps = {
  user: null,
}

export default withStyles(styles)(ProfileCard)
