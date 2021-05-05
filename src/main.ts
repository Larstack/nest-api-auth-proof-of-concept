import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { IpFilter } from 'express-ipfilter';
import * as config from 'config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const ips = config.get('ips');
  app.use(IpFilter(ips, { mode: 'allow' }));
  await app.listen(3000, '127.0.0.1');
}
bootstrap();
