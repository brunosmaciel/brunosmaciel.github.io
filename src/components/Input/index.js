/* eslint-disable react/no-array-index-key */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import axios from '../../services/axios';

import { InputText } from './styled';

export default class Input extends Component {
  state = {
    cep: {},
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleChange = async (e) => {
    if (e.target.value.length !== 8) {
      this.setState({
        cep: { erro: 'Cep Inexistente' },
      });
      return;
    }

    try {
      await axios(`/${e.target.value}/json`).then((obj) =>
        this.setState({
          cep: { ...obj.data },
        })
      );
    } catch (error) {
      this.setState({
        cep: error,
      });
    }
  };

  render() {
    const { cep } = this.state;
    return (
      <div>
        <form action="/" onSubmit={this.handleSubmit}>
          <InputText type="text" onChange={this.handleChange} maxLength="8" />
        </form>
        {Object.values(cep).map((obj, i) => {
          return <li key={i}>{obj}</li>;
        })}
      </div>
    );
  }
}
