package com.jeanpierre.demo.Service.Note

import com.jeanpierre.demo.Model.Note.Note
import com.jeanpierre.demo.Model.Note.NoteForCreation
import com.jeanpierre.demo.Repository.Note.NoteRepository
import com.jeanpierre.demo.Service.AnneeScolaire.ASService
import com.jeanpierre.demo.Service.AnneeScolaire.ASServiceImpl
import com.jeanpierre.demo.Service.Matiere.MatiereServiceImpl
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service


@Service
class NoteServiceImpl @Autowired constructor(var noteRepository: NoteRepository, var asService: ASServiceImpl, var matierService: MatiereServiceImpl ): NoteService {
    override fun create(note: NoteForCreation): Note? {
        return try {
            noteRepository.save(
                Note(
                    idNote = 0,
                    valeur = note.valeur,
                    anneeScolaire = asService.getById(note.anneeScolaire)!!,
                    matiere = matierService.getById(note.matiere)!!
                )
            )
        }catch (t:Throwable){
            null
        }
    }

    override fun getAll(): MutableList<Note>? {
        return try {
            noteRepository.findAll()
        }catch (t:Throwable){
            null
        }
    }

    override fun getById(id: Int): Note? {
        return noteRepository.findById(id).orElseThrow()
    }
}