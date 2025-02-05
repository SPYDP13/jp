package com.jeanpierre.demo.Service.Ecole

import com.jeanpierre.demo.Model.Ecole.Ecole
import com.jeanpierre.demo.Model.Ecole.EcoleForCreation
import com.jeanpierre.demo.Model.Eleve.Eleve
import com.jeanpierre.demo.Model.Eleve.EleveForCreation
import com.jeanpierre.demo.Model.Note.Note
import com.jeanpierre.demo.Model.Role.Role

interface EcoleService {
    fun create(ecole: EcoleForCreation):Ecole?
    fun getAll(): MutableList<Ecole>?
    fun getById(id:Int): Ecole?

    fun addEleve(ecoleId:Int,eleve: EleveForCreation):Eleve?
    fun getAllEleve(ecoleId: Int): MutableList<Eleve>?

    fun getEcoleEleveNotesByClasseAndAnnee(ecoleId:Int, classeId:Int, anneeId:Int):MutableList<Eleve>?

}