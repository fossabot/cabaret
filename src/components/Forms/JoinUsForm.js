import React from 'react';

import { Row, Col } from '../../components/Elements/Grid';
import Form from '../Elements/Form/Form';
import Input from '../Elements/Form/Fields/Input';
import TextArea from '../Elements/Form/Fields/TextArea';
import Select from '../Elements/Form/Fields/Select';
import Phone from '../Elements/Form/Fields/Phone';
import BirthDay from '../Elements/Form/Fields/BirthDay';
import Button from '../Elements/Button'

const categorias = [
  'Loiras',
  'Morenas',
  'Mulatas',
  'Ruivas',
  'Mestiças',
  'Orientais',
];

const hair = [
  'Loiros',
  'Ruivos',
  'Castanho claro',
  'Castanhos',
  'Castanho escuros',
  'Pretos',
];

const eyes = [
  'Azuis',
  'Castanhos',
  'Mel',
  'Verdes',
];

const cities = [
  'São Paulo',
  'Rio de Janeiro',
  'Porto Alegre',
  /* Nice to have
  'Florianópolis',
  'Belo Horizonte',
  'Brasília',
  'Curitiba',
  'Salvador',
  'Vitória',
  'Guarulhos',
  'Campinas',
  'São José dos Campos',
  'Sorocaba',
  'ABC Paulista',
  'Barueri',
  'Santos',
  */
];

  export const JoinForm = (props) => {
  return (
    <Form url="/" name="join-us">
      {/* Basic Info */}
      <Form.Legend>Informações Básicas</Form.Legend>

      <Input label={"Nome"} name={"name"} placeholder={"Digite seu nome"} required/>
      <Form.HelpBlock>Seu nome de trabalho</Form.HelpBlock>

      <BirthDay label={"Nascimento"} required />

      <Phone label={"Telefone 1"} name={"phone1"} placeholder={"(DDD) XXXXX-XXXX"} type={"tel"} required/>
      <Form.HelpBlock>Será divulgado no site</Form.HelpBlock>

      <Phone label={"Telefone 2"} name={"phone2"} placeholder={"Digite seu telefone"} type={"tel"}/>
      <Form.HelpBlock>Será divulgado no site</Form.HelpBlock>

      <Input label={"Email"} name={"email"} placeholder={"Digite seu email"} type={"email"} required/>
      <Form.HelpBlock>Este será utilizado para contato direto entre você e nossa equipe.</Form.HelpBlock>

      <TextArea label={"Descrição"} name={"description"} placeholder={'Descrição do seu perfil...'} required />
      <Form.HelpBlock>Informe tudo sobre seu perfil.</Form.HelpBlock>

      {/* Vitals */}
      <Row>
        <Col md={12}>
          <Form.Legend>Caracteristicas Físicas</Form.Legend>
        </Col>
        <Col md={4}>
          <Input label={"Altura"} name={"height"} placeholder="170" type={"tel"} required />
        </Col>
        <Col md={4}>
          <Input label={"Peso"} name={"weight"} placeholder="58" type={"tel"} required />
        </Col>
        <Col md={4}>
          <Input label={"Pés"} name={"feet"} placeholder="36" type={"tel"} />
        </Col>

        <Col md={4}>
          <Input label={"Busto (cm)"} name={"bust"} placeholder="92" type={"tel"} />
        </Col>
        <Col md={4}>
          <Input label={"Cintura (cm)"} name={"waist"} placeholder="63" type={"tel"} />
        </Col>
        <Col md={4}>
          <Input label={"Quadril (cm)"} name={"hips"} placeholder="88" type={"tel"} />
        </Col>
      </Row>

      {/* Location */}
      <Form.Legend>Localização</Form.Legend>

      <Select label={"Cidade"} name={"city"} options={cities} placeholder={'Selecione'} required />

      <Input label={"Endereço Aproximado"} name={"address"} placeholder={"Av. Paulista, 0"} />
      <Form.HelpBlock>Será utilizado para as buscas por região no site.</Form.HelpBlock>

      <Input label={"Regiões"} name={"regions"} placeholder={"Jardins, Moema, Itaim Bibi, ..."} />

      <Select label={"Categoria"} name={"category"} options={categorias} placeholder={'Selecione'} required />
      <Form.HelpBlock>Ajude-nos a identificar qual dessas categorias você deve ser incluída.</Form.HelpBlock>

      {/* Redes Sociais */}
      <Form.Legend>Redes Sociais (Opcional)</Form.Legend>

      <Input label={"Facebook"} name={"facebook"} />
      <Input label={"Instagram"} name={"instagram"} />
      <Input label={"Twitter"} name={"twitter"} />
      <Input label={"Site/Blog"} name={"website"} />

      {/* Atendimento */}
      {/* Beija, Oral, Finaliza, Anal, Dominação, Inversão, Amigas, Eventos, Viagens */}

      {/* Quem atende */}
      {/* Eles, Elas, Casais, Grupos */}

      {/* Locais que atende */}
      {/* Motéis, Hotéis, Local próprio */}

      {/* Quando Atende */}
      {/* Atende 24h, Dias da semana, Horario Inicio/Final (1-25) */}

      {/* Pagamento */}
      {/* Cachê, Dinheiro, Débito, Crédito */}
      {/* À combinar, 150, 200, 250, 300, 350, 400, 450, 500, Mais que 500 */}

      <Button type="submit" block>Enviar</Button>
    </Form>
  );
};
