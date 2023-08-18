import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateAdminComponent } from './all-template-admin/all-template-admin.component';
import { AddProjetComponent } from './add-projet/add-projet.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { AddEquipeComponent } from './add-equipe/add-equipe.component';
import { EquipeComponent } from './equipe/equipe.component';
import { ProjetComponent } from './projet/projet.component';
import { UpdateProjetComponent } from './update-projet/update-projet.component';
import { AddSousProjectComponent } from './add-sous-project/add-sous-project.component';
import { AssignMemberComponent } from './assign-member/assign-member.component';
import { EquipeDetailsComponent } from './equipe-details/equipe-details.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { SousProjectComponent } from './sous-project/sous-project.component';
import { AssignTeamComponent } from './assign-team/assign-team.component';

const routes: Routes = [
  {
    path:'admin',
    component:AllTemplateAdminComponent,
    children:[
      {
        path:'addProject',
        component:AddProjetComponent
      },
      {
        path:'addMember',
        component:AddMemberComponent
      },
      {
        path:'addEquipe',
        component:AddEquipeComponent
      },
      {
        path:'equipe',
        component:EquipeComponent
      },
      {
        path:'project',
        component:ProjetComponent
      },
      {
        path:'updateProject',
        component:UpdateProjetComponent
      },
      {
        path:'createSProject',
        component:AddSousProjectComponent
      },
      {
        path:'assignMember',
        component:AssignMemberComponent
      },
      {
        path:'equipeDetails',
        component:EquipeDetailsComponent
      },
      {
        path:'projectDetails',
        component:ProjectDetailsComponent
      },
      {
        path:'sousproject',
        component:SousProjectComponent
      },
      {
        path:'assignTeam',
        component:AssignTeamComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
