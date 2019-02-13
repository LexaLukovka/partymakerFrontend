import { withFormik } from 'formik'
import * as Yup from 'yup'

const formik = withFormik({
  validationSchema: Yup.object()
    .shape({
      name: Yup.string().required('Это поле является обязательным'),
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
    password: '',
  }),

  handleSubmit: (form) => {
    console.log(form)
  },
  displayName: 'RegisterForm',
})

export default formik
