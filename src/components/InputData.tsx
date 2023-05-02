import React from 'react';
import styles from "./NewAccountForm/NewAccountForm.module.css";

type InputDataType = {
    text: string,
    name: string,
    value: string,
    OnChange(event: any):void,
}

const InputData = (props: InputDataType):JSX.Element => (
    <label>
        <input
            className={[styles.input, styles.validThruFieldset].join(' ')}
            placeholder={props.text}
            name={props.name}
            value={props.value}
            onChange={props.OnChange}
            maxLength={2}
            pattern="[0-9][0-9]"
            required
        />
    </label>
)

export default InputData;
