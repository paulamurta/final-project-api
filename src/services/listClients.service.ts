import Client from '../entities/client.entity';
import { IClientResponse } from '../interfaces/clients';
import { AppDataSource } from '../data-source';

const listClientsService = async (): Promise<IClientResponse[]> => {
  const clientRepository = AppDataSource.getRepository(Client);
  const clients: Client[] = await clientRepository.find();
  return clients;
};

export default listClientsService;
