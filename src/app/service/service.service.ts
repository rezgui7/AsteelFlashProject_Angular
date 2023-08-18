import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipe } from 'src/_models/equipe.module';
import { Member } from 'src/_models/member.model';
import { Project } from 'src/_models/project.module';
import { SousProject } from 'src/_models/sousProject.module';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  userUrl="http://localhost:1123/asteel/equipe/";
  userUrl2="http://localhost:1123/asteel/member/";
  userUrl3="http://localhost:1123/asteel/projet/";
  userUrl4="http://localhost:1123/asteel/SousProjets/";


  constructor(private http:HttpClient) { }

  addProject(t:Project){
    return this.http.post<Project>(this.userUrl3+'addProjets' , t);
  } 
  addEquipe(t:Equipe){
    return this.http.post<Equipe>(this.userUrl+'addEquipe' , t);
  }
  addSousProject(t:SousProject,id:number){
    return this.http.post<SousProject>(this.userUrl4+'addSousProjet'+`/${id}` , t);
  } 
  addMember(t:Member){
    return this.http.post<Member>(this.userUrl2+'addEquipeMember' , t);
  } 
  getAllProjects(){
    return this.http.get<Project[]>(this.userUrl3+'displayProjets');
  }
  getProjectById(id:number){
    return this.http.get<Project>(this.userUrl3+'displayProjetsByID'+`/${id}`);
  }
  getEquipeById(id:number){
    return this.http.get<Equipe>(this.userUrl+'displayEquipeByID'+`/${id}`);
  }
  getAllEquipes(){
    return this.http.get<Equipe[]>(this.userUrl+'displayEquipe');
  }
  getAllMembers(){
    return this.http.get<Member[]>(this.userUrl2+'displayEquipeMember');
  }
  updateProject(p:Project): Observable<Object>{
    return this.http.put(this.userUrl3+'updateProjets', p);
  }
  assignMember(id:any,id1:any){
    return this.http.post(this.userUrl+'assignMember'+`/${id1}`+`/${id}`,id);
  }
  assignTeamToProject(id1:any,id:any){
    return this.http.post(this.userUrl4+'assignEquipe'+`/${id1}`+`/${id}`,id);
  }
  displaySousProjetsWithProjetID(id:any){
    return this.http.get<SousProject[]>(this.userUrl4+'displaySousProjetsByProjetID'+`/${id}`);
  }
  displayMemberWithTeamID(id:any){
    return this.http.get<Member[]>(this.userUrl+'displayMemberByEquipeID'+`/${id}`);
  }
  test(id:any){
    return this.http.get(this.userUrl2+'test'+`/${id}`);
  }
  unassignMember(id:any,id1:any){
    return this.http.post(this.userUrl+'unassign'+`/${id1}`+`/${id}`,id);
  }
}