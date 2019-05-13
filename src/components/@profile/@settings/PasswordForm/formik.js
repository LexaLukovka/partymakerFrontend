import { withFormik } from 'formik'
import * as Yup from 'yup'
import to from 'util-to'
import transformValidationApi from 'src/utils/transformValidationApi'

const formik = withFormik({
  validationSchema: Yup.object()
    .shape({
      password: Yup.lazy(
        value =>
          !value
            ? Yup.string()
            : Yup.string()
              .min(6, 'Пароль должен быть больше чем 6 символов')
              .required('Это поле является обязательным'),
      ),
      password_new: Yup.string()
        .min(6, 'Пароль должен быть больше чем 6 символов')
        .required('Это поле является обязательным'),
      password_repeat: Yup.string().oneOf(
        [Yup.ref('password')],
        'Пароли не совпадают',
      ),
    }),

  mapPropsToValues: () => ({
    password: '',
    password_new: '',
    password_repeat: '',
  }),

  handleSubmit: async (form, { props, setErrors, setSubmitting }) => {

    setSubmitting(true)

    const [err] = await to(props.onSubmit(form))

    if (err) setErrors(transformValidationApi(err))

    setSubmitting(false)
  },
  displayName: 'PasswordForm',
})

export default formik
