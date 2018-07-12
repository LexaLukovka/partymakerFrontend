import { withFormik } from 'formik'
import * as Yup from 'yup'

const partyCreateFormik = withFormik({
  validationSchema: Yup.object().shape({
    district: Yup.string()
      .required('Это поле является обязательным'),
    time: Yup.string()
      .required('Это поле является обязательным'),
  }),
  mapPropsToValues: () => ({
    district: '',
    address: '',
    time: '',
    after: '',
    before: '',
    description: '',
    checked: true,
  }),

  handleSubmit: (values, { setSubmitting }) => {
    console.log(values)
    setSubmitting(false)
  },
  displayName: 'PartyCreate',
})

export default partyCreateFormik
