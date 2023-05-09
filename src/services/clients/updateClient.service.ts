import { AppDataSource } from '../../data-source';
import Client from '../../entities/client.entity';
import {
  IClientRequest,
  IClientResponse,
} from '../../interfaces/clients/index';
import { AppError } from '../../errors/appError';

const updateClientService = async (
  { name, email, phone }: IClientRequest,
  id: string
): Promise<IClientResponse> => {
  if (!name && !email && !phone) {
    throw new AppError('Missing information', 401);
  }

  const clientRepository = AppDataSource.getRepository(Client);

  const client = await clientRepository.findOneBy({ email: email });

  if (!client) {
    throw new AppError('User not found', 404);
  }

  await clientRepository.update(id, {
    name: name ? name : client.name,
    email: email ? email : client.email,
    phone: phone ? phone : client.phone,
  });

  const updatedClient = await clientRepository.findOneBy({ email: email });
  return updatedClient!;
};

export default updateClientService;
