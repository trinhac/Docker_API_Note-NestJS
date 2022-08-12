import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NoteController } from './notes/controllers/note/note.controller';
import { NoteService } from './notes/services/note/note.service';

@Module({
  imports: [],
  controllers: [AppController, NoteController],
  providers: [AppService, NoteService],
})
export class AppModule {}
