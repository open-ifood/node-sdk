import Account from '../types/account';
import { DefaultResponse } from './ifoodapi';

export interface DefaultAuthRequest {
  access_token: string;
}

export interface getMerchantMenuRequest extends DefaultAuthRequest {
  merchant_id: string;
}

export interface getMerchantMenuResponse extends DefaultResponse {
  menu?: Array<any>;
}

export interface getCustomerInformationResponse extends DefaultResponse {
  account: Account;
  tags: Array<any>;
}