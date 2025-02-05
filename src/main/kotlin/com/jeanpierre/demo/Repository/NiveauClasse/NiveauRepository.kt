package com.jeanpierre.demo.Repository.NiveauClasse

import com.jeanpierre.demo.Model.NiveauClasse.NiveauClasse
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.config.EnableJpaRepositories
import org.springframework.stereotype.Repository


@Repository
@EnableJpaRepositories
interface NiveauRepository: JpaRepository<NiveauClasse, Int> {
}