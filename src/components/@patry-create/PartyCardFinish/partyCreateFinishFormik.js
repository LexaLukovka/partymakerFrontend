import { withFormik } from 'formik'
import * as Yup from 'yup'

const partyCreateFinishFormik = withFormik({
  validationSchema: Yup.object().shape({}),
  mapPropsToValues: () => ({
    pictures: [],
    checked: '',
  }),

  handleSubmit: (values, { props, setSubmitting }) => {
    if (values.checked === '') {
      values.checked = true
    }
    props.actions.party.partyCardFinish(values)
    props.actions.stepper.stepperNavigationNext(props.activeStep)
    setSubmitting(false)
  },
  displayName: 'PartyCreate',
})

export default partyCreateFinishFormik
