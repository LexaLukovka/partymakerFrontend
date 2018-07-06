/* eslint-disable no-prototype-builtins */
import React from 'react'
import PropTypes from 'prop-types'
import formItems from './formItems'
import FormItem from './FormItem'
import connector from '../connector'

const decorator = params => Input => React.cloneElement(Input, params)

const FormItems = ({ required, selected, actions, form, hasError, showHelperError }) =>
  selected.map((name, index) => {
    if (!formItems.hasOwnProperty(name)) {
      throw new Error('form item was not found')
    }

    const {
      values,
      handleChange,
      handleBlur,
      setFieldValue,
      setFieldTouched,
    } = form

    const { component, label } = formItems[name]

    let Input = decorator({
      value: values[name],
      onChange: handleChange,
      onBlur: handleBlur,
      error: hasError(name),
      helperText: showHelperError(name),
    })(component)

    if (name === 'from' || name === 'to') {
      Input = decorator({
        value: values[name],
        error: hasError(name),
        onChange: (...e) => {
          actions.cargoForm.updateMap(...e)
          setFieldValue(...e)
        },
        onBlur: setFieldTouched,
        helperText: showHelperError(name),
      })(component)
    }

    if (name === 'pictures') {
      Input = decorator({
        value: values[name],
        error: hasError(name),
        onChange: setFieldValue,
        onBlur: setFieldTouched,
        helperText: showHelperError(name),
      })(component)
    }

    return (
      <FormItem
        isRequired={!!required[index]}
        onClose={() => actions.cargoForm.remove(name)}
        key={index}
        title={label}
      >
        {Input}
      </FormItem>
    )
  })

FormItems.propTypes = {
  actions: PropTypes.object.isRequired,
  selected: PropTypes.array.isRequired,
  required: PropTypes.array.isRequired,
  form: PropTypes.object.isRequired,

}

export default connector(FormItems)
