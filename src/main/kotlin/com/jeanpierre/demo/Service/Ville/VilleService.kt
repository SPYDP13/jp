package com.jeanpierre.demo.Service.Ville

import com.jeanpierre.demo.Model.Ville.Ville

interface VilleService {
    fun create(ville: Ville): Ville?
    fun getAll(): MutableList<Ville>?
    fun getById(id: Int): Ville?
}