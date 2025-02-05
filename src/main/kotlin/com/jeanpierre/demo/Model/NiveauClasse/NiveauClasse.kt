package com.jeanpierre.demo.Model.NiveauClasse

import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import jakarta.persistence.Table

@Entity
@Table(name = "niveau_classe")
data class NiveauClasse(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_niveau")
    var idNiveau: Int,

    @Column(name = "nom_niveau")
    var nomNiveau: String

)
