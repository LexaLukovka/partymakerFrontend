import React from 'react'
import moment from 'moment'
import Select from '@material-ui/core/es/Select/Select'
import MenuItem from '@material-ui/core/es/MenuItem/MenuItem'
import TextField from '@material-ui/core/es/TextField/TextField'
import InputAdornment from '@material-ui/core/es/InputAdornment/InputAdornment'
import Geosuggest from '../../../Geosuggest/index'

export default {

  title: {
    label: 'Искать по названию груза',
    component: <TextField
      name="title"
      fullWidth
      placeholder="Например: Ящик картошки"
      label="Название груза"
    />,
  },

  from: {
    label: 'Откуда едите?',
    component: <Geosuggest
      name="from"
      fullWidth
      label="Адрес"
    />,
  },

  to: {
    label: 'Куда едите?',
    component: <Geosuggest
      name="to"
      fullWidth
      label="Адрес"
    />,
  },

  time: {
    label: 'Во сколько время едите?',
    component: <TextField
      label="Время"
      id="time"
      type="time"
      fullWidth
      InputLabelProps={{ shrink: true }}
      inputProps={{ step: 300 }}
    />,
  },

  date_from: {
    label: 'Какого числа выезжаете?',
    component: <TextField
      id="date_from"
      label="Дата"
      fullWidth
      type="date"
      initial={moment().format('YYYY-MM-DD')}
      InputLabelProps={{
        shrink: true,
      }}
    />,
  },

  date_to: {
    label: 'До какой даты доставить?',
    component: <TextField
      id="date_to"
      label="Дата"
      fullWidth
      name="date_to"
      type="date"
      InputLabelProps={{
        shrink: true,
      }}
    />,
  },

  dimensions: {
    label: 'Какие размеры подойдут?',
    component: <TextField name="dimensions" fullWidth label="Размеры" />,
  },

  weight: {
    label: 'Какой вес возьмете?',
    component: <TextField
      name="weight"
      fullWidth
      type="number"
      label="Вес"
      InputProps={{
        endAdornment: <InputAdornment position="end">кг</InputAdornment>,
      }}

    />,
  },

  volume: {
    label: 'Какой обьем у вас поместится?',
    component: <TextField
      name="volume"
      fullWidth
      type="number"
      label="Обьем"
      InputProps={{
        endAdornment: <InputAdornment position="end">м³</InputAdornment>,
      }}
    />,
  },

  description: {
    label: 'Найти по описанию?',
    component: <TextField name="description" fullWidth label="Описание" />,
  },

  transport_type: {
    label: 'Какой у вас тип траспорта?',
    component: (
      <Select
        id="transport_type"
        label="Выбрать"
        fullWidth
        inputProps={{
          name: 'transport_type',
          id: 'transport_type',
        }}
      >
        <MenuItem value="light">Легковой</MenuItem>
        <MenuItem value="cargo">Грузовой</MenuItem>
        <MenuItem value="special">Специальный</MenuItem>
      </Select>
    ),
  },

  payment: {
    label: 'Сколько планируете заработать?',
    component: <TextField
      name="payment"
      fullWidth
      label="Сумма"
      InputProps={{
        endAdornment: <InputAdornment position="end">грн</InputAdornment>,
      }}
    />,
  },
}
