import { withFormik } from 'formik'
import * as Yup from 'yup'
import to from 'util-to'
import transformValidationApi from 'src/utils/transformValidationApi'

const formik = withFormik({
  validationSchema: Yup.object()
    .shape({}),

  mapPropsToValues: () => ({
    text: '',
    asset_id: null,
  }),

  handleSubmit: async (form, { props, setErrors, setSubmitting, setFieldValue }) => {

    if (!form.text && !form.asset_id) return

    setSubmitting(true)

    const [err, response] = await to(props.onSubmit(form))

    if (err) setErrors(transformValidationApi(err))

    if (response) {
      setFieldValue('text', '')
      setFieldValue('asset_id', null)
    }

    setSubmitting(false)
  },
  displayName: 'ChatForm',
})

export default formik
