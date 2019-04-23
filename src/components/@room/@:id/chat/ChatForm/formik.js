import { withFormik } from 'formik'
import * as Yup from 'yup'
import to from 'util-to'
import transformValidationApi from 'src/utils/transformValidationApi'

const formik = withFormik({
  validationSchema: Yup.object()
    .shape({
      message: Yup.string().required('Это поле является обязательным'),
    }),

  mapPropsToValues: () => ({
    message: '',
  }),

  handleSubmit: async (form, { props, setErrors, setSubmitting }) => {

    setSubmitting(true)

    const [err] = await to(props.onSubmit(form))

    if (err) setErrors(transformValidationApi(err))

    setSubmitting(false)
  },
  displayName: 'ChatForm',
})

export default formik
