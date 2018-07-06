/* eslint-disable object-curly-newline,camelcase */
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import moment from 'moment'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/es/Button/Button'
import Card from '@material-ui/core/es/Card/Card'
import Grid from '@material-ui/core/es/Grid/Grid'
import Typography from '@material-ui/core/es/Typography/Typography'
import Icon from '@material-ui/core/es/Icon/Icon'
import Avatar from '@material-ui/core/es/Avatar/Avatar'
import CargoBadges from '../../../CargoBadges'
import PictureCargoBadge from './PictureCargoBadge'
import CargoBadge from '../../../CargoBadges/CargoBadge'

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
  primaryPicture: {
    borderRadius: 3,
    width: 200,
    height: 200,
    background: 'rgba(0,0,0,0.1)',
  },
})

const CargoCard = ({ classes, cargo }) => {
  const { id, from, to, pictures, primary_picture, title, ...rest } = cargo
  const other = Object.keys(rest).map(key => ({ key, value: rest[key] }))
  return (
    <Card className={classes.root} key={id}>
      <Grid container>
        <Grid item xs={9}>
          <Grid container alignItems="center">
            <Grid item xs={7}>
              <Typography gutterBottom variant="headline">
                <Link to={`/cargo/${id}`}>{title}</Link>
              </Typography>
            </Grid>
            <Grid item xs={5} container justify="flex-end">
              <PictureCargoBadge pictures={pictures} />
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
          <CargoBadges badges={other} />
        </Grid>
        <Grid item xs={3}>
          <Link to={`/cargo/${id}`}>
            <Avatar
              className={classes.primaryPicture}
              src={primary_picture}
              alt="primary"
              width="100%"
            />
          </Link>
          <Link to={`/cargo/${id}`}>
            <Button fullWidth color="primary" variant="raised" className={classes.detailsButton}>
              Подробее
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Card>
  )
}

CargoCard.propTypes = {
  cargo: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
}

export default (withStyles(styles)(CargoCard))
