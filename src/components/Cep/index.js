/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
import React from 'react';
import { Section, H1, H2 } from './styled';

export default function CEP(props) {
  const { cep } = props;

  if (Object.keys(cep).length === 1 || Object.keys(cep).length === 0) {
    return (
      <Section>
        <H1>{cep.erro}</H1>
      </Section>
    );
  }
  return (
    <Section>
      <H2>
        {cep.logradouro}, {cep.bairro}, {cep.cep} {cep.localidade} - {cep.uf}
      </H2>
    </Section>
  );
}
