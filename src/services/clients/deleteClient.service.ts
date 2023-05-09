import Client from '../../entities/client.entity';
import { AppDataSource } from '../../data-source';
import { AppError } from '../../errors/appError';

const deleteClientService = async (id: string): Promise<void> => {
  const clientRepository = AppDataSource.getRepository(Client);

  const client = await clientRepository.findOneBy({ id: id });

  if (!client) {
    throw new AppError('User not found', 404);
  }
};

export default deleteClientService;
