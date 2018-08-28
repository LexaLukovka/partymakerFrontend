import React from 'react'
import { object, func, bool } from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import isEmpty from 'lodash/isEmpty'
import { withStyles, Button, Grid } from '@material-ui/core'
import PlaceInput from './PlaceInput'
import DistrictInput from './DistrictInput'
import AddressInput from './AddressInput'
import TitleInput from './TitleInput'
import TelegramInput from './TelegramInput'
import DayInput from './DayInput'
import TimeInput from './TimeInput'
import PeopleInput from './PeopleInput'
import DescriptionInput from './DescriptionInput'
import formik from './formik'
import connector from '../connector'

const styles = theme => ({
  root: {
    padding: '0 15px',
    margin: '0 auto',
    maxWidth: 700,
    marginTop: theme.spacing.size4,
    '@media only screen and (max-width: 320px)': {
      marginTop: 0,
    },
  },

  button: {
    marginRight: theme.spacing.size4,
  },

  checked: {
    height: 25,
  },

  buttonGroup: {
    marginTop: theme.spacing.size4,
    marginBottom: theme.spacing.size3,
    '@media only screen and (max-width: 320px)': {
      marginTop: theme.spacing.size1,
      marginBottom: 0,
    },
  },
})

class GeneralScene extends React.Component {
  componentDidMount() {
    const { actions, party, history } = this.props

    if (!party.form.type) history.push('/parties/create/step/1')

    actions.party.update({ step: 2 })
    actions.header.back()
  }

  componentWillUnmount() {
    const { actions } = this.props
    actions.header.menu()
  }

  removePlace = () => {
    const { actions } = this.props
    actions.party.resetPlace()
  }

  render() {
    const { classes, party, ...formHOC } = this.props
    const { isSubmitting, handleSubmit } = formHOC

    const { place } = party.form

    return (
      <form className={classes.root}>
        {isEmpty(place) ?
          <div>
            <DistrictInput {...formHOC} />
            <AddressInput {...formHOC} />
          </div> :
          <PlaceInput place={place} onCancel={this.removePlace} />
        }

        <TitleInput {...formHOC} />
        <DayInput {...formHOC} />
        <TimeInput {...formHOC} />
        <PeopleInput {...formHOC} />
        <TelegramInput {...formHOC} />
        <DescriptionInput {...formHOC} />

        <Grid container justify="space-between" className={classes.buttonGroup}>
          <Link to="/parties/create/step/1">
            <Button size="large" disabled={isSubmitting}>Назад</Button>
          </Link>
          <Button
            className={classes.button}
            onClick={handleSubmit}
            variant="contained"
            size="large"
            color="primary"
            disabled={isSubmitting}
          >
            Дальше
          </Button>
        </Grid>
      </form>
    )
  }
}

GeneralScene.propTypes = {
  history: object.isRequired,
  place: object.isRequired,
  party: object.isRequired,
  actions: object.isRequired,
  classes: object.isRequired,
  handleSubmit: func.isRequired,
  isSubmitting: bool.isRequired,
}

const router = withRouter(GeneralScene)
const style = withStyles(styles)(router)
const redux = connector(style)

export default formik(redux)
