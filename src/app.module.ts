import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './typeorm/entities/User';
import { Group } from './typeorm/entities/Group';
import { UsersModule } from './users/users.module';
import { GroupsModule } from './groups/groups.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => {
        if (process.env.DB_URL) {
          const dbUrl = new URL(process.env.DB_URL);
          return {
            type: dbUrl.protocol.replace(':', '') as any, // 'mysql'
            host: dbUrl.hostname,
            port: parseInt(dbUrl.port, 10),
            username: dbUrl.username,
            password: dbUrl.password,
            database: dbUrl.pathname.substring(1), // remove leading '/'
            entities: [User, Group],
            synchronize: true,
          };
        } else {
          // Default configuration for development
          return {
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'test',
            entities: [User, Group],
            synchronize: true,
          };
        }
      },
    }),
    UsersModule,
    GroupsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
