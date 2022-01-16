import {IsBoolean, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateTodoDto {
    @IsString()
    @ApiProperty({
        example: "메모",
        description: "제목",
        required: true,
    })
    readonly shortDesc: string;

    @IsString()
    @ApiProperty({
        example: "메모22",
        description: "제목22",
        required: true,
    })
    readonly longDesc: number;

    @IsBoolean()
    readonly isDone: boolean;
}
 