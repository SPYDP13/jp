package com.jeanpierre.demo.Service.Note

import com.jeanpierre.demo.Model.NiveauClasse.NiveauClasse
import com.jeanpierre.demo.Model.Note.Note
import com.jeanpierre.demo.Model.Note.NoteForCreation

interface NoteService {
    fun create(note: NoteForCreation): Note?
    fun getAll(): MutableList<Note>?
    fun getById(id:Int): Note?

}