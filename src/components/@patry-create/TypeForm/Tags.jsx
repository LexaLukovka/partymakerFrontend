/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Icon from '@material-ui/core/es/Icon/Icon'
import Typography from '@material-ui/core/es/Typography/Typography'
import { withStyles } from '@material-ui/core/styles'
import connector from '../connector'

const styles = {
  inline: {
    display: 'inline-block',
    width: 120,
    height: 120,
    margin: '0.25rem',
    borderRadius: '8%',
    '&:hover': {
      background: '#D404DC',
      color: 'white',
    },
    '@media only screen and (max-width: 640px)': {
      width: 100,
      height: 100,
    },
  },
  click: {
    background: '#AC07B2',
    color: 'white',
  },
  circle: {
    width: 70,
    height: 70,
    marginLeft: 25,
    marginTop: 15,
    textAlign: 'center',
    overflow: 'hidden',
    background: '#AC07B2',
    padding: 3,
    borderRadius: '50%',
    '@media only screen and (max-width: 640px)': {
      marginLeft: 15,
      marginTop: 10,
    },
  },
  input: {
    paddingTop: 10,
    display: 'block',
    background: 'white',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
  },
  icon: {
    fontSize: 42,
  },
}

class Tags extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleClick = name => {
    const icon = { icon: name }
    this.props.actions.party.partyCardIconCheck(icon)
  }

  render() {
    const { classes, party } = this.props
    const tags = party.partyTypes
    return (
      <div>
        {tags.map(tag =>
          <div
            key={tag.id}
            onClick={() => this.handleClick(tag.name)}
            className={classNames(
              classes.inline,
              party.checkClick !== null && party.checkClick.icon === tag.name && classes.click,
            )}
          >
            <div className={classes.circle}>
              <div className={classes.input}>
                <Icon className={classes.icon} color="primary">
                  {tag.icon}
                </Icon>
              </div>
            </div>
            <Typography color="inherit" variant="body1">{tag.description}</Typography>
          </div>)}
      </div>
    )

  }
}

Tags.propTypes = {
  classes: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  party: PropTypes.object.isRequired,
}

export default withStyles(styles)(connector(Tags))
