import { withFormik } from 'formik'
import * as Yup from 'yup'
import clean from 'lodash-clean'

const partyCreateFinishFormik = withFormik({
  validationSchema: Yup.object().shape({
    pictures: Yup.array(),
  }),

  mapPropsToValues: () => ({
    pictures: [],
    telegramUrl: 'http://partymaker.ua/11111',
  }),

  handleSubmit: (values, { props, setSubmitting }) => {
    let form = {
      privateParty: props.party.checkedPrivate,
      pictures: values.pictures,
      telegramUrl: values.telegramUrl,
    }

    form = clean(form)

    props.actions.party.partyCardFinish(form)
    props.actions.party.createPartyCard()
    setSubmitting(false)
  },
  displayName: 'PartyCreate',
})

export default partyCreateFinishFormik
