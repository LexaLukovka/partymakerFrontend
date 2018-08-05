import React from 'react'
import { object, number, string, array } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import Paper from '@material-ui/core/Paper'
import connector from '../connector'
import Typography from '@material-ui/core/Typography/Typography'
import Grid from '@material-ui/core/Grid/Grid'
import Button from '@material-ui/core/Button/Button'

const styles = theme => ({
  root: {
    marginBottom: 15,
    paddingRight: 15,
  },
  amount: {
    color: theme.palette.primary.main,
    borderRadius: 30,
  },
  status: {
    width: 17,
    height: 17,
    background: theme.palette.primary.main,
    borderRadius: '50%',
  },
})

const PartyCard = ({
  classes,
  title,
  amount,
  admin,
  status,
  minCount,
  maxCount,
  address,
  telegramUrl,
  startTime,
  table,
  description,
}) =>
  <Paper className={classes.root}>
    <List>
      <ListItem>
        <ListItemText>
          <Grid container justify="center">
            <Typography variant="title">{title}</Typography>
          </Grid>
        </ListItemText>
      </ListItem>
      <ListItem>
        <div className={classes.status} />
        <ListItemText primary={status} />
        <ListItemSecondaryAction>
          {admin.name}
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem>
        <ListItemText primary="Скидываться" />
        <ListItemSecondaryAction className={classes.amount}>
          {`${amount} грн`}
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem>
        <ListItemText primary="Адрес" secondary={address.district} />
        <ListItemSecondaryAction>
          <a href={`http://www.google.com/maps/?q=${address.lat},${address.lng}`}>
            <Button variant="contained" size="small" color="primary">Показать на карте</Button>
          </a>
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem>
        <ListItemText
          primary="Приходить"
          secondary={startTime}
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary="Собирается"
          secondary={`от ${minCount} до ${maxCount} человек`}
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary="Общий стол"
          secondary={table}
        />
      </ListItem>
      <ListItem>
        <ListItemText primary="Описание" secondary={description} />
      </ListItem>
      <ListItem>
        <ListItemText
          primary="Telegram"
          secondary={<a href={telegramUrl}>{`${telegramUrl.substring(0, 40)}...`}</a>}
        />
      </ListItem>
    </List>
  </Paper>

PartyCard.propTypes = {
  classes: object.isRequired,
  title: string.isRequired,
  admin: object.isRequired,
  amount: string.isRequired,
  status: string.isRequired,
  table: string.isRequired,
  maxCount: number.isRequired,
  minCount: number.isRequired,
  address: object.isRequired,
  description: string.isRequired,
  startTime: string.isRequired,
  telegramUrl: string.isRequired,
}

export default withStyles(styles)(connector(PartyCard))
