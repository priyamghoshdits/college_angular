import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {MemberService} from "../../../services/member.service";

@Component({
  selector: 'app-agent-student-entry',
  standalone: true,
    imports: [
        FormsModule,
        MatIconModule,
        NgForOf,
        NgIf,
        NgxPaginationModule,
        ReactiveFormsModule
    ],
  templateUrl: './agent-student-entry.component.html',
  styleUrl: './agent-student-entry.component.scss'
})
export class AgentStudentEntryComponent {
    agentForm: FormGroup;
    categoryList: any[];
    constructor(private memberService: MemberService) {
        this.agentForm = new FormGroup({
            id: new FormControl(null),
            first_name: new FormControl(null, [Validators.required]),
            last_name: new FormControl(null, [Validators.required]),
            mobile_no: new FormControl(null, [Validators.required]),
            category_id: new FormControl(null, [Validators.required]),
            email: new FormControl(null, [Validators.required]),
            commission_percentage: new FormControl(null),
            commission_flat: new FormControl(null),
        });

        this.memberService.getCategoryListener().subscribe((response) => {
            this.categoryList = response;
        });
        this.categoryList = this.memberService.getCategoryList();
    }
}
