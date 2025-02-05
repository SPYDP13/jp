import { Routes } from '@angular/router';
import { MatieresComponent } from './matieres/matieres.component';
import { AnneeScolaireComponent } from './annee-scolaire/annee-scolaire.component';
import { ClassesComponent } from './classes/classes.component';
import { RolesComponent } from './roles/roles.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { VillesComponent } from './villes/villes.component';
import { NotesComponent } from './notes/notes.component';
import { ElevesComponent } from './eleves/eleves.component';
import { ProgressSnipperComponent } from './progress-snipper/progress-snipper.component';
import { ProgressComponent } from './progress/progress.component';
import { DialogComponent } from './dialog/dialog.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SliderComponent } from './slider/slider.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { EcolesComponent } from './ecoles/ecoles.component';
import { AddEleveComponent } from './eleves/add-eleve/add-eleve.component';
import { DeleteEleveComponent } from './eleves/delete-eleve/delete-eleve.component';

export const MaterialRoutes: Routes = [
  {
    path: 'ecoles',
    component: EcolesComponent
  },
  {
    path: 'matieres',
    component: MatieresComponent
  },
  {
    path: 'annee-scolaire',
    component: AnneeScolaireComponent
  },
  {
    path: 'classes',
    component: ClassesComponent
  },
  {
    path: 'roles',
    component: RolesComponent
  },
  {
    path: 'utilisateurs',
    component: UtilisateursComponent
  },
  {
    path: 'villes',
    component: VillesComponent
  },
  {
    path: 'notes',
    component: NotesComponent
  },
  {
    path: 'eleves',
    component: ElevesComponent
  },
  {
    path: 'add-eleve',
    component: AddEleveComponent
  },
  {
    path: 'delete-eleve',
    component: DeleteEleveComponent
  },
  {
    path: 'progress-snipper',
    component: ProgressSnipperComponent
  },
  {
    path: 'progress',
    component: ProgressComponent
  },
  {
    path: 'dialog',
    component: DialogComponent
  },
  {
    path: 'tooltip',
    component: TooltipComponent
  },
  {
    path: 'snackbar',
    component: SnackbarComponent
  },
  {
    path: 'slider',
    component: SliderComponent
  },
  {
    path: 'slide-toggle',
    component: SlideToggleComponent
  }
];
