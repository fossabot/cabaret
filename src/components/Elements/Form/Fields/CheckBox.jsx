import React from 'react';
import { FormGroup } from 'react-bootstrap';

const CheckBox = (props) => {
  const isRequired = props.required
    ? <span className="control-label__required"><em>(Obrigatório)</em></span>
    : null;

  return (<div>
    <FormGroup className="checkbox-group">
      <label htmlFor={props.name}>
        {props.label} {isRequired}
      </label>
      {props.options.map(option => {
        return (
          <label key={option}>
            <input
              className="form-checkbox"
              id={props.name}
              name={props.name}
              onChange={props.handleChange}
              value={option}
              checked={props.selectedOptions.indexOf(option) > -1}
              type="checkbox" /> {option}
          </label>
        );
      })}
    </FormGroup>
  </div>
  );

}
