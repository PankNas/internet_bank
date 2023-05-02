export enum AccountTypeEnum {
    DEBIT = 'debit',
    CREDIT = 'credit',
    EXTERNAL = 'external',
    SAVING = 'saving',
    LOAN = 'loan',
}

export enum CurrencyEnum {
    RUB = 'RUB',
    USD = 'USD',
    EUR = 'EUR',
    GBP = 'GBP',
}

export type AccountType = (
    DebitAccount |
    CreditAccount |
    SavingAccount |
    LoanAccount |
    ExternalAccount
    ) & {
    id?: number,
    title?: string,
    customTitle?: string,
    currency?: CurrencyEnum,
    amount?: number,
}

export type TimelineItemType = {
  id?: number
  title: string,
  date: number,
  amount: number,
  currency: CurrencyEnum,
}

type DebitAccount = {
    type?: AccountTypeEnum.DEBIT,
}

type CreditAccount = {
    type?: AccountTypeEnum.CREDIT,
}

type SavingAccount = {
    type?: AccountTypeEnum.SAVING,
}

type LoanAccount = {
    type?: AccountTypeEnum.LOAN,
}

type ExternalAccount = {
    type?: AccountTypeEnum.EXTERNAL,
}
