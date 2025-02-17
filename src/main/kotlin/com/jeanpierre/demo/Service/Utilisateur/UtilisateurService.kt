package com.jeanpierre.demo.Service.Utilisateur

import com.jeanpierre.demo.Model.AnneeScolaire.AnneeScolaire
import com.jeanpierre.demo.Model.Ecole.Ecole
import com.jeanpierre.demo.Model.Ecole.EcoleForCreation
import com.jeanpierre.demo.Model.Eleve.Eleve
import com.jeanpierre.demo.Model.Eleve.EleveForCreation
import com.jeanpierre.demo.Model.Matiere.Matiere
import com.jeanpierre.demo.Model.Matiere.MatiereForCreation
import com.jeanpierre.demo.Model.NiveauClasse.NiveauClasse
import com.jeanpierre.demo.Model.Note.Note
import com.jeanpierre.demo.Model.Note.NoteForCreation
import com.jeanpierre.demo.Model.Role.Role
import com.jeanpierre.demo.Model.Utilisateur.Login.LoginResponse
import com.jeanpierre.demo.Model.Utilisateur.Signup.SignupResponse
import com.jeanpierre.demo.Model.Utilisateur.Utilisateur
import com.jeanpierre.demo.Model.Utilisateur.UtilisateurDTO
import com.jeanpierre.demo.Model.Utilisateur.UtilisateurForSignup
import com.jeanpierre.demo.Model.Ville.Ville

interface UtilisateurService {
    fun signup(utilisateur: UtilisateurForSignup): SignupResponse
    fun login(utilisateurDTO: UtilisateurDTO): LoginResponse
    fun getAll(): MutableList<Utilisateur>?
    fun getAllRole(): MutableList<Role>?

    fun getAdministratorEcole(id:Int):Ecole?

    fun getAllEcole(): MutableList<Ecole>?
    fun createEcole(ecole: EcoleForCreation): Ecole?
    fun addEleveToEcole(ecoleId:Int, eleve: EleveForCreation): Eleve?
    fun getEcoleEleveList(ecoleId:Int):MutableList<Eleve>?
    fun getEcoleEleveNotesByClasseAndAnnee(ecoleId: Int, classeId:Int, anneeId:Int): MutableList<Eleve>?

    fun getAllVille(): MutableList<Ville>?
    fun createVille(ville: Ville): Ville?

    fun getAllAS(): MutableList<AnneeScolaire>?
    fun createAS(anneeScolaire: AnneeScolaire): AnneeScolaire?

    fun getAllNiveauClasse(): MutableList<NiveauClasse>?
    fun createNiveauClasse(niveauClasse: NiveauClasse): NiveauClasse?
    fun deleteNiveauClasse(id: Int): Boolean?

    fun getAllNote(): MutableList<Note>?
    fun createNote(note: NoteForCreation): Note?

    fun getAllEleve(): MutableList<Eleve>?
    fun createEleve(eleve: EleveForCreation): Eleve?
    fun getEleveById(id: Int):Eleve?

    fun getAllMatiere(): MutableList<Matiere>?
    fun createMatiere(matiere: MatiereForCreation): Matiere?

}