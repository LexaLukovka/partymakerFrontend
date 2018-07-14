/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles/index'
import Typography from '@material-ui/core/es/Typography/Typography'
import Icon from '@material-ui/core/es/Icon/Icon'
import connector from '../connector'

const styles = theme => ({
  root: {
    maxWidth: 400,
    marginTop: theme.spacing.size4,
    textAlign: 'center',
    '@media only screen and (max-width: 320px)': {
      marginTop: theme.spacing.size1,
    },
  },
  inline: {
    display: 'inline-block',
    width: 120,
    height: 120,
    margin: '0.25rem',
    borderRadius: '8%',
    '&:hover': {
      background: '#AC07B2',
      color: 'white',
    },
    '@media only screen and (max-width: 640px)': {
      width: 100,
      height: 100,
    },
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
})

class PartyCardIcon extends React.Component {
  handleClick = name => {
    this.props.actions.party.partyCardIcon(name)
  }

  render() {
    const { classes, partyTags } = this.props
    const tags = partyTags.partyCreateTags
    return (
      <form className={classes.root}>
        <Typography variant="subheading">Выберите теги которые больше всего подходят к вашей вечеринке</Typography>
        {tags.map(tag =>
          <div key={tag.id} onClick={() => this.handleClick(tag.name)} className={classes.inline}>
            <div className={classes.circle}>
              <div className={classes.input}>
                <Icon className={classes.icon} color="primary">
                  {tag.icon}
                </Icon>
              </div>
            </div>
            <Typography color="inherit" variant="body1">{tag.description}</Typography>
          </div>)}
      </form>
    )
  }
}

PartyCardIcon.propTypes = {
  classes: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  partyTags: PropTypes.object.isRequired,
}

export default withStyles(styles)(connector(PartyCardIcon))
