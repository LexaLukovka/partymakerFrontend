import { withFormik } from 'formik'
import * as Yup from 'yup'
import transformValidationApi from 'src/utils/transformValidationApi'

const formik = withFormik({
  validationSchema: Yup.object()
    .shape({
      email: Yup.string()
        .email('Неправильный email адрес!')
        .required('Это поле является обязательным'),
    }),
  mapPropsToValues: () => ({
    email: '',
  }),

  handleSubmit: async (form, { props: { actions }, setErrors, setSubmitting }) => {
    try {
      await actions.forgotPassword(form)
    } catch (error) {
      console.error(error)
      setSubmitting(false)
      setErrors(transformValidationApi(error))
    }
  },
  displayName: 'ForgotPasswordForm',
})

export default formik
