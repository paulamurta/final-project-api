export interface IClientRequest {
  // o que  o usuario fornece
  name: string;
  email: string;
  phone: number;
}

export interface IClientResponse {
  // o que retorna pro usuario
  id: string;
  name: string;
  email: string;
  phone: number;
  createdAt: Date;
  updatedAt: Date;
}
