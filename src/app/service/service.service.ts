import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipe } from 'src/_models/equipe.module';
import { Member } from 'src/_models/member.model';
import { Project } from 'src/_models/project.module';
import { Schedule } from 'src/_models/schedule.module';
import { SousProject } from 'src/_models/sousProject.module';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  userUrl="http://localhost:1123/asteel/equipe/";
  userUrl2="http://localhost:1123/asteel/member/";
  userUrl3="http://localhost:1123/asteel/projet/";
  userUrl4="http://localhost:1123/asteel/SousProjets/";
  userUrl5="http://localhost:1123/asteel/schedule/";

  newsApiUrlTechCrunch="https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=ee72ebff7866467a8f3d0c7c88e7c400";

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
  addSchedule(t:Schedule){
    return this.http.post<Schedule>(this.userUrl5+'addScheduleEntry' , t);
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
  getAllSchedule(){
    return this.http.get<Schedule[]>(this.userUrl5+'displayScheduleEntry');
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
  progressPourcentage(){
    return this.http.get(this.userUrl3+'displayresult');
  }
  leadPourcentage(){
    return this.http.get(this.userUrl3+'displayresultLead');
  }
  unassignMember(id:any,id1:any){
    return this.http.post(this.userUrl+'unassign'+`/${id1}`+`/${id}`,id);
  }
  getMostHardWorking(){
    return this.http.get<Equipe>(this.userUrl+'getMostHardWorking');
  }
  displayEquipewithoutMember(){
    return this.http.get<Equipe[]>(this.userUrl+'displayEquipewithoutMember');
  }
  displaySPwithoutTeam(){
    return this.http.get<SousProject[]>(this.userUrl4+'displaySPwithoutTeam');
  }
  techNews():Observable<any>{
    return this.http.get(this.newsApiUrlTechCrunch);
  }
  deleteProject(id:number){
    return this.http.delete(this.userUrl3+'deleteProjets'+`/${id}`);
  }
}
