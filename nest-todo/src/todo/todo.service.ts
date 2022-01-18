import {Injectable, NotFoundException} from '@nestjs/common';
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
            select: ["id", "shortDesc", "isDone", "createdAt"],
            order: {createdAt: -1}
        });
    }

    async findOne(id: number) {
        const oneTodo = await this.todo.findOne({where: {id}});
        if (!oneTodo) {
            throw new NotFoundException(`id: ${id} 에 해당하는 할일이 존재하지 않습니다`);
        }
        return oneTodo;
    }

    remove(id: number) {
        return this.todo.delete(id);
    }

    async update(id: number, updateTodoDto: UpdateTodoDto) {
        const oneTodo = await this.findOne(id);
        return this.todo.save({...oneTodo, ...updateTodoDto});
    }

    async toggleStatus(id: number) {
        const oneTodo = await this.findOne(id)
        return await this.todo.save({...oneTodo, isDone: !oneTodo.isDone})
    }
}
