import { StartedMySqlContainer } from '@testcontainers/mysql';
import { DataSource } from 'typeorm';

export default async () => {
  // Retrieve instances from global
  const container : StartedMySqlContainer = globalThis.test_container as StartedMySqlContainer
  const dataSource : DataSource = globalThis.test_datasource as DataSource;

  console.log(`Tear down test container with connection uri ${container.getConnectionUri()}`)
  // Gracefully close connections
  if (dataSource && dataSource.isInitialized) {
    await dataSource.destroy();
  }
  if (container) {
    await container.stop();
  }
};
