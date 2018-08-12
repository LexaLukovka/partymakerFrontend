import { withFormik } from 'formik'
import * as Yup from 'yup'

const formik = withFormik({
  validationSchema: Yup.object()
    .shape({
      name: Yup.string()
        .required('Это поле является обязательным'),
      phone: Yup.string()
        .required('Это поле является обязательным'),
      email: Yup.string()
        .email('Неправильный email адрес!')
        .required('Это поле является обязательным'),
      password: Yup.string()
        .min(6, 'Пароль должен быть больше чем 6 символов')
        .required('Это поле является обязательным'),
    }),
  mapPropsToValues: () => ({
    name: '',
    email: '',
    phone: '',
    password: '',
    repeatPassword: '',
  }),

  handleSubmit: (form, { props, setSubmitting }) => {
    props.actions.auth.register(form)
    setSubmitting(false)
  },
  displayName: 'RegisterForm',
})

export default formik
