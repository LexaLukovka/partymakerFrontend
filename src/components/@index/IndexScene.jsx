import { Button } from '@material-ui/core'

/* eslint-disable spaced-comment */
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { object } from 'prop-types'
import { Link } from 'react-router-dom'
import connector from './connector'
import BannerJumbotron from './Jumbotron'

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '100%',
    paddingLeft: 15,
    paddingRight: 15,
  },

  button: {
    marginBottom: 15,
  },
}

class IndexScene extends React.Component {
  componentDidMount() {
    const { actions } = this.props
    actions.layout.background('http://localhost:3333/images/summer.jpg')
  }

  componentWillUnmount() {
    const { actions } = this.props
    actions.layout.removeBackground()
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <BannerJumbotron />
        <div>
          <Link to="/parties/create">
            <Button
              className={classes.button}
              fullWidth
              variant="contained"
              size="large"
              color="primary"
            >
              Создать вечеринку
            </Button>
          </Link>
          <Link to="/parties">
            <Button
              fullWidth
              variant="contained"
              size="large"
              color="primary"
            >
              Найти вечеринку
            </Button>
          </Link>
        </div>
      </div>
    )
  }
}

IndexScene.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
}

export default withStyles(styles)(connector(IndexScene))
