import { Request, Response } from 'express';
import createClientService from '../../services/clients/createClient.service';
import { IClientRequest } from '../../interfaces/clients/index';

const createClientController = async (req: Request, res: Response) => {
  const client: IClientRequest = req.body;
  const createdClient = await createClientService(client);
  return res.status(201).json(createdClient).send();
};

export default createClientController;
