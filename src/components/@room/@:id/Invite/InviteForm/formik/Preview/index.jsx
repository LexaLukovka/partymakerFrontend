import React, { Component } from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import { connect, getIn } from 'formik'
import InvitePage from 'components/modules/InvitePage'

const styles = {
  root: {
    display: 'flex',
    marginBottom: 20,
    zoom: '40%'
  },
}

const getInvite = (values) => ({
  headline: getIn(values, 'headline'),
  title: getIn(values, 'title'),
  preposition: getIn(values, 'preposition'),
  address: getIn(values, 'address'),
  date: getIn(values, 'date'),
  time: getIn(values, 'time'),
  background_url: getIn(values, 'background_url'),
})

class Preview extends Component {
  preview = (e) => {
    e.preventDefault()

    return false
  }

  render() {
    const { classes, formik } = this.props
    return (
      <div className={classes.root} onClick={this.preview}>
        <InvitePage invite={getInvite(formik.values)} />
      </div>
    )
  }
}

Preview.propTypes = {
  classes: object.isRequired,
  formik: object.isRequired,
}

export default withStyles(styles)(connect(Preview))
