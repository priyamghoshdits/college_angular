import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {StudentService} from "../../../services/student.service";
import {NgForOf, NgIf} from "@angular/common";

@Component({
    selector: 'app-student-profile',
    standalone: true,
    imports: [
        NgIf,
        NgForOf
    ],
    templateUrl: './student-profile.component.html',
    styleUrl: './student-profile.component.scss'
})
export class StudentProfileComponent {

    student_details: any = null;
    achievement: any[];
    placement: any[];
    education_qualification: any;

    constructor(private route: ActivatedRoute, private studentService: StudentService) {
        this.route.params.subscribe(params => {
            this.studentService.getSingleStudentFullDetails(params['id']).subscribe((response: any) => {
                if (response.success == 1) {
                    this.student_details = response.student_data;
                    this.achievement = response.achievement;
                    this.placement = response.placement;
                    this.education_qualification = response.education_qualification;
                }
            })
        });
    }

    ngOnInit(): void {

    }
}
