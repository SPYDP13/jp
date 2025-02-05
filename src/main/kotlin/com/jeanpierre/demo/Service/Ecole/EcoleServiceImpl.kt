package com.jeanpierre.demo.Service.Ecole

import com.jeanpierre.demo.Model.Ecole.Ecole
import com.jeanpierre.demo.Model.Ecole.EcoleForCreation
import com.jeanpierre.demo.Model.Eleve.Eleve
import com.jeanpierre.demo.Model.Eleve.EleveForCreation
import com.jeanpierre.demo.Model.Note.Note
import com.jeanpierre.demo.Model.Role.Role
import com.jeanpierre.demo.Model.Ville.Ville
import com.jeanpierre.demo.Repository.Ecole.EcoleRepository
import com.jeanpierre.demo.Repository.Ville.VilleRepository
import com.jeanpierre.demo.Service.AnneeScolaire.ASService
import com.jeanpierre.demo.Service.AnneeScolaire.ASServiceImpl
import com.jeanpierre.demo.Service.Matiere.MatiereServiceImpl
import com.jeanpierre.demo.Service.Ville.VilleService
import com.jeanpierre.demo.Service.Ville.VilleServiceImpl
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service


@Service
class EcoleServiceImpl @Autowired constructor(
    final var ecoleRepository: EcoleRepository,
    var villeService: VilleService,
    var asService: ASServiceImpl,
    var matiereService: MatiereServiceImpl
) : EcoleService {

    init {
        if (ecoleRepository.count().toInt() == 0) {
            create(EcoleForCreation("Marie Curie", 1, mutableListOf()))
        }
    }

    final override fun create(ecole: EcoleForCreation): Ecole? {
        return try {
            val ecol = Ecole(
                idEcole = 0,
                nomEcole = ecole.nomEcole,
                ville = villeService.getById(ecole.ville)!!,
                listEleves = mutableListOf(),
                responsable = null
            )
            ecoleRepository.save(ecol)

        } catch (t: Throwable) {
            println(t.message)
            null
        }

    }

    override fun getAll(): MutableList<Ecole>? {
        return try {
            ecoleRepository.findAll()
        } catch (t: Throwable) {
            null
        }
    }

    override fun getById(id: Int): Ecole? {
        return ecoleRepository.findById(id).orElseThrow()
    }

    override fun addEleve(ecoleId: Int, eleve: EleveForCreation): Eleve? {
        return try {
            var ecole = ecoleRepository.findById(ecoleId).get()
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
            val eleveFinal = Eleve(0, eleve.nomEleve, eleve.dateNaissance, eleve.matricule, noteList, getById(eleve.ecole)!!)
            ecole.listEleves.add(eleveFinal)
            ecoleRepository.save(ecole).listEleves.last()
        } catch (t: Throwable) {
            null
        }
    }

    override fun getAllEleve(ecoleId: Int): MutableList<Eleve>? {
        return try {
            ecoleRepository.findById(ecoleId).get().listEleves
        }catch (t:Throwable){
            null
        }
    }

    override fun getEcoleEleveNotesByClasseAndAnnee(ecoleId:Int, classeId: Int, anneeId: Int): MutableList<Eleve>? {
        //Liste de tous les élèves
        val elevesList = ecoleRepository.findById(ecoleId).get().listEleves

        //Tri des notes des eleves en fonction de la classe et de l'anneé
        val filteredEleve = mutableListOf<Eleve>()
        elevesList.map { item->
            item.listNote.map { item2->
                if (item2.anneeScolaire.idAnneeScolaire==anneeId && item2.matiere.niveau_classe.idNiveau==classeId){
                    filteredEleve.add(item)
                }
            }
        }
        return filteredEleve
    }
}