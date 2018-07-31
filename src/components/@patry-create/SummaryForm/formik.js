import { withFormik } from 'formik'
import * as Yup from 'yup'

const formik = withFormik({
  validationSchema: Yup.object().shape({
    pictures: Yup.array(),
    telegramUrl: Yup.string(),
  }),

  mapPropsToValues: () => ({
    pictures: [],
    telegramUrl: 'http://partymaker.ua/11111',
  }),

  handleSubmit: (values, { props, setSubmitting }) => {
    const form = {
      privateParty: props.party.checkedPrivate,
      pictures: values.pictures,
      telegramUrl: values.telegramUrl,
    }

    props.actions.party.partyCardFinish(form)
    props.actions.party.createPartyCard()
    setSubmitting(false)
  },
  displayName: 'PartyCreate',
})

export default formik
