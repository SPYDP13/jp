package com.jeanpierre.demo.Service.Role

import com.jeanpierre.demo.Model.Role.Role

interface RoleService {
    fun create(role: Role):Boolean
    fun getAll(): MutableList<Role>?
    fun getById(id:Int): Role?
}