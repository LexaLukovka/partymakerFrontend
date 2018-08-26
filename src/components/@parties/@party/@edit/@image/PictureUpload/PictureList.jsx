/* eslint-disable function-paren-newline */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react'
import { object, array } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Avatar } from '@material-ui/core'
import isEmpty from 'lodash/isEmpty'
import DeleteForeverIcon from 'mdi-react/DeleteForeverIcon'

const styles = theme => ({
  root: {
    display: 'flex',
  },
  photo: {
    position: 'relative',
    width: 70,
    height: 70,
    borderRadius: '5%',
    margin: 2,
    '&:hover': {
      opacity: 0.5,
    },
  },
  deleteT: {
    position: 'absolute',
    color: theme.palette.primary.main,
    width: 50,
    height: 50,
    top: 10,
    marginLeft: 13,
    visibility: 'visible',
  },
  deleteF: {
    position: 'absolute',
    visibility: 'hidden',
  },
})

class PictureList extends React.Component {
  state = {
    isDelete: false,
    indexDelete: null,
  }

  inDelete = (index) => {
    this.setState({
      isDelete: true,
      indexDelete: index,
    })
  }
  outDelete = () => {
    this.setState({
      isDelete: false,
    })
  }

  delete = (name) => {
    const { actions, match } = this.props
    actions.party.deleteImg(name.split('uploads/')[1])
    actions.party.show(match.params.id)
  }

  render() {
    const { classes, image, pictures } = this.props
    const { isDelete, indexDelete } = this.state
    return (
      <div className={classes.root}>
        {!isEmpty(image) &&
        image.map((img, index) =>
          <div
            key={index}
            onMouseOver={() => this.inDelete(index)}
            onMouseOut={this.outDelete}
          >
            <Avatar className={classes.photo} src={img.url} />
            {index === indexDelete &&
            <DeleteForeverIcon
              onClick={() => this.delete(img.url)}
              className={isDelete ? classes.deleteT : classes.deleteF}
            />
            }
          </div>,
        )}
        {pictures.map((img, index) =>
          <Avatar key={index} className={classes.photo} src={img} />,
        )}
      </div>
    )
  }
}

PictureList.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  match: object.isRequired,
  pictures: array.isRequired,
  image: array,
}

PictureList.defaultProps = {
  image: [],
}

export default withStyles(styles)(PictureList)
