package com.jeanpierre.demo.Service.AnneeScolaire

import com.jeanpierre.demo.Model.AnneeScolaire.AnneeScolaire
import com.jeanpierre.demo.Repository.AnneeScolaire.ASRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service


@Service
class ASServiceImpl @Autowired constructor(final var asRepository: ASRepository): ASService {


    init {
        if (asRepository.count().toInt()==0){
            asRepository.saveAll(mutableListOf(
                AnneeScolaire(0, 2018,2019),
                AnneeScolaire(0, 2019,2020),
                AnneeScolaire(0, 2020,2021),
                AnneeScolaire(0, 2021,2022),
                AnneeScolaire(0, 2022,2023),
                AnneeScolaire(0, 2023,2024),
                AnneeScolaire(0, 2025,2025),
            ))
        }
    }

    override fun create(annee: AnneeScolaire): AnneeScolaire? {
        return try {
            asRepository.save(annee)
        }catch (t:Throwable){
            null
        }
    }

    override fun getAll(): MutableList<AnneeScolaire>? {
        return try {
            asRepository.findAll()
        }catch (t:Throwable){
            null
        }
    }

    override fun getById(id: Int): AnneeScolaire? {
        return asRepository.findById(id).orElseThrow()
    }
}