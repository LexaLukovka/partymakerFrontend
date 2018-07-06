/* eslint-disable object-curly-newline,camelcase */
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import moment from 'moment'
import Card from '@material-ui/core/es/Card/Card'
import Grid from '@material-ui/core/es/Grid/Grid'
import Typography from '@material-ui/core/es/Typography/Typography'
import Icon from '@material-ui/core/es/Icon/Icon'
import Modal from '@material-ui/core/es/Modal/Modal'
import Avatar from '@material-ui/core/es/Avatar/Avatar'
import CargoBadges from '../../CargoBadges'
import connector from '../connector'
import LargePictureCargoBadge from './LargePictureCargoBadge'
import InfoTable from './InfoTable'
import CargoBadge from '../../CargoBadges/CargoBadge'

function rand() {
  return Math.round(Math.random() * 20) - 10
}

function getModalStyle() {
  const top = 50 + rand()
  const left = 50 + rand()

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}

const styles = theme => ({
  root: {
    marginBottom: theme.spacing.size3,
    padding: theme.spacing.size2,
  },
  locations: {
    marginBottom: theme.spacing.size2,
  },
  location: {
    display: 'flex',
  },
  location_text: {
    paddingLeft: theme.spacing.size1,
  },
  rotated: {
    transform: 'rotate(45deg)',
  },
  detailsButton: {
    marginTop: theme.spacing.size1,
  },
  descriptionBadge: {
    padding: theme.spacing.size2,
  },
  description: {
    padding: theme.spacing.size1,
  },

  primaryPicture: {
    borderRadius: 3,
    width: 255,
    height: 255,
    background: 'rgba(0,0,0,0.1)',
  },

  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 70,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },

})

class ExtendedCargoCard extends React.Component {
  state = {
    open: false,
  }
  handleOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  render() {
    const { classes, cargo } = this.props

    const {
      id,
      from,
      to,
      pictures,
      description,
      crosses_border,
      distance,
      primary_picture,
      title,
      updated_at,
      ...rest
    } = cargo

    const other = Object.keys(rest).map(key => ({ key, value: rest[key] }))

    return (
      <Card className={classes.root} key={id}>
        <Grid spacing={8} container>
          <Grid item xs={8}>
            <Grid container alignItems="center">
              <Grid item xs={7}>
                <Typography gutterBottom variant="headline">
                  {title}
                </Typography>
              </Grid>
            </Grid>
            <div className={classes.locations}>
              <div className={classes.location}>
                <Icon>send</Icon>
                <Typography className={classes.location_text}>{from.address}</Typography>
              </div>
              <div className={classes.location}>
                <Icon className={classes.rotated}>call_missed_outgoing</Icon>
                <Typography className={classes.location_text}>{to.address}</Typography>
              </div>
            </div>
            <CargoBadge label="дата отправления" value={moment(from.date).format('DD MMMM YYYY')} />
            <CargoBadge label="дата прибытия" value={moment(to.date).format('DD MMMM YYYY')} />
            <CargoBadges extended badges={other} />

            <LargePictureCargoBadge pictures={pictures} />

            <div className={classes.description}>
              <Typography variant="subheading">Описание:</Typography>
              <Typography variant="body1">
                {description}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={4}>
            <Avatar
              onClick={this.handleOpen}
              className={classes.primaryPicture}
              src={primary_picture}
              alt="primary"
              width="100%"
            />
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={this.state.open}
              onClose={this.handleClose}
            >
              <div style={getModalStyle()} className={classes.paper}>
                <img alt="" src={primary_picture} width="100%" />
              </div>
            </Modal>
            <InfoTable
              id={id}
              distance={distance}
              countryBorder={crosses_border}
              datetime={updated_at}
            />
          </Grid>
        </Grid>
      </Card>
    )
  }
}

ExtendedCargoCard.propTypes = {
  cargo: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
}

export default connector(withStyles(styles)(ExtendedCargoCard))
