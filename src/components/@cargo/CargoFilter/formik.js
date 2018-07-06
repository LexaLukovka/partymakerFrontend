import Yup from 'yup'
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
    time: '',
    date_from: '',
    date_to: '',
    pictures: [],
    dimensions: '',
    weight: '',
    volume: '',
    description: '',
    transport_type: '',

  }),

  // Custom sync validation

  validationSchema: Yup.object().shape({
    title: Yup.string(),
    from: Yup.object(),
    to: Yup.object(),
    date_from: Yup.date(),
    date_to: Yup.date(),
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
        lat: values.from.geometry.location.lat() ? values.from.geometry.location.lat() : '',
        lng: values.from.geometry.location.lat() ? values.from.geometry.location.lng() : '',
        placeId: values.from.place_id,
        date: values.date_from,
        time: values.time,
      },
      to: {
        address: values.to.formatted_address,
        lat: values.from.geometry.location.lat() ? values.from.geometry.location.lat() : '',
        lng: values.from.geometry.location.lat() ? values.from.geometry.location.lng() : '',
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

    props.actions.cargo.filter(form)

    setSubmitting(false)
  },

  displayName: 'CargoForm', // helps with React DevTools
})
