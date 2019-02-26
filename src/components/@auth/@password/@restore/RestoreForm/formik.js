import { withFormik } from 'formik'
import * as Yup from 'yup'
import transformValidationApi from 'src/utils/transformValidationApi'

const formik = withFormik({
  validationSchema: Yup.object()
    .shape({
      newPassword: Yup.string()
        .min(6, 'Пароль должен быть больше чем 6 символов')
        .required('Это поле является обязательным'),
      repeatPassword: Yup.string()
        .min(6, 'Пароль должен быть больше чем 6 символов')
        .required('Это поле является обязательным'),
    }),
  mapPropsToValues: () => ({
    newPassword: '',
    repeatPassword: '',
  }),

  handleSubmit: async (form, { props: { actions, hash }, setErrors, setSubmitting }) => {
    try {
      if (form.newPassword === form.repeatPassword) {
        await actions.restorePassword({ hash, form })
      } else {
        setSubmitting(false)
        setErrors({ repeatPassword: 'Пароли не совпадают' })
      }
    } catch (error) {
      console.error(error)
      setSubmitting(false)
      setErrors(transformValidationApi(error))
    }
  },
  displayName: 'RestorePasswordForm',
})

export default formik
