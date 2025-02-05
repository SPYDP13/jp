package com.jeanpierre.demo.Repository.Ecole

import com.jeanpierre.demo.Model.Ecole.Ecole
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.config.EnableJpaRepositories
import org.springframework.stereotype.Repository


@Repository
@EnableJpaRepositories
interface EcoleRepository: JpaRepository<Ecole, Int> {
}