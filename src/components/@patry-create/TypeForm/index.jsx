import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles/index'
import Typography from '@material-ui/core/es/Typography/Typography'
import Button from '@material-ui/core/es/Button/Button'
import connector from '../connector'
import Tags from './Tags'

const styles = theme => ({
  root: {
    maxWidth: 400,
    marginTop: theme.spacing.size4,
    textAlign: 'center',
    '@media only screen and (max-width: 320px)': {
      marginTop: theme.spacing.size1,
    },
  },
  buttonGroup: {
    marginTop: theme.spacing.size4,
  },
})

class PartyCardIcon extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault()
    if (this.props.party.checkClick) {
      this.props.actions.party.partyCardIcon(this.props.party.checkClick)
      this.props.actions.stepper.stepperNavigationNext(this.props.activeStep)
    }
  }

  render() {
    const { classes, party } = this.props
    return (
      <form onSubmit={this.handleSubmit} className={classes.root}>
        <Typography variant="subheading">Выберите теги которые больше всего подходят к вашей вечеринке</Typography>
        <Tags />
        <div className={classes.buttonGroup}>
          <Button
            type="submit"
            disabled={!party.checkClick}
            variant="contained"
            size="large"
            color="primary"
          >
            Дальше
          </Button>
        </div>
      </form>
    )
  }
}

PartyCardIcon.propTypes = {
  classes: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  party: PropTypes.object.isRequired,
  activeStep: PropTypes.number.isRequired,
}

export default withStyles(styles)(connector(PartyCardIcon))
