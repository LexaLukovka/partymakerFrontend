import { withFormik } from 'formik'
import * as Yup from 'yup'

const partyCreateFormik = withFormik({
  validationSchema: Yup.object().shape({}),
  mapPropsToValues: () => ({
    district: '',
    address: {},
    time: '',
    after: '',
    before: '',
    description: '',
  }),

  handleSubmit: (values, { setSubmitting }) => {
    console.log(values)
    setSubmitting(false)
  },
  displayName: 'PartyCreate',
})

export default partyCreateFormik
