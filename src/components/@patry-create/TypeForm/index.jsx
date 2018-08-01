import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core/styles/index'
import Typography from '@material-ui/core/es/Typography/Typography'
import connector from '../connector'
import TagList from './TagList'

const styles = {
  root: {
    textAlign: 'center',
  },
}

class TypeForm extends React.Component {
  componentDidMount() {
    const { actions } = this.props
    actions.party.update({ step: 1 })
  }

  handleSelect = (type) => {
    const { actions, history } = this.props
    actions.party.update({ type })
    history.push('/party/create/step/2')
  }

  render() {
    const { classes } = this.props
    return (
      <form className={classes.root}>
        <Typography variant="subheading">Выберите тип вашей вечеринки</Typography>
        <TagList onSelect={this.handleSelect} />
      </form>
    )
  }
}

TypeForm.propTypes = {
  classes: object.isRequired,
  history: object.isRequired,
  actions: object.isRequired,
}

export default withStyles(styles)(connector(TypeForm))
