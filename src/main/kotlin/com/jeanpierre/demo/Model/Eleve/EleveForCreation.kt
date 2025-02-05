package com.jeanpierre.demo.Model.Eleve

import com.jeanpierre.demo.Model.Note.NoteForCreation
import java.time.LocalDate
import java.time.LocalDateTime

data class EleveForCreation (
    val nomEleve:String,
    val dateNaissance:LocalDate,
    val matricule:String,
    val ecole:Int,
    val listNote:MutableList<NoteForCreation>,
)