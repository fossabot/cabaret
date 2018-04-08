import React from 'react';
import { FormGroup } from 'react-bootstrap';

const Select = (props) => {
  const isRequired = props.required
    ? <span className="control-label__required"><em>(Obrigatório)</em></span>
    : null;

  return (
    <FormGroup>
      <label htmlFor={props.name}>
        {props.label} {isRequired}
      </label>
      <select
        className="form-control"
        name={props.name}
        value={props.value}
        onChange={props.handleChange}
      >
        {props.placeholder &&
          <option disabled selected value>{props.placeholder}</option>}

        {props.options && props.options.map(option => {
          const {id = null, value = null, label = null} = option;
          return (
            <option
              key={id || option}
              value={value || option}
              label={label || option}>{label || option}
            </option>
          );
        })}
      </select>
    </FormGroup>)
}

export default Select;
