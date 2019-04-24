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
              .min(8, 'Пароль должен быть не менее 8 символов')
              .required('Введите пароль'),
      ),
      password_repeat: Yup.string()
        .oneOf(
          [Yup.ref('password')],
          'Пароли не совпадают',
        ),
    }),
  mapPropsToValues: () => ({
    password: '',
    password_repeat: '',
  }),

  handleSubmit: async (form, { props: { onSubmit }, setErrors, setSubmitting }) => {
    const [err] = await to(onSubmit(form))
    setErrors(transformValidationApi(err))
    setSubmitting(false)
  },
  displayName: 'ResetForm',
})

export default formik
