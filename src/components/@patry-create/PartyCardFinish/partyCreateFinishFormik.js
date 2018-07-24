import { withFormik } from 'formik'
import * as Yup from 'yup'
import clean from 'lodash-clean'

const partyCreateFinishFormik = withFormik({
  validationSchema: Yup.object().shape({
    pictures: Yup.array(),
  }),

  mapPropsToValues: () => ({
    pictures: [],
    telegram_url: 'http://partymaker.ua/11111',
  }),

  handleSubmit: (values, { props, setSubmitting }) => {
    let form = {
      checked: props.party.checkedPrivate,
      primary_picture: values.pictures[0],
      pictures: values.pictures,
      telegram_url: values.telegram_url,
    }

    form = clean(form)

    props.actions.party.partyCardFinish(form)
    props.actions.party.createPartyCard()
    setSubmitting(false)
  },
  displayName: 'PartyCreate',
})

export default partyCreateFinishFormik
