import { StartedMySqlContainer } from '@testcontainers/mysql';
import { DataSource } from 'typeorm';

declare global {
  var test_container: StartedMySqlContainer;
  var test_datasource: DataSource;
}
