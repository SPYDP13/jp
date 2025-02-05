package com.jeanpierre.demo.Model.AnneeScolaire

import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import jakarta.persistence.Table

@Entity
@Table(name = "annee_scolaire")
data class AnneeScolaire(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_annee_scolaire")
    var idAnneeScolaire: Int,

    @Column(name = "annee_debut")
    var anneeDebut: Int,

    @Column(name = "annee_fin")
    var anneeFin: Int

)
