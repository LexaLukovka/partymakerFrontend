import { withFormik } from 'formik'
import * as Yup from 'yup'
import to from 'util-to'
import transformValidationApi from 'src/utils/transformValidationApi'

const formik = withFormik({
  validationSchema: Yup.object()
    .shape({
      text: Yup.string().required('Это поле является обязательным'),
    }),

  mapPropsToValues: () => ({
    text: '',
  }),

  handleSubmit: async (form, { props, setErrors, setSubmitting, setFieldValue }) => {

    setSubmitting(true)

    const [err, response] = await to(props.onSubmit(form))

    if (err) setErrors(transformValidationApi(err))

    if (response) {
      setFieldValue('text', '')
    }

    setSubmitting(false)
  },
  displayName: 'ChatForm',
})

export default formik
