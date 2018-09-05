import { withFormik } from 'formik'
import * as Yup from 'yup'
import transformValidationApi from 'utils/transformValidationApi'

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

  handleSubmit: (values, { props: { history, actions }, setErrors, setSubmitting }) => {
    actions.auth.login(values)
      .then(() => history.push('/'))
      .catch(errors => setErrors(transformValidationApi(errors)))
      .finally(() => setSubmitting(false))
  },
  displayName: 'LoginForm',
})

export default formik
