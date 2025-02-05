package com.jeanpierre.demo.Service.Token

import io.jsonwebtoken.Jwts
import org.springframework.stereotype.Service
import java.util.*

@Service
class TokenServiceImpl: TokenService {
    var key = Jwts.SIG.HS512.key().build()
    override fun generateToken(adminId: Int): String? {
        val issuer = adminId.toString()
        val jwt = Jwts.builder()
            .issuer(issuer)
            .expiration(Date(System.currentTimeMillis() + 60*120*1000)) /*5 jours*/
            .signWith(key)
            .compact()
        return jwt
    }

    override fun parseToken(token: String?): Int? {
        var jwts = token!!
        if (jwts.startsWith("Bearer ")){
            jwts = jwts.subSequence(7,jwts.length).toString()
        }
        return try {
            val body = Jwts.parser().verifyWith(key).build().parseClaimsJws(jwts).body
            body.issuer.toInt()
        }catch (e:Exception){
            null
        }
    }
}