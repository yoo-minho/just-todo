import {Injectable} from '@nestjs/common';
import Todo from "src/models/todo.entity";
import {ICreateTodoDto} from "./interfaces/dto.interface";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(Todo) private readonly todo: Repository<Todo>
    ) {
    }

    create(createTodoDto: ICreateTodoDto) {
        return this.todo.create(createTodoDto).save();
    }

    findAll() {
        return this.todo.find({
            select: ["shortDesc", "isDone", "createdAt"],
            order: {createdAt: -1}
        });
    }

    findOne(id: number) {
        return this.todo.findOne(id);
    }

    remove(id: number) {
        return this.todo.delete(id);
    }

    async toggleStatus(id: number) {
        const before = await this.todo.findOne(id);
        await this.todo.update(id, {isDone: !before.isDone})
    }
}
