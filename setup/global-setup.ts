import { MySqlContainer, StartedMySqlContainer } from '@testcontainers/mysql';

export default async () => {
  const container: StartedMySqlContainer = await new MySqlContainer('mysql:latest')
    .withRootPassword('root')
    .withDatabase('test')
    .start();

  process.env.DB_URL = container.getConnectionUri();
  globalThis.test_container = container;
};
