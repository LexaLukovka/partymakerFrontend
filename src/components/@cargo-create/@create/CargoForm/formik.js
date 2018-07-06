import Yup from 'yup'
import moment from 'moment'
import clean from 'lodash-clean'
import { withFormik } from 'formik'

export default withFormik({
  mapPropsToValues: () => ({
    title: '',
    from: {
      formatted_address: '',
      geometry: {
        location: {
          lat: () => 0,
          lng: () => 0,
        },
      },
    },
    to: {
      formatted_address: '',
      geometry: {
        location: {
          lat: () => 0,
          lng: () => 0,
        },
      },
    },
    time: '18:30',
    date_from: moment().format('YYYY-MM-DD'),
    date_to: moment().format('YYYY-MM-DD'),
    pictures: [],
    dimensions: '',
    weight: '',
    volume: '',
    description: '',
    transport_type: '',

  }),

  validateOnBlur: false,

  // Custom sync validation

  validationSchema: Yup.object().shape({
    title: Yup.string().required('Это поле является обязательным для заполнения!'),
    from: Yup.object().shape({
      formatted_address: Yup.string().required('Это поле является обязательным для заполнения!'),
    }),
    to: Yup.object().shape({
      formatted_address: Yup.string().required('Это поле является обязательным для заполнения!'),
    }),
    date_from: Yup.date(),
    date_to: Yup.date(),
    pictures: Yup.array(),
    dimensions: Yup.string(),
    weight: Yup.number(),
    volume: Yup.number(),
    description: Yup.string(),
    transport_type: Yup.string(),
    payment: Yup.number(),
  }),

  handleSubmit: (values, { props, setSubmitting }) => {
    let form = {
      title: values.title,
      from: {
        address: values.from.formatted_address,
        lat: values.from.geometry.location.lat(),
        lng: values.from.geometry.location.lng(),
        placeId: values.from.place_id,
        date: values.date_from,
        time: values.time,
      },
      to: {
        address: values.to.formatted_address,
        lat: values.to.geometry.location.lat(),
        lng: values.to.geometry.location.lng(),
        placeId: values.to.place_id,
        date: values.date_to,
        time: values.time,
      },
      primary_picture: values.pictures[0],
      pictures: values.pictures,
      weight: values.weight && `${values.weight} кг`,
      dimensions: values.dimensions,
      volume: values.volume && `${values.volume} m³`,
      description: values.description,
      transport_type: values.transport_type,
      payment: values.payment && `${values.payment} грн`,
    }

    form = clean(form)

    props.actions.cargoForm.submit(form)

    props.actions.alert.show('Ваш груз был добавлен')

    setSubmitting(false)
  },

  displayName: 'CargoForm', // helps with React DevTools
})
