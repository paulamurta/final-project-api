export interface IContactRequest {
  // o que  o usuario fornece
  name: string;
  email: string;
  phone: number;
}

export interface IContactResponse {
  // o que retorna pro usuario
  id: string;
  name: string;
  email: string;
  phone: number;
  createdAt: Date;
  updatedAt: Date;
}
