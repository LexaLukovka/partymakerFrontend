/* eslint-disable function-paren-newline */
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Container from '../../Container'
import CarriersCounter from './CarriersCounter'
import connector from './connector'

const styles = {
  root: {},
}

class PopularRoutes extends React.Component {
  componentDidMount() {
    this.props.actions.popularRoutes.load()
  }

  render() {
    const { classes, popularRoutes } = this.props
    return (
      <section className={classes.root}>
        <section>
          <Container className="p-5 d-flex justify-content-around">
            {popularRoutes.map(route =>
              <CarriersCounter
                key={route.id}
                number={route.number}
                from={route.from}
                to={route.to}
              />,
            )}
          </Container>
        </section>
      </section>
    )
  }
}

PopularRoutes.propTypes = {
  classes: PropTypes.object.isRequired,
  popularRoutes: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
}

export default withStyles(styles)(connector(PopularRoutes))
