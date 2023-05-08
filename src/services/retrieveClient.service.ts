import Client from '../entities/client.entity';
import { IClientResponse } from '../interfaces/clients';
import { AppDataSource } from '../data-source';

const retrieveClientService = async (
  email: string
): Promise<IClientResponse> => {
  const clientRepository = AppDataSource.getRepository(Client);

  const client = await clientRepository.findOneBy({
    email: email,
  });
  return client;
};

export default retrieveClientService;
