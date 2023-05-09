import { AppDataSource } from '../../data-source';
import Client from '../../entities/client.entity';
import { IClientResponse } from '../../interfaces/clients';

const retrieveClientService = async (
  email: string
): Promise<IClientResponse> => {
  const clientRepository = AppDataSource.getRepository(Client);

  const client = await clientRepository.findOneBy({ email: email });

  return client!;
};

export default retrieveClientService;
