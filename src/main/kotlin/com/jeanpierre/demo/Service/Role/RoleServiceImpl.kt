package com.jeanpierre.demo.Service.Role

import com.jeanpierre.demo.Model.Role.Role
import com.jeanpierre.demo.Repository.Role.RoleRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service


@Service
class RoleServiceImpl @Autowired constructor(final var roleRepository: RoleRepository) : RoleService {

    init {
        if (roleRepository.count().toInt() == 0) {
            roleRepository.saveAll(mutableListOf(
                Role(0, "administrateur"),
                Role(0, "superadmin"),
                Role(0, "utilisateur")
            ))
        }
    }

    override fun create(role: Role): Boolean {
        return try {
            roleRepository.save(role)
            true
        } catch (t: Throwable) {
            false
        }

    }

    override fun getAll(): MutableList<Role>? {
        return try {
            roleRepository.findAll()
        } catch (t: Throwable) {
            null
        }
    }

    override fun getById(id: Int): Role? {
        return roleRepository.findById(id).orElseThrow()
    }
}