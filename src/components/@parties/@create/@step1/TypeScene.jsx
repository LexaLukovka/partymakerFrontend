import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import connector from '../connector'
import TagList from './TagList'

const styles = {
  root: {
    textAlign: 'center',
    margin: '0 auto',
    maxWidth: 400,
  },
}

class TypeForm extends React.Component {
  componentDidMount() {
    const { actions } = this.props
    actions.party.update({ step: 1 })
  }

  handleSelect = (type) => {
    const { actions, history } = this.props
    actions.partyTypes.select(type)
    actions.party.update({ type })
    history.push('/parties/create/step/2')
  }

  render() {
    const { classes, partyTypes } = this.props
    return (
      <form className={classes.root}>
        <Typography variant="subheading">Выберите тип вашей вечеринки</Typography>
        <TagList
          onSelect={this.handleSelect}
          partyTypes={partyTypes.types}
          selected={partyTypes.selected}
        />
      </form>
    )
  }
}

TypeForm.propTypes = {
  classes: object.isRequired,
  history: object.isRequired,
  partyTypes: object.isRequired,
  actions: object.isRequired,
}

export default withStyles(styles)(connector(TypeForm))
