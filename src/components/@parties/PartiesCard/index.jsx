/* eslint-disable react/jsx-curly-spacing */
import React from 'react'
import { object, func } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import FormControlLabel from '@material-ui/core/FormControlLabel/FormControlLabel'
import Typography from '@material-ui/core/Typography/Typography'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Favorite from '@material-ui/icons/Favorite'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'
import ShareIcon from '@material-ui/icons/Share'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Button from '@material-ui/core/es/Button/Button'
import Grid from '@material-ui/core/es/Grid/Grid'
import PartiesCardDescription from './PartiesCardDescription'
import Checkbox from '@material-ui/core/Checkbox/Checkbox'
import moment from 'moment'
import connector from '../connector'

const styles = theme => ({
  root: {
    marginBottom: 15,
    width: '100%',
    '@media only screen and (max-width: 320px)': {
      width: '95%',
    },
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
    marginTop: -30,
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  flex: {
    flexGrow: 1,
    marginLeft: 30,
  },
  picture: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
  title: {
    paddingTop: 20,
  },
  cardContent: {
    paddingTop: 0,
  },
})

const PartiesCard = ({ classes, party, ...props }) =>
  <Card className={classes.root}>
    <CardHeader
      avatar={<Avatar src={party.admin.avatar_url} />}
      action={<IconButton><MoreVertIcon /></IconButton>}
      title={party.admin.name}
      subheader={moment(party.updated_at).fromNow()}
    />
    <CardContent className={classes.cardContent}>
      <Grid container justify="space-around">
        <Avatar src={party.primary_picture} className={classes.picture} />
      </Grid>
      <Grid container justify="center">
        <Typography variant="title" color="primary" className={classes.title}> {party.title}</Typography>
      </Grid>
      <PartiesCardDescription
        maxCount={party.people_max}
        amount="100"
        address={party.address}
        description={party.description}
      />
    </CardContent>
    <CardActions className={classes.actions} disableActionSpacing>
      <div className={classes.flex}>
        <FormControlLabel
          control={
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite color="primary" />}
              value="checked"
              onClick={() => props.actions.like.like(party.id)}
            />}
          label="0"
        />
        <IconButton aria-label="Share">
          <ShareIcon />
        </IconButton>
      </div>
      <Link to={`/parties/${party.id}`}>
        <Button color="primary" onClick={() => props.actions.parties.show(party.id)}>Подробнее</Button>
      </Link>
    </CardActions>
  </Card>

PartiesCard.propTypes = {
  classes: object.isRequired,
  party: object.isRequired,
  actions: object.isRequired,
}

export default withStyles(styles)(connector(PartiesCard))
