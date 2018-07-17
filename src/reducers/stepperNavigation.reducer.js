import { STEPPER_NAVIGATION_NEXT, STEPPER_NAVIGATION_BACK } from '../actions/stepperNavigation.action'

const initialState = {
  activeStep: 0,
}

const stepperNavigation = (state = initialState, { type, payload }) => {
  switch (type) {
    case STEPPER_NAVIGATION_NEXT: {
      return {
        ...state,
        activeStep: payload + 1,
      }
    }
    case STEPPER_NAVIGATION_BACK: {
      return {
        ...state,
        activeStep: payload - 1,
      }
    }

    default:
      return state
  }
}

export default stepperNavigation
