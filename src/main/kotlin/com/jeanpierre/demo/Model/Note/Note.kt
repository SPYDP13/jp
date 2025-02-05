package com.jeanpierre.demo.Model.Note

import com.jeanpierre.demo.Model.AnneeScolaire.AnneeScolaire
import com.jeanpierre.demo.Model.Matiere.Matiere
import jakarta.persistence.*


@Entity
@Table(name = "note")
data class Note(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_note")
    var idNote:Int,

    @Column(name = "valeur")
    var valeur: Int,

    @ManyToOne(cascade = [CascadeType.ALL], fetch = FetchType.EAGER)
    var anneeScolaire: AnneeScolaire,

    @ManyToOne(cascade = [CascadeType.ALL], fetch = FetchType.EAGER)
    var matiere: Matiere
)
