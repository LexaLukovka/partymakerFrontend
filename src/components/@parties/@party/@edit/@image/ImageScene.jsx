import React from 'react'
import { object } from 'prop-types'
import isEmpty from 'lodash/isEmpty'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Button } from '@material-ui/core'
import PictureUpload from './PictureUpload'
import connector from '../connector'

const styles = theme => ({
  root: {
    paddingTop: 25,
    paddingRight: 15,
    paddingLeft: 15,
  },
  button: {
    marginTop: theme.spacing.size3,
  },
})

class ImageScene extends React.Component {
  componentDidMount() {
    const { actions } = this.props
    actions.header.back()
    actions.header.title('Фото')
  }

  componentWillUnmount() {
    const { actions } = this.props
    actions.header.menu()
    actions.header.resetTitle()
  }

  handleClick = () => {
    const { actions, match } = this.props
    actions.party.show(match.params.id)
  }

  handleUpload = (name, value) => {
    const { actions, match } = this.props
    actions.party.change(match.params.id, { pictures: value })
  }

  render() {
    const { classes, party, actions, match } = this.props
    return (
      <div className={classes.root}>
        <Typography variant="subheading">Изменить фотографии вечеринки</Typography>
        <PictureUpload
          image={!isEmpty(party) && party.pictures}
          name="pictures"
          actions={actions}
          match={match}
          onChange={this.handleUpload}
        />
        <Button variant="raised" color="primary" type="submit" onClick={this.handleClick}>
          Сохранить
        </Button>
      </div>
    )
  }
}

ImageScene.propTypes = {
  classes: object.isRequired,
  party: object.isRequired,
  actions: object.isRequired,
  match: object.isRequired,
}

export default withStyles(styles)(connector(ImageScene))
