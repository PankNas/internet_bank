import React from 'react';
import cn from "classnames";

import styles from './Button.module.css';

type ButtonType = {
    children?: string,
    onClick?(event: any):void,
    className?: string,
    type?: 'button' | 'reset' | 'submit',
}

const Button = (props:ButtonType):JSX.Element => (
    <button
        className={cn(styles.button, props.className)}
        onClick={props.onClick}
        type={props.type}
    >{props.children}</button>
);

export default Button;
