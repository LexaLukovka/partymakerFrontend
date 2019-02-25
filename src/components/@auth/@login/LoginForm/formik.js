import { withFormik } from 'formik'
import * as Yup from 'yup'

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

  handleSubmit: async (form, { props: { actions, auth, user, history }, setErrors, setSubmitting }) => {
    try {
      await actions.login(form)
    } catch (error) {
      console.error(error)
      setSubmitting(false)
    }
  },
  displayName: 'LoginForm',
})

export default formik
