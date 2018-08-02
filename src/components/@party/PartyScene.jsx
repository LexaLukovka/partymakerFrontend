/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
import React from 'react'
import { arrayOf, bool, object } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import connector from './connector'
import Container from '../Container'
import PartyCard from './PartyCard/index'
import Carousel from './Carousel/index'
import Button from '@material-ui/core/es/Button/Button'
import isEmpty from 'lodash/isEmpty'
import Loading from '../Loading'
import NotFound from '../NotFound'
import { CSSTransition } from 'react-transition-group'
import './style.css'

const styles = (theme) => ({
  root: {
    overflowX: 'hidden',
    position: 'relative',
    height: 800,
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
    '@media only screen and (max-width: 320px)': {
      marginLeft: 9,
      marginRight: 9,
    },
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
    this.props.actions.parties.show(this.props.match.params.id)
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
      <Container className={classes.root}>
        <div onClick={() => this.handleClick(checked)}>
          <Carousel pictures={party.pictures} />
        </div>
        <CSSTransition
          in={checked}
          timeout={500}
          classNames="star"
        >
          <div className={!checked ? classes.papers : classes.paperse}>
            <PartyCard
              amount="100"
              table="Пицца"
              admin={party.admin}
              title={party.title}
              status={party.status}
              minCount={party.people_min}
              maxCount={party.people_max}
              address={party.address}
              startTime={party.start_time}
              telegramUrl={party.telegram_url}
              description={party.description}
            />
            <Button variant="raised" size="large" fullWidth color="primary">Я ПОЙДУ</Button>
          </div>
        </CSSTransition>
      </Container>
    )
  }
}

PartyScene.propTypes = {
  classes: object.isRequired,
  party: object,
  loading: bool.isRequired,
  actions: object.isRequired,
  match: object.isRequired,
}

PartyScene.defaultProps = {
  party: {},
}

export default withStyles(styles)(connector(PartyScene))
