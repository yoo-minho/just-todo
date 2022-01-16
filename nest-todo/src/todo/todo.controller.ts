import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {TodoService} from './todo.service';
import {ICreateTodoDto} from './interfaces/dto.interface';
import {ApiCreatedResponse, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateTodoDto} from "./dto/create-todo.dto";

@Controller('todo')
@ApiTags('유저 API')
export class TodoController {
    constructor(private readonly todoService: TodoService) {
    }

    @Post()
    @ApiResponse({
        description: '회원가입 API',
    })
    @ApiOperation({ summary: '유저 생성 API', description: '유저를 생성한다.' })
    @ApiCreatedResponse({ description: '유저를 생성한다.', type: ICreateTodoDto })
    async create(@Body() createTodoDto: CreateTodoDto) {
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
