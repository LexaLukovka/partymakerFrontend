import { withFormik } from 'formik'

const formik = withFormik({
  mapPropsToValues: () => ({
    picture: '',
  }),

  handleSubmit: (values, { setSubmitting }) => {
    console.log(values)
    setSubmitting(false)
  },
  displayName: 'LoginForm',
})

export default formik
