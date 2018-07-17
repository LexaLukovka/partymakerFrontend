export const STEPPER_NAVIGATION_NEXT = 'STEPPER_NAVIGATION_NEXT'
export const STEPPER_NAVIGATION_BACK = 'STEPPER_NAVIGATION_BACK'

export const stepperNavigationNext = activeStep => ({
  type: STEPPER_NAVIGATION_NEXT,
  payload: activeStep,
})

export const stepperNavigationBack = activeStep => ({
  type: STEPPER_NAVIGATION_BACK,
  payload: activeStep,
})
