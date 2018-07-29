import { withFormik } from 'formik'
import * as Yup from 'yup'

const formik = withFormik({
  validationSchema: Yup.object().shape({
    title: Yup.string(),
    district: Yup.string().required('Это поле является обязательным'),
    address: Yup.object().required('Это поле является обязательным'),
    startDay: Yup.string(),
    startTime: Yup.string(),
    peopleMin: Yup.number(),
    peopleMax: Yup.number(),
    description: Yup.string(),
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
