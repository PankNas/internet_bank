import React from "react";
import {TimelineItemType} from "../../types";

import styles from './TimelineItem.module.css'
import Money from "../Money/Money";

const getDate = (ms: number): string => {
  const addZero = (num: number): string => ('0' + num).slice(-2);

  const date: Date = new Date(ms);

  return `${addZero(date.getDate())}.${addZero(date.getMonth() + 1)}.${date.getFullYear()}`;
}

const TimelineItem = (props: TimelineItemType): JSX.Element => (
  <div className={styles.item}>
      <span>
        <h3 className={styles.title}>{props.title}</h3>
        <p className={styles.date}>{getDate(props.date)}</p>
      </span>
    <Money value={props.amount} currency={props.currency}/>
  </div>
);

export default TimelineItem;
