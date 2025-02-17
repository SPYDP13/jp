package com.jeanpierre.demo.Service.NiveauClasse

import com.jeanpierre.demo.Model.NiveauClasse.NiveauClasse

interface NiveauClasseService {

    fun create(niveau: NiveauClasse):NiveauClasse?
    fun getAll(): MutableList<NiveauClasse>?
    fun getById(id:Int): NiveauClasse?
    fun deleteById(id:Int): Boolean?
}