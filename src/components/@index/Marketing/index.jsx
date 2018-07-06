/* eslint-disable react/forbid-prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/es/Typography/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Container from '../../Container'
import TextInfo from './TextInfo'

const styles = {
  center: {
    textAlign: 'center',
    color: 'white',
  },
  card: {
    width: 320,
    minWidth: 275,
  },
  pos: {
    marginBottom: 10,
  },
}

const Marketing = ({ classes }) =>
  <TextInfo>
    <Container className="pt-5 pl-5">
      <Typography className={classes.center} variant="title">ПОЧЕМУ МЫ?</Typography>
    </Container>
    <Container className="p-5 d-flex justify-content-around">
      <Card className={classes.card}>
        <CardContent>
          <Typography
            className={classes.pos}
            variant="headline"
            component="h2"
          >
            Просто
          </Typography>
          <Typography component="p">
            Укажите свой точный адрес, чтобы найти идеального перевозчика. Выбирайте, кому доверите свой груз.
            Заказывайте!
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardContent>
          <Typography
            className={classes.pos}
            variant="headline"
            component="h2"
          >
            Легко
          </Typography>
          <Typography component="p">
            Среди миллионов перевозчиков вы запросто найдете тex, кто быстро и нe дорого доставит вам груз. Просто
            укажите место, c которого его нужно забрать и место доставки.
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardContent>
          <Typography
            className={classes.pos}
            variant="headline"
            component="h2"
          >
            Удобно
          </Typography>
          <Typography component="p">
            Отправляйте грузы тогда, когда вам удобно. Вам больше не нужно ни под кого подстраиваться и тратить время на
            поиск перевозчика.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  </TextInfo>

Marketing.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Marketing)
