package com.jeanpierre.demo.Model.Matiere

import com.jeanpierre.demo.Model.NiveauClasse.NiveauClasse
import jakarta.persistence.CascadeType
import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.FetchType
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import jakarta.persistence.ManyToOne
import jakarta.persistence.Table

@Entity
@Table(name = "matiere")
data class Matiere(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_matiere")
    var idMatiere: Int,

    @Column(name = "nom_matiere")
    var nomMatiere: String,

    @Column(name = "coef")
    var coef: Int,

    @ManyToOne(cascade = [CascadeType.ALL], fetch = FetchType.EAGER)
    var niveau_classe: NiveauClasse
)
