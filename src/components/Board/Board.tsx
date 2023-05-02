import React from 'react';

import BoardItem from '../BoardItem/BoardItem';

import {AccountType, AccountTypeEnum, CurrencyEnum} from "../../types";

import styles from './Board.module.css';
import {NavLink} from "react-router-dom";

type BoardType = {
  accounts: AccountType[],
};

const Board = ({accounts}: BoardType): JSX.Element => (
  <nav className={styles.board}>
    {
      sortAccounts(accounts.slice()).map((ac: AccountType): JSX.Element =>
        <NavLink
          key={ac.id}
          to={`/account/${ac.id}`}
          className={({isActive}) => isActive ? styles.activeItem : styles.link}
        >
          <BoardItem {...ac} />
        </NavLink>
      )
    }
    <NavLink
      key={-1}
      to='/actions/add_card'
      className={({isActive}) => isActive ? styles.activeItem : styles.link}
    >
      <p className={styles.item}>Привязать карту</p>
    </NavLink>
  </nav>
);

function sortAccounts(accounts: AccountType[]): AccountType[] {
  const getIndexesCompare = (item: AccountType): number[] => [
    Object.values(AccountTypeEnum).indexOf(item.type as AccountTypeEnum),
    Object.values(CurrencyEnum).indexOf(item?.currency as CurrencyEnum)
  ];

  const compareArr = (a: number[], b: number[]): number => {
    for (let i = 0; i < a.length && i < b.length; i++) {
      if (a[i] === b[i]) continue;

      return a[i] > b[i] ? 1 : -1;
    }

    return 0;
  };

  return accounts.sort((a: AccountType, b: AccountType): number =>
    compareArr(getIndexesCompare(a), getIndexesCompare(b)));
}

export default Board;
