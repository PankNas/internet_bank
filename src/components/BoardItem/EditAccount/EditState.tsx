import React, {useState} from 'react';
import cn from "classnames";

import styles from '../BoardItem.module.css';

type TypeEditState = {
  onClickCheck(title: string): void,
}

const EditState = (props: TypeEditState): JSX.Element => {
  const [name, setName] = useState('');

  const onChangeInput = (event):void => setName(event.target.value);
  const handleSubmit = ():void => {
    if (!name) return alert('Заполните название карты!')

    props.onClickCheck(name);
  };

  return (
    <>
      <label>
        <input
          type='text'
          name='title'
          value={name}
          onChange={onChangeInput}
          required
        />
      </label>
      <button
        className={cn(styles.button, styles.checkButton)}
        type='submit'
        onClick={handleSubmit}
      />
    </>
  )
}

export default EditState;
