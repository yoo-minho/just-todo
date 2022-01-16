import {Injectable} from '@nestjs/common';
import Todo from "src/models/todo.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {TodoRepository} from "./todo.repository";
import {UpdateTodoDto} from "./dto/update-todo.dto";
import {CreateTodoDto} from "./dto/create-todo.dto";

@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(Todo) private readonly todo: Repository<Todo>,
        @InjectRepository(TodoRepository) private todoRepository: TodoRepository
    ) {
    }

    create(createTodoDto: CreateTodoDto) {
        return this.todoRepository.createTodo(createTodoDto);
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

    update(id: number, updateTodoDto: UpdateTodoDto) {
        // const before = await this.todo.findOne(id);
        // await this.todo.update(id, updateTodoDto)
    }

    async toggleStatus(id: number) {
        const before = await this.todo.findOne(id);
        await this.todo.update(id, {isDone: !before.isDone})
    }
}
