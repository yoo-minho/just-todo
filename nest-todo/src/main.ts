import {NestFactory} from '@nestjs/core';
import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger';
import {AppModule} from './app.module';
import {ValidationPipe} from "@nestjs/common";

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        logger: ['error', "log", "warn", "debug", "verbose"],
    });

    const config = new DocumentBuilder()
        .setTitle('Todo')
        .setDescription('The Todo API description')
        .setVersion('1.0')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true, //선언되지 않은 key 들어오면 오류
            transform: true, //string 2 number 자동 변환
        })
    )

    await app.listen(5000);
    return '5000번 포트로 서버 ON';
}

bootstrap().then(r => console.log(r));
