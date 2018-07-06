import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/es/Grid/Grid'
import PropTypes from 'prop-types'
import UserCard from './UserCard'
import ExtendedCargoCard from './ExtendedCargoCard'
import connector from './connector'
import Container from '../Container'

const styles = theme => ({
  root: {
    padding: theme.spacing.size3,
  },
})

class ShowCargoScene extends React.Component {
  componentDidMount() {
    const { actions, match } = this.props
    actions.cargo.show(parseFloat(match.params.id))
  }

  render() {
    const { classes, cargo } = this.props

    if (!cargo) return 'Груза не найдено'

    return (
      <Container>
        <Grid container spacing={24} className={classes.root}>
          <Grid item xs={4}>
            <UserCard cargo={cargo} />
          </Grid>
          <Grid item xs={8}>
            <ExtendedCargoCard />
          </Grid>
        </Grid>
      </Container>
    )
  }
}

ShowCargoScene.propTypes = {
  match: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  cargo: PropTypes.object,
  actions: PropTypes.object.isRequired,
}
ShowCargoScene.defaultProps = {
  cargo: null,
}

export default connector(withStyles(styles)(ShowCargoScene))
