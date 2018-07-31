import { withFormik } from 'formik'
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
    district: '',
    address: '',
    startDay: '',
    startTime: '',
    peopleMin: '',
    peopleMax: '',
    description: '',
  }),

  handleSubmit: (values, { props, setSubmitting }) => {
    props.actions.party.partyCardForm(values)
    props.actions.stepper.stepperNavigationNext(props.activeStep)
    setSubmitting(false)
  },
  displayName: 'PartyCreate',
})

export default formik
