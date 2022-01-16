import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import Todo from "../models/todo.entity";
import {TodoRepository} from "./todo.repository";

@Module({
  imports: [TypeOrmModule.forFeature([Todo, TodoRepository])],
  controllers: [TodoController],
  providers: [TodoService]
})
export class TodoModule {}
