import {Component} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {StudentService} from "../../../services/student.service";
import {SubjectService} from "../../../services/subject.service";
import Swal from "sweetalert2";
import {MemberService} from "../../../services/member.service";

@Component({
    selector: 'app-show-attendance',
    standalone: true,
    imports: [
        FormsModule,
        NgForOf,
        NgxPaginationModule,
        ReactiveFormsModule,
        NgIf
    ],
    providers: [DatePipe],
    templateUrl: './show-attendance.component.html',
    styleUrl: './show-attendance.component.scss'
})
export class ShowAttendanceComponent {
    attendanceForm: FormGroup;
    semesterList: any[];
    courseList: any[];
    subjectList: any[];
    studentList: any[];
    memberList: any[];
    copyStudentList: any[];
    attendanceList: any[] = [];
    isSuperAdmin = false;

    constructor(private subjectService: SubjectService
                , private studentService: StudentService
                , public datepipe: DatePipe
                , private memberService: MemberService) {
        let user = JSON.parse(localStorage.getItem('user') || '{}');
        this.attendanceForm = new FormGroup({
            id: new FormControl(null),
            course_id: new FormControl(null, [Validators.required]),
            semester_id: new FormControl(null, [Validators.required]),
            date: new FormControl(null, [Validators.required]),
            student_id: new FormControl(null),
            member_id: new FormControl(null),
        });

        this.memberService.getMemberListener().subscribe((response) => {
            this.memberList = response;
        });
        this.memberList = this.memberService.getMemberList();

        if (user.user_type_id == 1) {
            this.studentService.getStudentListener().subscribe((response) => {
                this.studentList = response;
            });
            this.studentList = this.studentService.getStudentLists();
            this.isSuperAdmin = true;
            this.attendanceForm.patchValue({date: this.datepipe.transform(new Date(), 'yyyy-MM-dd')});
        } else {
            this.studentService.getStudentListener().subscribe((response) => {
                this.studentList = response;
                this.attendanceForm.patchValue(this.studentList.find(x => x.id == user.id));
                this.attendanceForm.patchValue({student_id: this.studentList.find(x => x.id == user.id).id});
                this.attendanceForm.patchValue({date: this.datepipe.transform(new Date(), 'yyyy-MM-dd')});
            });
            this.studentList = this.studentService.getStudentLists();
            if (this.studentList.length > 0) {
                this.attendanceForm.patchValue(this.studentList.find(x => x.id == user.id));
                this.attendanceForm.patchValue({student_id: this.studentList.find(x => x.id == user.id).id});
                this.attendanceForm.patchValue({date: this.datepipe.transform(new Date(), 'yyyy-MM-dd')});
            }
        }

        this.subjectService.getCourseListener().subscribe((response) => {
            this.courseList = response;
        })
        this.courseList = this.subjectService.getCourses();
    }

    getSemester() {
        this.subjectService.getSemesterByCourseId(this.attendanceForm.value.course_id).subscribe((response: any) => {
            this.semesterList = response.data;
        })
    }

    getStudents() {
        this.copyStudentList = this.studentList.filter(x => x.course_id == this.attendanceForm.value.course_id);
        this.copyStudentList = this.copyStudentList.filter(x => x.semester_id == this.attendanceForm.value.semester_id);
    }


    getStudentAttendanceList() {
        if (!this.attendanceForm.valid) {
            this.attendanceForm.markAllAsTouched();
            return;
        }
        this.studentList = [];
        this.studentService.getUserAttendance(this.attendanceForm.value.course_id
            , this.attendanceForm.value.semester_id
            , this.attendanceForm.value.date
            , this.attendanceForm.value.student_id
            , this.attendanceForm.value.member_id
        ).subscribe((response: any) => {
                this.attendanceList = response.data;
                if (this.attendanceList.length == 0) {
                    Swal.fire({
                        position: 'center',
                        icon: 'info',
                        title: 'No Attendance Found',
                        showConfirmButton: false,
                        timer: 1000
                    });
                }
            });
    }

}
