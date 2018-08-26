import React from 'react'
import { object } from 'prop-types'
import isEmpty from 'lodash/isEmpty'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Button } from '@material-ui/core'
import PictureUpload from 'components/PictureUpload'
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
  state = {
    pictures: [],
  }

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
    const { pictures } = this.state
    actions.party.change(match.params.id, { pictures })
  }

  handleUpload = (name, value) => {
    this.setState({
      pictures: value,
    })
  }

  render() {
    const { classes, party } = this.props
    return (
      <div className={classes.root}>
        <div>
          <Typography variant="subheading">Изменить фотографии вечеринки</Typography>
          <PictureUpload
            pictures={party.pictures.map(picture => picture.url)}
            name="pictures"
            onChange={this.handleUpload}
          />
        </div>
        <Button variant="raised" color="primary" onClick={this.handleClick}>
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
