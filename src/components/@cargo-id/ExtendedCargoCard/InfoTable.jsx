/* eslint-disable react/jsx-indent */
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import moment from 'moment'

const styles = theme => ({
  root: {
    width: '100%',
    fontSize: theme.typography.caption.fontSize,
  },
})

const InfoTable = ({ classes, id, distance, datetime, countryBorder }) =>
  <table className={classes.root}>
    <tbody>
    <tr>
      <td>номер заявки:</td>
      <td>№{id}</td>
    </tr>
    <tr>
      <td>растояние:</td>
      <td>20 км</td>
    </tr>
    <tr>
      <td>граница:</td>
      <td>{countryBorder ? 'пересекается' : 'не пересекается'}</td>
    </tr>
    <tr>
      <td>дата размещения:</td>
      <td>{moment(datetime).format('DD MMMM YYYY')}</td>
    </tr>
    <tr>
      <td>время размещения:</td>
      <td>{moment(datetime).fromNow()}</td>
    </tr>
    </tbody>
  </table>

InfoTable.propTypes = {
  classes: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  datetime: PropTypes.string.isRequired,
  distance: PropTypes.node,
  countryBorder: PropTypes.bool,
}

InfoTable.defaultProps = {
  distance: '',
  countryBorder: false,
}

export default withStyles(styles)(InfoTable)
