package com.jeanpierre.demo.Service.AnneeScolaire

import com.jeanpierre.demo.Model.AnneeScolaire.AnneeScolaire

interface ASService {
    fun create(annee: AnneeScolaire):AnneeScolaire?
    fun getAll(): MutableList<AnneeScolaire>?
    fun getById(id:Int): AnneeScolaire?
}