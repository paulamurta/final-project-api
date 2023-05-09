import { Request, Response } from 'express';
import deleteClientService from '../../services/clients/deleteClient.service';

const deleteClientController = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const createdClient = await deleteClientService(id);
  return res.status(204).json(createdClient).send();
};

export default deleteClientController;
