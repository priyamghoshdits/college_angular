import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {AgentService} from "../../../services/agent.service";
import {AgentPaymentService} from "../../../services/agent-payment.service";
import Swal from "sweetalert2";

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
    constructor(private agentService: AgentService, private agentPaymentService: AgentPaymentService) {
        this.paymentForm = new FormGroup({
            id: new FormControl(null),
            user_id: new FormControl(null, [Validators.required]),
            transaction_no: new FormControl(null, [Validators.required]),
            mode: new FormControl(null, [Validators.required]),
            date: new FormControl(null, [Validators.required]),
            total_amount: new FormControl(null),
            amount: new FormControl(null, [Validators.required]),
        });

        this.agentService.getAgentListListener().subscribe((response) => {
            this.agentList = response;
        });
        this.agentList = this.agentService.getAgentList();
    }

    getAgentData(){
        this.agentPaymentService.getAgentDetails(this.paymentForm.value.user_id).subscribe((response: any) => {
            if(response.success == 1){
                this.paymentForm.patchValue({total_amount: response.data.total_commission});
            }
        })
    }

    saveAgentPayment(){
        this.agentPaymentService.saveAgentPayment(this.paymentForm.value).subscribe((response: any) => {
            if(response.success == 1){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Paid SuccessFully',
                    showConfirmButton: false,
                    timer: 1000
                });
            }
        })
    }

}
