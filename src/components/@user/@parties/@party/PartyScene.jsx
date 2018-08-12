/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
import React from 'react'
import { arrayOf, bool, object } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { CSSTransition } from 'react-transition-group'
import isEmpty from 'lodash/isEmpty'
import Loading from 'components/Loading'
import NotFound from 'components/NotFound'
import connector from './connector'
import PartyCard from './PartyCard'
import Carousel from 'components/Carousel'

import './style.css'

const styles = (theme) => ({
  root: {
    overflowX: 'hidden',
    position: 'relative',
    height: '100%',
    background: theme.palette.common.white,
  },
  loading: {
    marginTop: 20,
    textAlign: 'center',
  },
  papers: {
    position: 'absolute',
    top: 200,
    left: 0,
    right: 0,
    margin: 9,
  },
  paperse: {
    marginTop: 20,
    marginLeft: 9,
    marginRight: 9,
  },
  container: {
    display: 'flex',
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
})

class PartyScene extends React.Component {
  state = {
    checked: false,
  }

  componentDidMount() {
    const { actions, match } = this.props
    actions.parties.show(match.params.id)
    actions.header.setIcon('back')
  }

  componentWillUnmount() {
    const { actions } = this.props
    actions.header.setIcon('menu')
  }

  handleClick = (check) => {
    this.setState({
      checked: check === this.state.checked && !check,
    })
  }

  render() {
    const { classes, loading, party } = this.props
    if (loading) return <Loading />
    if (isEmpty(party)) return <NotFound />
    const { checked } = this.state

    return (
      <div className={classes.root}>
        <div onClick={() => this.handleClick(checked)}>
          <Carousel pictures={party.pictures} />
        </div>
        <CSSTransition in={checked} timeout={500} classNames="star">
          <div className={!checked ? classes.papers : classes.paperse}>
            <PartyCard party={party} />
          </div>
        </CSSTransition>
      </div>
    )
  }
}

PartyScene.propTypes = {
  classes: object.isRequired,
  party: object.isRequired,
  loading: bool.isRequired,
  actions: object.isRequired,
  match: object.isRequired,
}

export default withStyles(styles)(connector(PartyScene))