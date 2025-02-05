package com.jeanpierre.demo.Repository.AnneeScolaire

import com.jeanpierre.demo.Model.AnneeScolaire.AnneeScolaire
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.config.EnableJpaRepositories
import org.springframework.stereotype.Repository


@Repository
@EnableJpaRepositories
interface ASRepository: JpaRepository<AnneeScolaire, Int> {
}