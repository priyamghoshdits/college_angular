import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {MemberService} from "../../../services/member.service";
import {SubjectService} from "../../../services/subject.service";

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
    studentForm: FormGroup;
    categoryList: any[];
    courseList: any[];
    semesterList: any[];
    constructor(private memberService: MemberService, private subjectService: SubjectService) {
        this.studentForm = new FormGroup({
            id: new FormControl(null),
            first_name: new FormControl(null, [Validators.required]),
            middle_name: new FormControl(null, [Validators.required]),
            last_name: new FormControl(null, [Validators.required]),
            mobile_no: new FormControl(null, [Validators.required]),
            admission_status: new FormControl(0),
            qualification: new FormControl(null, [Validators.required]),
            current_address: new FormControl(null, [Validators.required]),
            permanent_address: new FormControl(null, [Validators.required]),
            category_id: new FormControl(null, [Validators.required]),
            email: new FormControl(null, [Validators.required]),
            course_id: new FormControl(null),
            semester_id: new FormControl(null),
            agent_id: new FormControl(null),
        });

        this.memberService.getCategoryListener().subscribe((response) => {
            this.categoryList = response;
        });
        this.categoryList = this.memberService.getCategoryList();

        this.subjectService.getCourseListener().subscribe((response) => {
            this.courseList = response;
        });
        this.courseList = this.subjectService.getCourses();
    }

    getSemester(){
        this.subjectService.getSemesterByCourseId(this.studentForm.value.course_id).subscribe((response) => {
            // @ts-ignore
            this.semesterList = response.data;
        })
    }
}
