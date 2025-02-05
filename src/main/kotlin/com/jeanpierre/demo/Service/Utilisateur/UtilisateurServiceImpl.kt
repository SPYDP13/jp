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
import com.jeanpierre.demo.Model.Utilisateur.Login.LoginResponsStatuses
import com.jeanpierre.demo.Model.Utilisateur.Login.LoginResponse
import com.jeanpierre.demo.Model.Utilisateur.Signup.SignupReponseStatuses
import com.jeanpierre.demo.Model.Utilisateur.Signup.SignupResponse
import com.jeanpierre.demo.Model.Utilisateur.Utilisateur
import com.jeanpierre.demo.Model.Utilisateur.UtilisateurDTO
import com.jeanpierre.demo.Model.Utilisateur.UtilisateurForSignup
import com.jeanpierre.demo.Model.Ville.Ville
import com.jeanpierre.demo.Repository.Utilisateur.UtillisateurRepository
import com.jeanpierre.demo.Service.AnneeScolaire.ASServiceImpl
import com.jeanpierre.demo.Service.Ecole.EcoleService
import com.jeanpierre.demo.Service.Ecole.EcoleServiceImpl
import com.jeanpierre.demo.Service.Eleve.EleveServiceImpl
import com.jeanpierre.demo.Service.Matiere.MatiereServiceImpl
import com.jeanpierre.demo.Service.NiveauClasse.NiveauClasseService
import com.jeanpierre.demo.Service.NiveauClasse.NiveauServiceImpl
import com.jeanpierre.demo.Service.Note.NoteServiceImpl
import com.jeanpierre.demo.Service.Role.RoleService
import com.jeanpierre.demo.Service.Role.RoleServiceImpl
import com.jeanpierre.demo.Service.Token.TokenService
import com.jeanpierre.demo.Service.Token.TokenServiceImpl
import com.jeanpierre.demo.Service.Ville.VilleServiceImpl
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Service

@Service
class UtilisateurServiceImpl @Autowired constructor(
    final var utilisateurRepository: UtillisateurRepository,
    var roleService: RoleServiceImpl,
    var ecoleService: EcoleServiceImpl,
    var villeService: VilleServiceImpl,
    var asService: ASServiceImpl,
    var noteService: NoteServiceImpl,
    var eleveService: EleveServiceImpl,
    var niveauClasseService: NiveauServiceImpl,
    var matiereService: MatiereServiceImpl,
    var tokenService: TokenServiceImpl,
) : UtilisateurService {
    var encoder = BCryptPasswordEncoder()

    init {
        if (utilisateurRepository.count().toInt() == 0) {
            signup(UtilisateurForSignup(0, "superadmin", "superadmin@gmail.com", "superadmin", 2, null))
        }
    }

    final override fun signup(utilisateur: UtilisateurForSignup): SignupResponse {
        //Verification
        var user = utilisateurRepository.findByEmailUtilisateur(utilisateur.emailUtilisateur)
        if (user.isEmpty()) {
            var role = roleService.getById(utilisateur.role)!!
            if (role.idRole == 1 && utilisateur.ecole == null) {
                return SignupResponse(
                    status = SignupReponseStatuses.SCHOOL_NOT_PRECISED,
                    message = "Veuillez preciser l'ecole de cet administrateur"
                )
            } else {

                val util = Utilisateur(
                    idUtilisateur = 0,
                    emailUtilisateur = utilisateur.emailUtilisateur,
                    nomUtilisateur = utilisateur.nomUtilisateur,
                    password = encoder.encode(utilisateur.password),
                    role = role,
                    ecole = if (utilisateur.ecole != null) ecoleService.getById(utilisateur.ecole!!)!! else null
                )
                try {
                    utilisateurRepository.save(util)
                    return SignupResponse(
                        status = SignupReponseStatuses.SUCCESS,
                        message = "Utilisateur ajouté avec succès !"
                    )
                } catch (t: Throwable) {
                    return SignupResponse(
                        status = SignupReponseStatuses.UNDEFINED,
                        message = "Une erreur s'est produite!${t.message}"
                    )
                }
            }
        } else {
            return SignupResponse(
                status = SignupReponseStatuses.ALREADY_EXIST,
                message = "Un utilisateur avec le même email existe deja !"
            )
        }

    }

    override fun login(utilisateurDTO: UtilisateurDTO): LoginResponse {
        //Recuperation de l'utilisateur
        var utilisateur = utilisateurRepository.findByEmailUtilisateur(utilisateurDTO.email)
        if (utilisateur.isEmpty()) {
            return LoginResponse(
                status = LoginResponsStatuses.EMAIL_INCORRECT,
                token = null,
                utilisateur = null,
                message = "Email incorrect"
            )
        } else {
            if (encoder.matches(utilisateurDTO.password, utilisateur[0].password)) {
                return LoginResponse(
                    status = LoginResponsStatuses.SUCCESS,
                    token = tokenService.generateToken(utilisateur[0].idUtilisateur),
                    utilisateur = utilisateur[0],
                    message = "Mot de passe incorrect"
                )
            } else {
                return LoginResponse(
                    status = LoginResponsStatuses.PASSWORD_INCORRECT,
                    token = null,
                    utilisateur = null,
                    message = "Mot de passe incorrect"
                )
            }
        }

    }

    override fun getAll(): MutableList<Utilisateur>? {
        return try {
            utilisateurRepository.findAll()
        } catch (t: Throwable) {
            null
        }
    }

    override fun getAllRole(): MutableList<Role>? {
        return roleService.getAll()
    }

    override fun getAdministratorEcole(id: Int): Ecole? {
        return try {
            utilisateurRepository.findById(id).get().ecole
        }catch (t:Throwable){
            null
        }
    }

    override fun getAllEcole(): MutableList<Ecole>? {
        return ecoleService.getAll()
    }

    override fun createEcole(ecole: EcoleForCreation): Ecole? {
        return ecoleService.create(ecole)
    }

    override fun addEleveToEcole(ecoleId: Int, eleve: EleveForCreation): Eleve? {
        return ecoleService.addEleve(ecoleId, eleve)
    }

    override fun getEcoleEleveList(ecoleId: Int): MutableList<Eleve>? {
        return ecoleService.getAllEleve(ecoleId)
    }

    override fun getEcoleEleveNotesByClasseAndAnnee(ecoleId: Int, classeId: Int, anneeId: Int): MutableList<Eleve>? {
        return ecoleService.getEcoleEleveNotesByClasseAndAnnee(ecoleId, classeId, anneeId)
    }

    override fun getAllVille(): MutableList<Ville>? {
        return villeService.getAll()
    }

    override fun createVille(ville: Ville): Ville? {
        return villeService.create(ville)
    }

    override fun getAllAS(): MutableList<AnneeScolaire>? {
        return asService.getAll()
    }

    override fun createAS(anneeScolaire: AnneeScolaire): AnneeScolaire? {
        return asService.create(anneeScolaire)
    }

    override fun getAllNiveauClasse(): MutableList<NiveauClasse>? {
        return niveauClasseService.getAll()
    }

    override fun createNiveauClasse(niveauClasse: NiveauClasse): NiveauClasse? {
        return niveauClasseService.create(niveauClasse)
    }

    override fun getAllNote(): MutableList<Note>? {
        return noteService.getAll()
    }

    override fun createNote(note: NoteForCreation): Note? {
        return noteService.create(note)
    }

    override fun getAllEleve(): MutableList<Eleve>? {
        return eleveService.getAll()
    }

    override fun createEleve(eleve: EleveForCreation): Eleve? {
        return eleveService.create(eleve)
    }

    override fun getAllMatiere(): MutableList<Matiere>? {
        return matiereService.getAll()
    }

    override fun createMatiere(matiere: MatiereForCreation): Matiere? {
        return matiereService.create(matiere)
    }
}