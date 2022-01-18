import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {TodoService} from './todo.service';
import {ICreateTodoDto} from './interfaces/dto.interface';
import {ApiCreatedResponse, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateTodoDto} from "./dto/create-todo.dto";
import {UpdateTodoDto} from "./dto/update-todo.dto";

@ApiTags('할일 API')
@Controller('todo')
export class TodoController {
    constructor(private readonly todoService: TodoService) {
    }

    @ApiOperation({summary: '할일 1개 생성'})
    @ApiCreatedResponse({type: CreateTodoDto})
    @Post()
    async create(@Body() createTodoDto: CreateTodoDto) {
        return await this.todoService.create(createTodoDto);
    }

    @ApiOperation({summary: '할일 전체 조회'})
    @Get()
    getList() {
        return this.todoService.findAll();
    }

    @ApiOperation({summary: '할일 1개 조회'})
    @Get(':id')
    getOne(@Param('id') id: string) {
        return this.todoService.findOne(+id);
    }

    @ApiOperation({summary: '할일 1개 수정'})
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
        return this.todoService.update(+id, updateTodoDto);
    }

    @ApiOperation({summary: '할일 완료상태 토글'})
    @Patch(':id/status')
    toggle(@Param('id') id: string) {
        return this.todoService.toggleStatus(+id);
    }

    @ApiOperation({summary: '할일 삭제'})
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.todoService.remove(+id);
    }
}
