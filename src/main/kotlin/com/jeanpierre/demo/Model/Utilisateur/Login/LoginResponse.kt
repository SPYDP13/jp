package com.jeanpierre.demo.Model.Utilisateur.Login

import com.jeanpierre.demo.Model.Utilisateur.Utilisateur

data class LoginResponse(
    var status: LoginResponsStatuses,
    var token: String?,
    var utilisateur: Utilisateur?,
    var message: String
)
