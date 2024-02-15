import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {AgentService} from "../../../services/agent.service";
import Swal from "sweetalert2";
import {MemberService} from "../../../services/member.service";
import {RolesAndPermissionService} from "../../../services/roles-and-permission.service";

@Component({
  selector: 'app-agent',
  standalone: true,
  imports: [
    FormsModule,
    MatIconModule,
    NgForOf,
    NgxPaginationModule,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './agent.component.html',
  styleUrl: './agent.component.scss'
})
export class AgentComponent {
  agentForm: FormGroup;
  isUpdatable = false;
  agentList: any[];
  p: number;
  studentList: any[];
  categoryList: any[];
  showStudentList = false;
  rolesAndPermission: any[] = [];
  permission: any[] = [];
  selectedAgent: { name,first_name,last_name,mobile_no,email,commission_percentage,commission_flat };

  constructor(private agentService: AgentService, private memberService: MemberService, private roleAndPermissionService: RolesAndPermissionService) {
    this.agentForm = new FormGroup({
      id: new FormControl(null),
      first_name: new FormControl(null, [Validators.required]),
      last_name: new FormControl(null, [Validators.required]),
      mobile_no: new FormControl(null, [Validators.required]),
      category_id: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      commission_percentage: new FormControl(null),
      commission_flat: new FormControl(null),
    });

    let user = JSON.parse(localStorage.getItem('user') || '{}');

    this.agentService.getAgentListListener().subscribe((response) => {
      this.agentList = response;
      if(user.user_type_id != 1){
        this.agentList = this.agentList.filter(x => x.id == user.id)
      }
    });
    this.agentList = this.agentService.getAgentList();
    if(user.user_type_id != 1 && this.agentList.length > 0){
      this.agentList = this.agentList.filter(x => x.id == user.id)
    }


    this.memberService.getCategoryListener().subscribe((response) => {
      this.categoryList = response;
    });
    this.categoryList = this.memberService.getCategoryList();

    this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
      this.rolesAndPermission = response;
      this.permission = this.rolesAndPermission.find(x => x.name == 'AGENT').permission;
    });
    this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
    if(this.rolesAndPermission.length > 0){
      this.permission = this.rolesAndPermission.find(x => x.name == 'AGENT').permission;
    }
  }

  saveAgent(){
    if(!this.agentForm.valid){
      this.agentForm.markAllAsTouched();
      return;
    }
    if(this.agentForm.value.commission_flat == ""){
      this.agentForm.patchValue({commission_flat: null});
    }
    if(this.agentForm.value.commission_percentage == ""){
      this.agentForm.patchValue({commission_percentage: null});
    }
    if((this.agentForm.value.commission_percentage != null) && (this.agentForm.value.commission_flat != null)){
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Enter any one Commission type',
        showConfirmButton: false,
        timer: 1000
      });
      return;
    }

    this.agentService.saveAgent(this.agentForm.value).subscribe((response) => {
      // @ts-ignore
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Agent saved',
          showConfirmButton: false,
          timer: 1000
        });
        this.agentForm.reset();
      }
    })
  }

  updateAgent(){
    this.agentService.updateAgent(this.agentForm.value).subscribe((response) => {
      // @ts-ignore
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Agent updated',
          showConfirmButton: false,
          timer: 1000
        });
        this.cancelUpdate();
      }
    })
  }

  getStudentListByAgent(data){
    this.agentService.getStudentByAgentId(data.id).subscribe((response) => {
      // @ts-ignore
      if(response.success == 1){
        // @ts-ignore
        this.studentList = response.data;
        this.showStudentList = true;
      }
    });
    this.selectedAgent = this.agentList.find(x => x.id == data.id);
  }

  returnBack(){
    this.showStudentList = false;
    this.studentList = [];
  }

  cancelUpdate(){
    this.agentForm.reset();
    this.isUpdatable = false;
  }

  editAgent(data){
    this.agentForm.patchValue(data);
    this.isUpdatable = true;
  }

  deleteAgent(data){
    Swal.fire({
      title: 'Confirmation',
      text: 'Do you sure to delete agent ?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete It!'
    }).then((result) => {
      if(result.isConfirmed){
        this.agentService.deleteFeesType(data.id).subscribe((response) => {
          // @ts-ignore
          if(response.success == 1){
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Agent Deleted',
              showConfirmButton: false,
              timer: 1000
            });
          }
        })
      }
    });
  }

}
