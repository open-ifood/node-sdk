import {
  failResponse,
  successSimpleResponse,
} from './../../middleware/handle-status-reponse';
import { Request, Response } from 'express';
import * as IFoodSDK from '@open-ifood/sdk';

export default async (req: Request, res: Response) => {
  const { id, tags } = req.params;

  if (!id) {
    return failResponse(res, {
      message: 'O  id do comerciante deve ser informado',
    });
  }

  const {
    paymentMethods,
    success,
    message,
  } = await IFoodSDK.getMerchantPaymentMethods({
    merchantID: id,
    tags,
  });

  return success
    ? successSimpleResponse(res, paymentMethods)
    : failResponse(res, {
        message:
          message ||
          'Ocorreu um problema ao buscar informações sobre as formas de pagamento na API',
      });
};
