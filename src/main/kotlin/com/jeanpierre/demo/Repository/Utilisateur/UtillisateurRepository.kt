package com.jeanpierre.demo.Repository.Utilisateur

import com.jeanpierre.demo.Model.Utilisateur.Utilisateur
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.config.EnableJpaRepositories
import org.springframework.stereotype.Repository


@Repository
@EnableJpaRepositories
interface UtillisateurRepository: JpaRepository<Utilisateur, Int> {
    fun findByEmailUtilisateur(email: String): MutableList<Utilisateur>
}