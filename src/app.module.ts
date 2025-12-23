import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './typeorm/entities/User';
import { Group } from './typeorm/entities/Group';
import { UsersModule } from './users/users.module';
import { GroupsModule } from './groups/groups.module';
import { GroupsProvider } from './groups/groups.provider';
import { usersProvider } from './users/users.provider';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [User,Group],
      synchronize: true,
    }),
    UsersModule,
    GroupsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
