package com.jeanpierre.demo.Service.Eleve

import com.jeanpierre.demo.Model.Eleve.Eleve
import com.jeanpierre.demo.Model.Eleve.EleveForCreation

interface EleveService {
    fun create(eleve: EleveForCreation):Eleve?
    fun getAll(): MutableList<Eleve>?
    fun getById(id:Int): Eleve?
}