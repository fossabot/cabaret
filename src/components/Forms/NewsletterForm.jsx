import React from 'react';
import FormField from '../Elements/FormField'
import Button from '../Elements/Button'

export const NewsletterForm = (props) => {
  return (
    <form {...props}>
      <FormField label={"Nome"} name={"name"} placeholder={"Nome"} />
      <FormField label={"E-mail"} name={"email"} placeholder={"@"} type={"email"} />
      <Button type={"submit"} block={true}>Cadastrar</Button>
    </form>
  );
};
