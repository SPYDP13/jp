package com.jeanpierre.demo.Model.Ecole

data class EcoleForCreation (
    var nomEcole: String,
    var ville: Int,
    var listEleves: MutableList<Int>,
)