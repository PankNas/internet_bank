import accounts from '../mocks/accountsMock.json';
import operations from '../mocks/operationsMock.json';
import {AccountType, TimelineItemType} from "../types";

const promiseResponse = (data:any):Promise<any> =>
	new Promise(resolve => {
		setTimeout(() => {
			resolve(data);
		}, 500);
	});

export const getAccounts = ():Promise<AccountType[]> => promiseResponse(accounts);

export const getOperations = (accountId:string):Promise<TimelineItemType[]> => {
	const accountOperations:TimelineItemType[] = operations[accountId] || [];

	return promiseResponse(accountOperations);
};
