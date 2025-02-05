import { Injectable } from '@angular/core';
import { PermissionServicesService } from 'src/app/services/Permission/permission-services.service';

export interface Menu {
  permission:string,
  state: string;
  name: string;
  type: string;
  icon: string;
}

// const MENUITEMS = [
//   { state: 'dashboard', name: 'Dashboard', type: 'link', icon: 'av_timer' },
//   { state: 'button', type: 'link', name: 'Buttons', icon: 'crop_7_5' },
//   { state: 'grid', type: 'link', name: 'Grid List', icon: 'view_comfy' },
//   { state: 'lists', type: 'link', name: 'Lists', icon: 'view_list' },
//   { state: 'menu', type: 'link', name: 'Menu', icon: 'view_headline' },
//   { state: 'tabs', type: 'link', name: 'Tabs', icon: 'tab' },
//   { state: 'stepper', type: 'link', name: 'Stepper', icon: 'web' },
//   { state: 'expansion', type: 'link', name: 'Expansion Panel', icon: 'vertical_align_center' },
//   { state: 'chips', type: 'link', name: 'Chips', icon: 'vignette' },
//   { state: 'toolbar', type: 'link', name: 'Toolbar', icon: 'voicemail' },
//   { state: 'progress-snipper', type: 'link', name: 'Progress snipper', icon: 'border_horizontal' },
//   { state: 'progress', type: 'link', name: 'Progress Bar', icon: 'blur_circular' },
//   { state: 'dialog', type: 'link', name: 'Dialog', icon: 'assignment_turned_in' },
//   { state: 'tooltip', type: 'link', name: 'Tooltip', icon: 'assistant' },
//   { state: 'snackbar', type: 'link', name: 'Snackbar', icon: 'adb' },
//   { state: 'slider', type: 'link', name: 'Slider', icon: 'developer_mode' },
//   { state: 'slide-toggle', type: 'link', name: 'Slide Toggle', icon: 'all_inclusive' }
// ];
const MENUITEMS = [
  { permission: PermissionServicesService.DashboardMenu, state: 'dashboard', type: 'link', name: 'Dashboard', icon: 'av_timer' },
  { permission: PermissionServicesService.EcoleMenu, state: 'ecoles', type: 'link', name: 'Ecoles', icon: 'school' },
  { permission: PermissionServicesService.MatiereMenu, state: 'matieres', type: 'link', name: 'Matières', icon: 'view_comfy' },
  { permission: PermissionServicesService.AnneeMenu, state: 'annee-scolaire', type: 'link', name: 'Année scolaire', icon: 'calendar_today' },
  { permission: PermissionServicesService.ClasseMenu, state: 'classes', type: 'link', name: 'Classe', icon: 'escalator' },
  { permission: PermissionServicesService.RoleMenu, state: 'roles', type: 'link', name: 'Roles', icon: 'group_work' },
  { permission: PermissionServicesService.UtilisateurMenu, state: 'utilisateurs', type: 'link', name: 'Utilisateurs', icon: 'people' },
  { permission: PermissionServicesService.VilleMenu, state: 'villes', type: 'link', name: 'Villes', icon: 'location_city' },
  { permission: PermissionServicesService.NoteMenu, state: 'notes', type: 'link', name: 'Notes', icon: 'markunread_mailbox' },
  { permission: PermissionServicesService.EleveMenu, state: 'eleves', type: 'link', name: 'Eleves', icon: 'people' },
  { permission: PermissionServicesService.MonEcoleMenu, state: 'mon-ecole', type: 'link', name: 'Mon école', icon: 'school' },
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
