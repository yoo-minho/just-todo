import {IsBoolean, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateTodoDto {
    @ApiProperty({
        example: "짧은 메모",
        description: "짧은 메모",
        required: true,
    })
    @IsString()
    readonly shortDesc: string;

    @ApiProperty({
        example: "긴 메모",
        description: "긴 메모",
        required: true,
    })
    @IsString()
    readonly longDesc: string;

    @IsBoolean()
    readonly isDone: boolean;
}
 