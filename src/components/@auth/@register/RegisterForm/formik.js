import { withFormik } from 'formik'
import * as Yup from 'yup'
import transformValidationApi from 'utils/transformValidationApi'

const formik = withFormik({
  validationSchema: Yup.object()
    .shape({
      name: Yup.string().required('Это поле является обязательным'),
      phone: Yup.string().required('Это поле является обязательным'),
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

  handleSubmit: (form, { props: { actions, history }, setErrors, setSubmitting }) => {
    actions.auth.register(form)
      .then(() => {
        setSubmitting(false)
        history.push('/')
      })
      .catch(errors => {
        setSubmitting(false)
        setErrors(transformValidationApi(errors))
      })
  },
  displayName: 'RegisterForm',
})

export default formik
