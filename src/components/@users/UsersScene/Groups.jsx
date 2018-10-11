import React from 'react'
import { bool, number, object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import NotFoundMyGroups from 'components/NotFound/MyGroups'
import NotFoundUserGroups from 'components/NotFound/UserGroups'
import GroupsList from 'components/@groups/GroupsScene/GroupsList'
import isEmpty from 'lodash/isEmpty'
import Loading from 'components/Loading'
import connector from './connector'

const styles = theme => ({
  root: {
    paddingTop: 15,
    maxWidth: 1300,
    margin: '0 auto',
    display: 'grid',
    gridGap: '30px',
    gridTemplateColumns: '350px',

    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: '350px 350px',
    },

    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: '350px 350px 350px',
    },
  },
})

class Groups extends React.Component {
  componentWillMount() {
    const { actions, admin_id } = this.props
    actions.actionButton.show()
    actions.group.load({ admin_id })
  }

  componentWillUnmount() {
    const { actions } = this.props
    actions.actionButton.hide()
  }

  render() {
    const { classes, group: { group, loading }, currentUser } = this.props
    if (loading) return <Loading />
    if (isEmpty(group)) return currentUser ? <NotFoundMyGroups /> : <NotFoundUserGroups />

    return (
      <div className={classes.root}>
        <GroupsList groups={group} />
      </div>
    )
  }
}

Groups.propTypes = {
  classes: object.isRequired,
  group: object.isRequired,
  actions: object.isRequired,
  admin_id: number.isRequired,
  currentUser: bool.isRequired,
}

export default connector(withStyles(styles)(Groups))
