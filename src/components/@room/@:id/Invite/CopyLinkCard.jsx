import React from 'react'
import { object } from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'
import matchShape from 'shapes/match'
import OutlineCard from 'components/elements/OutlineCard'
import { FRONTEND_URL } from 'constants/index'
import { withRouter } from 'react-router-dom'

const styles = {
  root: {},
}

const CopyLinkCard = ({ classes, match }) =>
  <OutlineCard className={classes.root}>
    <div>
      <Typography
        gutterBottom
        variant="subtitle1"
        align="center"
        color="textSecondary"
      >
        Скопируйте эту ссылку и отправьте её вашим гостям что бы пригласить
      </Typography>
      <Typography
        align="center"
        variant="h5"
        color="primary"
      >{FRONTEND_URL}/room/invite/{match.params.id}.
      </Typography>
    </div>
  </OutlineCard>

CopyLinkCard.propTypes = {
  classes: object.isRequired,
  match: matchShape.isRequired,
}

export default withStyles(styles)(withRouter(CopyLinkCard))
