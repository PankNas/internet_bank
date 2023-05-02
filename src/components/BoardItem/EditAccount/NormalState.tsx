import React from 'react';
import cn from "classnames";

import styles from '../BoardItem.module.css';

type TypeNormalState = {
  title?: string,
  onClickEdit(): void,
}

const NormalState = (props: TypeNormalState): JSX.Element => (
  <>
    {props.title}
    <button
      className={cn(styles.button, styles.editButton)}
      onClick={props.onClickEdit}>
    </button>
  </>
)

export default NormalState;
