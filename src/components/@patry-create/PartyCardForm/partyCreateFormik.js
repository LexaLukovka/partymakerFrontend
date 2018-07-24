import { withFormik } from 'formik'
import * as Yup from 'yup'
import clean from 'lodash-clean'

const partyCreateFormik = withFormik({
  validationSchema: Yup.object().shape({
    district: Yup.string().required('Это поле является обязательным'),
    address: Yup.object().required('Это поле является обязательным'),
    time: Yup.string(),
    after: Yup.number(),
    before: Yup.number(),
    description: Yup.string(),
  }),

  mapPropsToValues: () => ({
    title: '',
    district: '',
    address: '',
    time: '',
    after: '',
    before: '',
    description: '',
  }),

  handleSubmit: (values, { props, setSubmitting }) => {
    let form = {
      title: values.title,
      district: values.district,
      from: {
        address: values.address.formatted_address,
        lat: values.address.geometry.location.lat(),
        lng: values.address.geometry.location.lng(),
        placeId: values.address.place_id,
      },
      time: values.time,
      after: values.after,
      before: values.before,
      description: values.description,
    }

    form = clean(form)

    props.actions.party.partyCardForm(form)
    props.actions.stepper.stepperNavigationNext(props.activeStep)
    setSubmitting(false)
  },
  displayName: 'PartyCreate',
})

export default partyCreateFormik
