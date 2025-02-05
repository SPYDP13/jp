package com.jeanpierre.demo.Model.Utilisateur

import com.fasterxml.jackson.annotation.JsonBackReference
import com.jeanpierre.demo.Model.Ecole.Ecole
import com.jeanpierre.demo.Model.Role.Role
import jakarta.persistence.*

@Entity
@Table(name = "utilisateur")
data class Utilisateur (
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_utilisateur")
    var idUtilisateur: Int,

    @Column(name = "nom_utilisateur")
    var nomUtilisateur: String,

    @Column(name = "email_utilisateur")
    var emailUtilisateur: String,

    @Column(name = "password")
    var password: String,

    @ManyToOne(cascade = [CascadeType.MERGE], fetch = FetchType.EAGER)
    var role: Role,

    @ManyToOne(cascade = [CascadeType.ALL], fetch = FetchType.EAGER)
    @JsonBackReference
    var ecole: Ecole?,
)