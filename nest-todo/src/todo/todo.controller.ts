import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {TodoService} from './todo.service';
import {ICreateTodoDto} from './interfaces/dto.interface';

@Controller('todo')
export class TodoController {
    constructor(private readonly todoService: TodoService) {
    }

    @Post()
    async create(@Body() createTodoDto: ICreateTodoDto) {
        return await this.todoService.create(createTodoDto);
    }

    @Get()
    getList() {
        return this.todoService.findAll();
    }

    @Get(':id')
    getOne(@Param('id') id: string) {
        return this.todoService.findOne(+id);
    }

    @Patch(':id/status')
    toggle(@Param('id') id: string) {
        return this.todoService.toggleStatus(+id);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.todoService.remove(+id);
    }
}
