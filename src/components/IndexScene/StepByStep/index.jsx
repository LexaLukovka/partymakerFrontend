import React from 'react'
import { object } from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'
import chat from './chat.png'
import Steps from './Steps'
import Step from './Steps/Step'

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: 400,
  },
  headline: {
    padding: '30px 0 30px 30px',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-around'
  }
}

const Screenshots = ({ classes }) =>
  <div className={classes.root}>
    <Typography className={classes.headline} variant="h4">Шаг за шагом</Typography>
    <div className={classes.container}>
      <Steps>
        <Step number={1} title="Создай вечеринку">
          Придумай тему вечеринки
          и нажми создать
        </Step>
        <Step number={2} title="Пригласи друзей">
          Вышли пригласительные в
          свою вечеринку
        </Step>
        <Step number={3} title="Выбери время и место">
          Прямо с чате вы вместе можете
          утвердить время и место
        </Step>
      </Steps>
      <img alt="app picture" src={chat} />
    </div>
  </div>

Screenshots.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(Screenshots)
