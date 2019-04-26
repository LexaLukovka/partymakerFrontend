import { withFormik } from 'formik'
import * as Yup from 'yup'
import to from 'util-to'
import transformValidationApi from 'src/utils/transformValidationApi'

const formik = withFormik({
  validationSchema: Yup.object()
    .shape({
      headline: Yup.string().required('Это поле является обязательным'),
      preposition: Yup.string().required('Это поле является обязательным'),
      title: Yup.string().required('Это поле является обязательным'),
      address: Yup.string(),
      datetime: Yup.string(),
      background_url: Yup.string()
    }),

  mapPropsToValues: ({ invite, title, address, datetime }) => ({
    headline: invite?.headline || 'Пришлашение',
    preposition: invite?.preposition || 'на',
    title: invite?.title || title || 'Вечеринку',
    address: invite?.address || address || 'Вул. Червоногвардійська, 48/18',
    datetime: invite?.datetime || datetime || '12 мая - 12:00',
    background_url: invite?.background_url
  }),

  handleSubmit: async (form, { props, setErrors, setSubmitting }) => {

    setSubmitting(true)

    const [err] = await to(props.onSubmit(form))

    if (err) setErrors(transformValidationApi(err))

    setSubmitting(false)
  },
  displayName: 'LoginForm',
})

export default formik
