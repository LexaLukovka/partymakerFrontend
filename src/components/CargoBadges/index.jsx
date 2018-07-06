/* eslint-disable prefer-destructuring */
import React from 'react'
import Avatar from '@material-ui/core/es/Avatar/Avatar'
import { withStyles } from '@material-ui/core/styles'
import moment from 'moment'
import truncate from 'lodash/truncate'
import PropTypes from 'prop-types'
import CargoBadge from './CargoBadge'
import connector from '../CargoBadges/connector'

const styles = {
  photo: {
    width: 125,
    height: 125,
    borderRadius: '5%',
    margin: 5,
  },
}

const CargoBadges = ({ badges, classes, extended }) =>
  badges.map((badge, index) => {
    let label
    let value

    if (!badge.value) return null

    switch (badge.key) {
      case 'time':
        label = 'время'
        value = moment(badge.value).format('LT')
        break
      case 'pictures':
        label = 'фото'
        value = badge.value.map(img => <Avatar className={classes.photo} src={img} />)
        break
      case 'weight':
        label = 'Вес'
        value = badge.value
        break
      case 'dimensions':
        label = 'размеры'
        value = badge.value
        break
      case 'volume':
        label = 'обьём'
        value = badge.value
        break
      case 'description':
        label = 'описание'
        value = extended ? badge.value : truncate(badge.value)
        break
      case 'transport_type':
        label = 'транспорт'
        value = badge.value
        break

      case 'payment':
        label = 'оплата'
        value = badge.value
        break

      case 'distance':
        label = 'растояние'
        value = badge.value
        break

      default:
        return null
    }
    return <CargoBadge key={index} label={label} value={value} />
  })

CargoBadges.propTypes = {
  classes: PropTypes.object.isRequired,
  badges: PropTypes.array.isRequired,
  extended: PropTypes.bool,
}

CargoBadges.defaultProps = {
  extended: false,
}
// noinspection JSUnusedGlobalSymbols
export default connector(withStyles(styles)(CargoBadges))
