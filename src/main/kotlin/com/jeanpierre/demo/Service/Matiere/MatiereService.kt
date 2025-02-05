package com.jeanpierre.demo.Service.Matiere

import com.jeanpierre.demo.Model.Matiere.Matiere
import com.jeanpierre.demo.Model.Matiere.MatiereForCreation

interface MatiereService {
    fun create(matiere: MatiereForCreation):Matiere?
    fun getAll(): MutableList<Matiere>?
    fun getById(id:Int): Matiere?
}