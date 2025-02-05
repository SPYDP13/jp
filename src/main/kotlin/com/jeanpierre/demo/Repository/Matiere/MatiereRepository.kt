package com.jeanpierre.demo.Repository.Matiere

import com.jeanpierre.demo.Model.Matiere.Matiere
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.config.EnableJpaRepositories
import org.springframework.stereotype.Repository


@Repository
@EnableJpaRepositories
interface MatiereRepository: JpaRepository<Matiere, Int> {
}