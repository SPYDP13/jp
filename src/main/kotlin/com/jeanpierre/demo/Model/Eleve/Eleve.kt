package com.jeanpierre.demo.Model.Eleve

import com.fasterxml.jackson.annotation.JsonBackReference
import com.fasterxml.jackson.annotation.JsonManagedReference
import com.jeanpierre.demo.Model.Ecole.Ecole
import com.jeanpierre.demo.Model.Note.Note
import jakarta.persistence.CascadeType
import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.FetchType
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import jakarta.persistence.ManyToOne
import jakarta.persistence.OneToMany
import jakarta.persistence.Table
import java.time.LocalDate
import java.time.LocalDateTime

@Entity
@Table(name = "eleve")
data class Eleve(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_eleve")
    var idEleve: Int,

    @Column(name = "nom_eleve")
    var nomEleve: String,

    @Column(name = "date_naissance")
    var dateNaissance: LocalDate,

    @Column(name = "matricule")
    var matricule : String,

    @OneToMany(cascade = [CascadeType.ALL], fetch = FetchType.EAGER, orphanRemoval = true)
    var listNote: MutableList<Note>,

    @JsonManagedReference
    @ManyToOne(cascade = [CascadeType.ALL], fetch = FetchType.EAGER)
    var ecole: Ecole
)
