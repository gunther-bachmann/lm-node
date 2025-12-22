export type CreateUserParams = {
  username: string;
  password: string;
};

export type UpdateUserParams = {
  id: number;
  username?: string;
  password?: string;
};
