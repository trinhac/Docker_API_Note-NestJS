import { Put, Param, Delete, Body, Controller, Get, Post, Query } from '@nestjs/common';
import { NoteService } from 'src/notes/services/note/note.service';
@Controller('note')
export class NoteController {
    constructor(private noteService: NoteService){}
    @Post()
    async addNote(@Body() body){
        let message = await this.noteService.addNote(body.note)
        return {
            message:'Note created'
        }
    } 
    @Get()
    async getAll(){
        return await this.noteService.getAll()
    }

    @Put()
    async updateNote(@Body() body) {
        let message = await this.noteService.updateNote(body, body.id);
        return {
            message: 'Note updated'
        }
    }

    @Delete()
    async deleteNote(@Body() body) {
        let message = await this.noteService.deleteNote(body.id);
        return {
            message: "Note deleted"
        }
    }
    @Get()
    async getById(@Query('id') id: string){
        return await this.noteService.getById(id);
    }

    @Get()
    async getByUserId(@Query('user_id') user_id: string){
        return await this.noteService.getByUserId(user_id);
    }


}
