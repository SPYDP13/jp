package com.jeanpierre.demo.Service.NiveauClasse

import com.jeanpierre.demo.Model.NiveauClasse.NiveauClasse
import com.jeanpierre.demo.Repository.NiveauClasse.NiveauRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service


@Service
class NiveauServiceImpl @Autowired constructor(final var niveauRepository: NiveauRepository): NiveauClasseService {

    init {
        if (niveauRepository.count().toInt()==0){
            niveauRepository.saveAll(mutableListOf(
                NiveauClasse(0,"CP1"),
                NiveauClasse(0,"CP2"),
                NiveauClasse(0,"CE1"),
                NiveauClasse(0,"CE2"),
                NiveauClasse(0,"CM1"),
                NiveauClasse(0,"CM2"),
            ))
        }
    }

    override fun create(niveau: NiveauClasse): NiveauClasse? {
        return try {
            niveauRepository.save(niveau)
        }catch (t:Throwable){
            null
        }
    }

    override fun getAll(): MutableList<NiveauClasse>? {
        return try {
            niveauRepository.findAll()
        }catch (t:Throwable){
            null
        }
    }

    override fun getById(id: Int): NiveauClasse? {
        return niveauRepository.findById(id).orElseThrow()
    }
}