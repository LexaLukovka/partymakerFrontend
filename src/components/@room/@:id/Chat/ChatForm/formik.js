import { withFormik } from 'formik'
import * as Yup from 'yup'
import to from 'util-to'
import transformValidationApi from 'src/utils/transformValidationApi'
import uniqId from 'uniqid'

const initialValues = ({ auth }) => ({
  text: '',
  asset_id: null,
  place_id: null,
  token: `temp-${uniqId()}`,
  user_id: auth.user_id,
})

const formik = withFormik({
  validationSchema: Yup.object().shape({}),

  mapPropsToValues: initialValues,

  handleSubmit: async (form, { props, setErrors, setSubmitting, resetForm }) => {
    if (!form.text && !form.asset_id && !form.place_id) return
    setSubmitting(true)
    resetForm(initialValues(props))
    const [err] = await to(props.onSubmit(form))
    if (err) setErrors(transformValidationApi(err))

    setSubmitting(false)
  },
  displayName: 'ChatForm',
})

export default formik
