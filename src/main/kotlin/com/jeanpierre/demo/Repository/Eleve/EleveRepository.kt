package com.jeanpierre.demo.Repository.Eleve

import com.jeanpierre.demo.Model.Eleve.Eleve
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.config.EnableJpaRepositories
import org.springframework.stereotype.Repository


@Repository
@EnableJpaRepositories
interface EleveRepository: JpaRepository<Eleve, Int> {
}