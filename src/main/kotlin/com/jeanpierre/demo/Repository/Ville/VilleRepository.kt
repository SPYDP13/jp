package com.jeanpierre.demo.Repository.Ville

import com.jeanpierre.demo.Model.Ville.Ville
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.config.EnableJpaRepositories
import org.springframework.stereotype.Repository


@Repository
@EnableJpaRepositories
interface VilleRepository: JpaRepository<Ville, Int> {
}