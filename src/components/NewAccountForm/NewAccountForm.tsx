import React from 'react';
import MaskedInput from 'react-maskedinput';

import Button from '../Button/Button';

import styles from './NewAccountForm.module.css';

import InputData from "../InputData";
import {AccountType, AccountTypeEnum} from "../../types";
import {isValidDate} from "../../utils/validators";

type PropsNewAccount = {
  handleSubmit(value: AccountType): void,
}

type StateNewAccount = {
  cardNumber: string,
  month: string,
  year: string,
}

export default class NewAccountForm extends React.Component<PropsNewAccount, StateNewAccount> {
  constructor(props: PropsNewAccount) {
    super(props);

    this.state = {
      cardNumber: '',
      month: '',
      year: '',
    };
  }

  handleSubmit = (event: any): void => {
    event.preventDefault();

    const checkParams: boolean = !Object.values(this.state).includes('');

    if (checkParams && isValidDate(+this.state.month, +this.state.year)) {
      this.props?.handleSubmit({
        id: Date.now(),
        type: AccountTypeEnum.EXTERNAL,
        title: `Привязанная карта *${this.state.cardNumber.slice(-4)}`,
      });
    } else alert('Данные карты некорректны');

    this.setState({
      cardNumber: '',
      month: '',
      year: '',
    });
  };

  handleInputChange = (event: any): void => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  };

  render(): JSX.Element {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Привязка банковской карты</h2>
        <div className={styles.cardForm}>
          <MaskedInput
            mask="1111 1111 1111 1111"
            pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}"
            name="cardNumber"
            value={this.state.cardNumber}
            onChange={this.handleInputChange}
            placeholder="Номер карты"
            className={styles.input}
            required
          />
          <div className={styles.inputDate}>
            <p className={styles.label}>VALID THRU</p>
            <InputData text="MM" name="month" value={this.state.month} OnChange={this.handleInputChange}/>
            <span className={styles.slash}>/</span>
            <InputData text="YY" name="year" value={this.state.year} OnChange={this.handleInputChange}/>
          </div>
          <Button type="submit">Привязать</Button>
        </div>
      </form>
    );
  }
}
