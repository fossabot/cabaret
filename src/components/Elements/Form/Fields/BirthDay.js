import React from 'react';
import { FormGroup } from 'react-bootstrap';
import MaskedInput from 'react-text-mask'

const BirthDay = (props) => {
  const isRequired = props.required
    ? <span className="control-label__required"><em>(Obrigatório)</em></span>
    : null;

  return (
    <FormGroup>
      <label htmlFor={props.name}>
        {props.label} {isRequired}
      </label>
      <MaskedInput
        required={props.required}
        className="form-control"
        placeholder="01/01/1980"
        guide={false}
        mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
      />
    </FormGroup>
  )
}

export default BirthDay;
