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

const styles = (theme) => ({
  root: {
    overflowX: 'hidden',
    height: 800,
    background: theme.palette.common.white,
  },
  loading: {
    marginTop: 20,
    textAlign: 'center',
  },
  papers: {
    position: 'absolute',
    transaction: 'height 2s',
    top: 250,
    left: 0,
    margin: 10,
  },
  paperse: {
    top: 0,
    marginTop: 20,
  },
  container: {
    display: 'flex',
  },
  paper: {
    margin: theme.spacing.unit,
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
