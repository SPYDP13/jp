import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { DemoMaterialModule } from '../demo-material-module';
import { CdkTableModule } from '@angular/cdk/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialRoutes } from './material.routing';

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
import {
  DialogComponent,
  DialogOverviewExampleDialogComponent
} from './dialog/dialog.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SliderComponent } from './slider/slider.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { EcolesComponent } from './ecoles/ecoles.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MaterialRoutes),
    DemoMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CdkTableModule,
    EcolesComponent,
    MatieresComponent,
    AnneeScolaireComponent,
    ClassesComponent,
    RolesComponent,
    UtilisateursComponent,
    VillesComponent,
    NotesComponent,
    ElevesComponent,
    ProgressSnipperComponent,
    ProgressComponent,
    DialogComponent,
    TooltipComponent,
    SnackbarComponent,
    SliderComponent,
    SlideToggleComponent
  ],
  providers: [],
})
export class MaterialComponentsModule {}
