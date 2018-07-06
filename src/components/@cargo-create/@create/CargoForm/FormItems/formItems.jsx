import React from 'react'
import moment from 'moment'
import Select from '@material-ui/core/es/Select/Select'
import MenuItem from '@material-ui/core/es/MenuItem/MenuItem'
import TextField from '@material-ui/core/es/TextField/TextField'
import InputAdornment from '@material-ui/core/es/InputAdornment/InputAdornment'
import Geosuggest from '../../../../Geosuggest'
import PictureUpload from './PictureUpload/index'

export default {

  title: {
    label: 'Что у вас за груз?',
    component: <TextField
      name="title"
      fullWidth
      placeholder="Например: Ящик картошки"
      label="Название груза"
    />,
  },

  from: {
    label: 'Откуда забирать?',
    component: <Geosuggest
      id="from"
      name="from"
      fullWidth
      label="Адрес"
    />,
  },

  to: {
    label: 'Куда отвезти?',
    component: <Geosuggest
      id="to"
      name="to"
      fullWidth
      label="Адрес"
    />,
  },

  time: {
    label: 'Во сколько время забрать груз?',
    component: <TextField
      label="Время"
      id="time"
      type="time"
      fullWidth
      initial="18:30"
      InputLabelProps={{ shrink: true }}
      inputProps={{ step: 300 }}
    />,
  },

  date_from: {
    label: 'Какого числа забрать груз?',
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
      initial={moment().format('YYYY-MM-DD')}
      InputLabelProps={{
        shrink: true,
      }}
    />,
  },

  pictures: {
    label: 'Добавить фотографий?',
    component: <PictureUpload name="pictures" />,
  },

  dimensions: {
    label: 'Какие габариты груза?',
    component: <TextField name="dimensions" fullWidth label="Размеры" />,
  },

  weight: {
    label: 'Какой вес?',
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
    label: 'Какой обьем?',
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
    label: 'Добавить описание',
    component: (
      <TextField
        multiline
        rowsMax="4"
        name="description"
        fullWidth
        label="Описание"
      />
    ),
  },

  transport_type: {
    label: 'Какой тип траспорта нужен?',
    component: (
      <Select
        id="transport-input"
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
    label: 'Сколько планируете заплатить?',
    component: <TextField
      name="payment"
      fullWidth
      type="number"
      label="Сумма"
      InputProps={{
        endAdornment: <InputAdornment position="end">грн</InputAdornment>,
      }}
    />,
  },
}
