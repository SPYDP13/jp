package com.jeanpierre.demo.Model.Utilisateur

data class UtilisateurForSignup(
    var idUtilisateur:Int,
    var nomUtilisateur:String,
    var emailUtilisateur:String,
    var password:String,
    var role:Int,
    var ecole:Int?,
)
