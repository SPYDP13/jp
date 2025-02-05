package com.jeanpierre.demo.Repository.Role

import com.jeanpierre.demo.Model.Role.Role
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.config.EnableJpaRepositories
import org.springframework.stereotype.Repository


@Repository
@EnableJpaRepositories
interface RoleRepository: JpaRepository<Role, Int> {
}