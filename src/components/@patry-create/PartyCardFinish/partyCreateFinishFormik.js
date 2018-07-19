import { withFormik } from 'formik'
import * as Yup from 'yup'
import clean from 'lodash-clean'

const partyCreateFinishFormik = withFormik({
  validationSchema: Yup.object().shape({}),
  mapPropsToValues: () => ({
    pictures: [],
    checked: true,
  }),

  handleSubmit: (values, { props, setSubmitting }) => {
    let form = {
      checked: values.checked,
      primary_picture: values.pictures[0],
      pictures: values.pictures,
    }

    form = clean(form)

    props.actions.party.partyCardFinish(form)
    props.actions.party.createPartyCard()
    setSubmitting(false)
  },
  displayName: 'PartyCreate',
})

export default partyCreateFinishFormik
