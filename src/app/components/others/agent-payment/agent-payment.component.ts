import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {AgentService} from "../../../services/agent.service";
import {AgentPaymentService} from "../../../services/agent-payment.service";
import Swal from "sweetalert2";
import {RolesAndPermissionService} from "../../../services/roles-and-permission.service";

@Component({
  selector: 'app-agent-payment',
  standalone: true,
    imports: [
        FormsModule,
        MatIconModule,
        NgForOf,
        NgIf,
        NgxPaginationModule,
        ReactiveFormsModule
    ],
  templateUrl: './agent-payment.component.html',
  styleUrl: './agent-payment.component.scss'
})
export class AgentPaymentComponent {
    paymentForm: FormGroup;
    agentList: any[];
    isUpdatable = false;
    paymentList: any[] = [];
    p: number;
    rolesAndPermission: any[] = [];
    permission: any[] = [];
    constructor(private agentService: AgentService, private agentPaymentService: AgentPaymentService
                ,private roleAndPermissionService: RolesAndPermissionService) {
        this.paymentForm = new FormGroup({
            id: new FormControl(null),
            user_id: new FormControl(null, [Validators.required]),
            transaction_no: new FormControl(null, [Validators.required]),
            mode: new FormControl(null, [Validators.required]),
            date: new FormControl(null, [Validators.required]),
            total_amount: new FormControl(null),
            due_amount: new FormControl(null),
            amount: new FormControl(null, [Validators.required]),
        });

        this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
            this.rolesAndPermission = response;
            this.permission = this.rolesAndPermission.find(x => x.name == 'AGENT PAYMENT').permission;
        });
        this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
        if(this.rolesAndPermission.length > 0){
            this.permission = this.rolesAndPermission.find(x => x.name == 'AGENT PAYMENT').permission;
        }

        this.agentPaymentService.getPaymentListListener().subscribe((response) => {
            this.paymentList = response;
        });
        this.paymentList = this.agentPaymentService.getPaymentList();

        this.agentService.getAgentListListener().subscribe((response) => {
            this.agentList = response;
        });
        this.agentList = this.agentService.getAgentList();
    }

    getAgentData(){
        this.paymentForm.controls['total_amount'].reset();
        this.paymentForm.controls['due_amount'].reset();
        if(this.paymentForm.value.user_id == null){
            return;
        }
        this.agentPaymentService.getAgentDetails(this.paymentForm.value.user_id).subscribe((response: any) => {
            if(response.success == 1){
                this.paymentForm.patchValue({total_amount: response.data.total_commission, due_amount: response.data.due_amount});
            }
        })
    }

    saveAgentPayment(){
        if(!this.paymentForm.valid){
            this.paymentForm.markAllAsTouched();
            return;
        }
        if(this.paymentForm.value.due_amount < this.paymentForm.value.amount){
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Amount cannot be greater than due amount',
                showConfirmButton: false,
                timer: 1000
            });
            return;
        }
        this.agentPaymentService.saveAgentPayment(this.paymentForm.value).subscribe((response: any) => {
            if(response.success == 1){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Paid SuccessFully',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.paymentForm.reset();
                this.agentService.getUpdatedAgents();
            }
        })
    }

    updateAgentPayment(){
        if(!this.paymentForm.valid){
            this.paymentForm.markAllAsTouched();
            return;
        }
        this.agentPaymentService.updateAgentPayment(this.paymentForm.value).subscribe((response: any) => {
            if(response.success == 1){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Updated SuccessFully',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.cancelUpdate();
                this.agentService.getUpdatedAgents();
            }
        })
    }

    cancelUpdate(){
        this.paymentForm.reset();
        this.isUpdatable = false;
    }

    editPayment(data){
        this.paymentForm.patchValue(data);
        this.getAgentData();
        this.isUpdatable = true;
    }

    deletePayment(data){
        Swal.fire({
            title: 'Confirmation',
            text: 'Do you sure to delete Payment ?',
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete It!'
        }).then((result) => {
           if(result.isConfirmed){
               this.paymentForm.reset();
               this.agentPaymentService.deleteAgentPayment(data.id).subscribe((response: any) => {
                   if(response.success == 1){
                       Swal.fire({
                           position: 'center',
                           icon: 'success',
                           title: 'Deleted SuccessFully',
                           showConfirmButton: false,
                           timer: 1000
                       });
                       this.agentService.getUpdatedAgents();
                   }
               })
           }
        });

    }

}
