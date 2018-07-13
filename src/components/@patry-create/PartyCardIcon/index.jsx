import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles/index'
import Typography from '@material-ui/core/es/Typography/Typography'
import Home from '@material-ui/icons/es/Home'
import LocationOn from '@material-ui/icons/es/LocationOn'
import DirectionsCar from '@material-ui/icons/es/DirectionsCar'
import Store from '@material-ui/icons/es/Store'
import MyLocation from '@material-ui/icons/es/MyLocation'
import LocalBar from '@material-ui/icons/es/LocalBar'
import Restaurant from '@material-ui/icons/es/Restaurant'
import DirectionsBike from '@material-ui/icons/es/DirectionsBike'
import Motorcycle from '@material-ui/icons/es/Motorcycle'
import BeachAccess from '@material-ui/icons/es/BeachAccess'

const styles = theme => ({
  root: {
    maxWidth: 400,
    marginTop: theme.spacing.size4,
    textAlign: 'center',
    '@media only screen and (max-width: 320px)': {
      marginTop: theme.spacing.size1,
    },
  },
  inline: {
    display: 'inline-block',
    width: 120,
    height: 120,
    margin: '0.25rem',
    borderRadius: '8%',
    '&:hover': {
      background: '#AC07B2',
      color: 'white',
    },
  },
  circle: {
    width: 70,
    height: 70,
    marginLeft: 25,
    marginTop: 15,
    textAlign: 'center',
    overflow: 'hidden',
    background: '#AC07B2',
    padding: 3,
    borderRadius: '50%',
  },
  input: {
    paddingTop: 10,
    display: 'block',
    background: 'white',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
  },
  icon: {
    fontSize: 42,
  },
})

class PartyCardIcon extends React.Component {
  render() {
    const {
      classes,
    } = this.props

    return (
      <form onSubmit={this.handleSubmit} className={classes.root}>
        <Typography variant="subheading">Выберите теги которые больше всего подходят к вашей вечеринке</Typography>
        <div className={classes.inline}>
          <div className={classes.circle}>
            <div className={classes.input}>
              <Restaurant color="primary" className={classes.icon} />
            </div>
          </div>
          <Typography color="inherit" variant="body1">Шашлыки</Typography>
        </div>
        <div className={classes.inline}>
          <div className={classes.circle}>
            <div className={classes.input}>
              <Home color="primary" className={classes.icon} />
            </div>
          </div>
          <Typography color="inherit" variant="body1">Квартира</Typography>
        </div>
        <div className={classes.inline}>
          <div className={classes.circle}>
            <div className={classes.input}>
              <Store color="primary" className={classes.icon} />
            </div>
          </div>
          <Typography color="inherit" variant="body1">Дача</Typography>
        </div>
        <div className={classes.inline}>
          <div className={classes.circle}>
            <div className={classes.input}>
              <BeachAccess color="primary" className={classes.icon} />
            </div>
          </div>
          <Typography color="inherit" variant="body1">Пляж</Typography>
        </div>
        <div className={classes.inline}>
          <div className={classes.circle}>
            <div className={classes.input}>
              <LocationOn color="primary" className={classes.icon} />
            </div>
          </div>
          <Typography color="inherit" variant="body1">На площади</Typography>
        </div>
        <div className={classes.inline}>
          <div className={classes.circle}>
            <div className={classes.input}>
              <LocalBar color="primary" className={classes.icon} />
            </div>
          </div>
          <Typography color="inherit" variant="body1">Тематическая</Typography>
        </div>
        <div className={classes.inline}>
          <div className={classes.circle}>
            <div className={classes.input}>
              <DirectionsCar color="primary" className={classes.icon} />
            </div>
          </div>
          <Typography color="inherit" variant="body1">Автомобили</Typography>
        </div>
        <div className={classes.inline}>
          <div className={classes.circle}>
            <div className={classes.input}>
              <Motorcycle color="primary" className={classes.icon} />
            </div>
          </div>
          <Typography color="inherit" variant="body1">Мотоциклы</Typography>
        </div>
        <div className={classes.inline}>
          <div className={classes.circle}>
            <div className={classes.input}>
              <DirectionsBike color="primary" className={classes.icon} />
            </div>
          </div>
          <Typography color="inherit" variant="body1">Велосипеды</Typography>
        </div>
        <div className={classes.inline}>
          <div className={classes.circle}>
            <div className={classes.input}>
              <MyLocation color="primary" className={classes.icon} />
            </div>
          </div>
          <Typography color="inherit" variant="body1">Другое</Typography>
        </div>
      </form>
    )
  }
}

PartyCardIcon.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PartyCardIcon)
