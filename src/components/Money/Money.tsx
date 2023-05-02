import React from 'react';
import {CurrencyEnum} from "../../types";

type MoneyType = {
    value?: number,
    currency?: CurrencyEnum,
}

enum masksEnum {
    RUB = '₽',
    EUR = '€',
    GBP = '£',
    USD = '$'
}

const Money = (props: MoneyType): JSX.Element => {
    const [integer, fractional]: string[] = `${props.value}`.split('.');

    return (
        <span>
            <span>{integer}</span>
            {fractional && <span>,{fractional}</span>}
            {props.currency && <span>{masksEnum[props.currency]}</span>}
        </span>
    );
};

export default Money;
