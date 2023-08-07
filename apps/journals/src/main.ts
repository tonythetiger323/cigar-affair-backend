import { NestFactory } from '@nestjs/core';
import { JournalsModule } from './journals.module';

async function bootstrap() {
  const app = await NestFactory.create(JournalsModule);
  await app.listen(3000);
}
bootstrap();
