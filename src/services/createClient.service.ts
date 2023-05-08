import Client from '../entities/client.entity';
import { IClientRequest, IClientResponse } from '../interfaces/clients';
import { AppDataSource } from '../data-source';
import { AppError } from '../errors/appError';

const createClientService = async ({
  name,
  email,
  phone,
}: IClientRequest): Promise<IClientResponse> => {
  const clientRepository = AppDataSource.getRepository(Client);

  if (!name || !email || !phone) {
    throw new AppError('Information not found', 400);
  }

  const foundEmail = await clientRepository.findOneBy({
    email: email,
  });

  if (foundEmail) {
    throw new AppError('E-mail already exists', 400);
  }

  const foundPhone = await clientRepository.findOneBy({
    phone: phone,
  });

  if (foundPhone) {
    throw new AppError('Phone already exists', 400);
  }

  const client = clientRepository.create({
    name,
    email,
    phone,
  });

  await clientRepository.save(client);
  return client;
};

export default createClientService;
