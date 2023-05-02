import React from 'react';
import cn from 'classnames';

import Money from "../Money/Money";

import styles from './BoardItem.module.css';
import {AccountType, AccountTypeEnum, CurrencyEnum} from "../../types";
import EditAccount from "./EditAccount/EditAccount";

const BoardItem = (props: AccountType): JSX.Element => (
  <div className={styles.item}>
    <div className={cn(styles.logo, styles[`logo_${props.type}`])}/>
    <div className={styles.title}>
      <EditAccount
        id={props.id}
        type={props.type}
        title={props.customTitle ?? props.title}
      />
      <br/>
      {props.type !== AccountTypeEnum.EXTERNAL &&
        <Money value={props.amount} currency={props.currency as CurrencyEnum}></Money>
      }
    </div>
  </div>
);

export default BoardItem;
