package com.jeanpierre.demo.Service.Ville

import com.jeanpierre.demo.Model.Ville.Ville
import com.jeanpierre.demo.Repository.Ville.VilleRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class VilleServiceImpl @Autowired constructor(final var villeRepository: VilleRepository): VilleService {

    init {
        if (villeRepository.count().toInt()==0){
            villeRepository.saveAll(mutableListOf(
                Ville(0, "Ouagadougou"),
                Ville(0, "Bobo dioulasso"),
                Ville(0, "Banfora"),
            ))
        }
    }

    override fun create(ville: Ville): Ville? {
        return try {
            villeRepository.save(ville)
        }catch (t:Throwable){
            null
        }
    }

    override fun getAll(): MutableList<Ville>? {
        return try {
            villeRepository.findAll()
        }catch (t:Throwable){
            null
        }
    }

    override fun getById(id: Int): Ville? {
        return villeRepository.findById(id).orElseThrow()
    }
}