import { withFormik } from 'formik'
import * as Yup from 'yup'

const formik = withFormik({
  validationSchema: Yup.object()
    .shape({
      oldPassword: Yup.string()
        .min(6, 'Пароль должен быть больше чем 6 символов')
        .required('Это поле является обязательным'),
      password: Yup.string()
        .min(6, 'Пароль должен быть больше чем 6 символов')
        .required('Это поле является обязательным'),
      repeatPassword: Yup.string()
        .min(6, 'Пароль должен быть больше чем 6 символов')
        .required('Это поле является обязательным'),

    }),

  mapPropsToValues: () => ({
    oldPassword: '',
    password: '',
    repeatPassword: '',
  }),

  handleSubmit: (form, { props, setSubmitting }) => {
    if (form.password === form.repeatPassword) {
      props.actions.settings.change(form)

      setSubmitting(false)
    }
  },
})

export default formik
