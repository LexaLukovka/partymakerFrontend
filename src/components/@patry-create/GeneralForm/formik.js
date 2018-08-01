import { withFormik } from 'formik'
import moment from 'moment'
import * as Yup from 'yup'

const formik = withFormik({
  validationSchema: Yup.object().shape({
    title: Yup.string().required('Это поле является обязательным'),
    district: Yup.string().required('Это поле является обязательным'),
    address: Yup.object().required('Это поле является обязательным'),
    startDay: Yup.string().required('Это поле является обязательным'),
    startTime: Yup.string().required('Это поле является обязательным'),
    peopleMin: Yup.number().required('Это поле является обязательным'),
    peopleMax: Yup.number().required('Это поле является обязательным'),
    description: Yup.string().required('Это поле является обязательным'),
  }),

  mapPropsToValues: () => ({
    title: '',
    district: 'Шевчик',
    address: {
      formatted_address: '',
      geometry: {
        location: {
          lat: 0,
          lng: 0,
        },
      },
    },
    startDay: moment(new Date()).format('YYYY-MM-DD'),
    startTime: '20:00',
    peopleMin: 5,
    peopleMax: 10,
    description: '',
  }),

  handleSubmit: (form, { props, setSubmitting }) => {
    const { actions, history } = props

    actions.party.update(form)
    history.push('/party/create/step/3')

    setSubmitting(false)
  },
  displayName: 'PartyCreate',
})

export default formik
