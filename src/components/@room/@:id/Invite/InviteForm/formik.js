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

  mapPropsToValues: ({ room }) => ({
    headline: room?.invite?.headline || 'Приглашение',
    preposition: room?.invite?.preposition || 'на',
    title: room?.invite?.title || room.title || 'Вечеринку',
    address: room?.invite?.address || room.address || 'Вул. Червоногвардійська, 48/18',
    datetime: room?.invite?.datetime || room.datetime || '2017-05-24T10:30',
    background_url: room?.invite?.background_url || '/images/sparks.png'
  }),

  handleSubmit: async (form, { props, setErrors, setSubmitting }) => {

    setSubmitting(true)

    const [err] = await to(props.onSubmit(form))

    if (err) {
      setErrors(transformValidationApi(err))
      setSubmitting(false)
    }

    if (!err) {
      setErrors({ message: 'Приглашение обновлено!' })
      setTimeout(() => {
        setErrors({ message: '' })
        setSubmitting(false)
      }, 3000)
    }
  },
  displayName: 'LoginForm',
})

export default formik
