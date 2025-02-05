package com.jeanpierre.demo.Service.Eleve

import com.jeanpierre.demo.Model.Eleve.Eleve
import com.jeanpierre.demo.Model.Eleve.EleveForCreation
import com.jeanpierre.demo.Model.Note.Note
import com.jeanpierre.demo.Repository.Eleve.EleveRepository
import com.jeanpierre.demo.Service.AnneeScolaire.ASService
import com.jeanpierre.demo.Service.AnneeScolaire.ASServiceImpl
import com.jeanpierre.demo.Service.Ecole.EcoleService
import com.jeanpierre.demo.Service.Ecole.EcoleServiceImpl
import com.jeanpierre.demo.Service.Matiere.MatiereService
import com.jeanpierre.demo.Service.Matiere.MatiereServiceImpl
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service


@Service
class EleveServiceImpl @Autowired constructor(
    var eleveRepository: EleveRepository,
    var asService: ASServiceImpl,
    var matiereService: MatiereServiceImpl,
    var ecoleService: EcoleServiceImpl
) : EleveService {

    override fun create(eleve: EleveForCreation): Eleve? {
        return try {
            val noteList: MutableList<Note> = mutableListOf()
            eleve.listNote.map { item ->
                noteList.add(
                    Note(
                        0,
                        item.valeur,
                        asService.getById(item.anneeScolaire)!!,
                        matiereService.getById(item.matiere)!!
                    )
                )
            }
            val eleveFinal = Eleve(0, eleve.nomEleve, eleve.dateNaissance, eleve.matricule, noteList, ecoleService.getById(eleve.ecole)!!)
            eleveRepository.save(eleveFinal)
        } catch (t: Throwable) {
            null
        }
    }

    override fun getAll(): MutableList<Eleve>? {
        return try {
            eleveRepository.findAll()
        } catch (t: Throwable) {
            null
        }
    }

    override fun getById(id: Int): Eleve? {
        return eleveRepository.findById(id).orElseThrow()
    }
}