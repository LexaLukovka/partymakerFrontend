import { withFormik } from 'formik'
import * as Yup from 'yup'
import transformValidationApi from 'src/utils/transformValidationApi'

const formik = withFormik({
  validationSchema: Yup.object()
    .shape({
      email: Yup.string()
        .email('Неправильный email адрес!')
        .required('Это поле является обязательным'),
      password: Yup.string()
        .min(6, 'Пароль должен быть больше чем 6 символов')
        .required('Это поле является обязательным'),
    }),
  mapPropsToValues: () => ({
    email: '',
    password: '',
  }),

  handleSubmit: async (form, { props: { actions, history }, setErrors, setSubmitting }) => {
    try {
      await actions.auth.login(form)
    } catch (error) {
      console.error(error)
      setSubmitting(false)
      setErrors(transformValidationApi(error))
    }
  },
  displayName: 'RegisterForm',
})

export default formik
