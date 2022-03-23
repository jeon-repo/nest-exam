import { Module } from '@nestjs/common';
import { ChatBackEndModule } from './chatBackEnd/chatBackEnd.module';

@Module({
  imports: [ChatBackEndModule],
})
export class AppModule {}
