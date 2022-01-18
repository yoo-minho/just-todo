import {DeepPartial, EntityRepository, Repository} from 'typeorm';
import Todo from '../models/todo.entity';
import {CreateTodoDto} from "./dto/create-todo.dto";

@EntityRepository(Todo)
export class TodoRepository extends Repository<Todo> {
    async createTodo(createTodoDto: CreateTodoDto): Promise<Todo> {
        const {shortDesc, longDesc, isDone} = createTodoDto;

        const data = {
            shortDesc,
            longDesc,
            isDone
        }

        // @ts-ignore
        const todo = this.create(data);
        await this.save(todo);
        return todo;
    }
}