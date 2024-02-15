import { Component } from '@angular/core';
import {AgentService} from "../../../services/agent.service";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";

@Component({
  selector: 'app-agent-student-list',
  standalone: true,
  imports: [
    FormsModule,
    MatIconModule,
    NgForOf,
    NgIf,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  templateUrl: './agent-student-list.component.html',
  styleUrl: './agent-student-list.component.scss'
})
export class AgentStudentListComponent {

  agentForm: FormGroup;
  studentList: any[] = [];
  isUpdatable = true;
  agentList: any[];
  isSuperAdmin = false;
  constructor(private agentService: AgentService) {
    this.agentForm = new FormGroup({
      id: new FormControl(null),
    });
    let user = JSON.parse(localStorage.getItem('user') || '{}');

    if(user.user_type_id == 1){
      this.isSuperAdmin = true;
      this.agentService.getAgentListListener().subscribe((response) => {
        this.agentList = response;
      })
      this.agentList = this.agentService.getAgentList();
    }else{
      this.agentForm.patchValue(user);
      this.isSuperAdmin = false;
      this.getStudentListByAgent();
    }
  }

  getStudentListByAgent(){
    this.agentService.getStudentByAgentId(this.agentForm.value.id).subscribe((response) => {
      // @ts-ignore
      if(response.success == 1){
        // @ts-ignore
        this.studentList = response.data;
      }
    });
  }

}
