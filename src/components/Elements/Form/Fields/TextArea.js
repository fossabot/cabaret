import React from 'react';
import { FormGroup } from 'react-bootstrap';

const TextArea = (props) => {
  const isRequired = props.required
    ? <span className="control-label__required"><em>(Obrigatório)</em></span>
    : null;

  return (
    <FormGroup>
      <label htmlFor={props.name}>
        {props.label} {isRequired}
      </label>
      <textarea
        className="form-control"
        id={props.name}
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
        required={props.required}
      />
    </FormGroup>
  )
}

export default TextArea;
