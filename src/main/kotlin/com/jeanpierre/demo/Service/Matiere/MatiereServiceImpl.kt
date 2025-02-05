package com.jeanpierre.demo.Service.Matiere

import com.jeanpierre.demo.Model.Matiere.Matiere
import com.jeanpierre.demo.Model.Matiere.MatiereForCreation
import com.jeanpierre.demo.Repository.Matiere.MatiereRepository
import com.jeanpierre.demo.Service.NiveauClasse.NiveauServiceImpl
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service


@Service
class MatiereServiceImpl @Autowired constructor(
    var matiereRepository: MatiereRepository,
    var niveauServiceImpl: NiveauServiceImpl
    ) : MatiereService {
    override fun create(matiere: MatiereForCreation): Matiere? {
        return try {
            matiereRepository.save(
                Matiere(
                    idMatiere = 0,
                    nomMatiere = matiere.nomMatiere,
                    coef = matiere.coef,
                    niveau_classe = niveauServiceImpl.getById(matiere.niveau_classe)!!
                )
            )
        } catch (t: Throwable) {
            null
        }
    }

    override fun getAll(): MutableList<Matiere>? {
        return try {
            matiereRepository.findAll()
        }catch (t:Throwable){
            null
        }
    }

    override fun getById(id: Int): Matiere? {
        return matiereRepository.findById(id).orElseThrow()
    }
}