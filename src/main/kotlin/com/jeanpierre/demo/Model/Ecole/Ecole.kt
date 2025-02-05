package com.jeanpierre.demo.Model.Ecole

import com.fasterxml.jackson.annotation.JsonBackReference
import com.fasterxml.jackson.annotation.JsonManagedReference
import com.jeanpierre.demo.Model.Eleve.Eleve
import com.jeanpierre.demo.Model.Utilisateur.Utilisateur
import com.jeanpierre.demo.Model.Ville.Ville
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


@Entity
@Table(name = "ecole")
data class Ecole(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_ecole")
    var idEcole: Int,

    @Column(name = "nom_ecole")
    var nomEcole: String,

    @ManyToOne(cascade = [CascadeType.MERGE], fetch = FetchType.EAGER)
    var ville: Ville,

    @JsonBackReference
    @OneToMany(cascade = [CascadeType.ALL], fetch = FetchType.EAGER, orphanRemoval = true, mappedBy = "ecole")
    var listEleves: MutableList<Eleve>,

    @OneToMany(mappedBy = "ecole")
    @JsonManagedReference
    var responsable: MutableList<Utilisateur>?


)
