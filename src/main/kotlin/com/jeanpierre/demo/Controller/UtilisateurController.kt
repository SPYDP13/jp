package com.jeanpierre.demo.Controller

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
import com.jeanpierre.demo.Service.Utilisateur.UtilisateurServiceImpl
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController


@RestController
@RequestMapping("/utilisateur")
class UtilisateurController @Autowired constructor(
    var utilisateurServiceImpl: UtilisateurServiceImpl
) {
    @PostMapping("/signup")
    fun signup(@RequestBody utilisateur: UtilisateurForSignup): SignupResponse = utilisateurServiceImpl.signup(utilisateur)

    @PostMapping("/login")
    fun login(@RequestBody utilisateurDTO: UtilisateurDTO): LoginResponse = utilisateurServiceImpl.login(utilisateurDTO)

    @GetMapping("/getAll")
    fun getAllUser():MutableList<Utilisateur>? = utilisateurServiceImpl.getAll()

    @GetMapping("/getEcole/{id}")
    fun getAdministratorEcole(@PathVariable("id") id: Int): Ecole? = utilisateurServiceImpl.getAdministratorEcole(id)

    @GetMapping("/roles/getAll")
    fun getAllRole(): MutableList<Role>? = utilisateurServiceImpl.getAllRole()

    @GetMapping("/ecoles/getAll")
    fun getAllEcole(): MutableList<Ecole>? = utilisateurServiceImpl.getAllEcole()

    @PostMapping("/ecoles/create")
    fun createEcole(@RequestBody ecole: EcoleForCreation): Ecole? = utilisateurServiceImpl.createEcole(ecole)

    @PostMapping("/ecoles/addEleve/{ecoleId}")
    fun addEleveToEcole(@PathVariable("ecoleId") ecoleId:Int, @RequestBody eleve:EleveForCreation): Eleve? = utilisateurServiceImpl.addEleveToEcole(ecoleId, eleve)

    @GetMapping("/ecoles/getEleve/{ecoleId}")
    fun getEcoleEleveList(@PathVariable("ecoleId") ecoleId:Int): MutableList<Eleve>? = utilisateurServiceImpl.getEcoleEleveList(ecoleId)

    @GetMapping("/ecoles/getEleveByClasseAnnee/{ecoleId}/{classeId}/{anneeId}")
    fun getEcoleEleveNotesByClasseAndAnnee(@PathVariable("ecoleId") ecoleId:Int, @PathVariable("classeId") classeId:Int, @PathVariable("anneeId") anneeId:Int): MutableList<Eleve>? = utilisateurServiceImpl.getEcoleEleveList(ecoleId)

    @GetMapping("/villes/getAll")
    fun getAllVille(): MutableList<Ville>? = utilisateurServiceImpl.getAllVille()

    @PostMapping("/villes/create")
    fun createVille(@RequestBody ville: Ville): Ville? = utilisateurServiceImpl.createVille(ville)

    @GetMapping("/anneeScolaires/getAll")
    fun getAllAS(): MutableList<AnneeScolaire>? = utilisateurServiceImpl.getAllAS()

    @PostMapping("/anneeScolaires/create")
    fun createAS(@RequestBody anneeScolaire: AnneeScolaire): AnneeScolaire? = utilisateurServiceImpl.createAS(anneeScolaire)

    @GetMapping("/niveauClasses/getAll")
    fun getAllNiveauClasse(): MutableList<NiveauClasse>? = utilisateurServiceImpl.getAllNiveauClasse()

    @PostMapping("/niveauClasses/create")
    fun createNiveauClasse(@RequestBody niveauClasse: NiveauClasse): NiveauClasse? = utilisateurServiceImpl.createNiveauClasse(niveauClasse)

    @GetMapping("/notes/getAll")
    fun getAllNote(): MutableList<Note>? = utilisateurServiceImpl.getAllNote()

    @PostMapping("/notes/create")
    fun createNote(@RequestBody note: NoteForCreation): Note? = utilisateurServiceImpl.createNote(note)

    @GetMapping("/eleves/getAll")
    fun getAllEleve(): MutableList<Eleve>? = utilisateurServiceImpl.getAllEleve()

    @PostMapping("/eleves/create")
    fun createEleve(@RequestBody eleve: EleveForCreation): Eleve? = utilisateurServiceImpl.createEleve(eleve)

    @GetMapping("/matieres/getAll")
    fun getAllMatieres(): MutableList<Matiere>? = utilisateurServiceImpl.getAllMatiere()

    @PostMapping("/matieres/create")
    fun createMatiere(@RequestBody matiere: MatiereForCreation): Matiere? = utilisateurServiceImpl.createMatiere(matiere)

}