import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/es/Paper/Paper'
import Typography from '@material-ui/core/es/Typography/Typography'

const CarriersCounter = ({ number, from, to }) =>
  <Paper>
    <div className="d-flex p-3">
      <div>
        <Typography align="center" variant="headline">{number}</Typography>
        <Typography variant="caption">перевозщиков</Typography>
      </div>
      <div className="d-flex align-items-center pl-3">
        <div>
          <Typography variant="caption">{from}</Typography>
          <Typography>{to}</Typography>
        </div>
      </div>
    </div>
  </Paper>

CarriersCounter.propTypes = {
  number: PropTypes.number.isRequired,
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

export default CarriersCounter
