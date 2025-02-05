package com.jeanpierre.demo.Service.Token

interface TokenService {
    fun generateToken(adminId: Int):String?
    fun parseToken(token:String?):Int?
}