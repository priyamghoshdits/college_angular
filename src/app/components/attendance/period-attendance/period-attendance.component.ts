import {Component} from '@angular/core';
import {SubjectService} from "../../../services/subject.service";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {StudentService} from "../../../services/student.service";
import Swal from "sweetalert2";
import {SessionService} from "../../../services/session.service";
import {retry} from "rxjs";

@Component({
    selector: 'app-period-attendance',
    standalone: true,
    imports: [
        FormsModule,
        MatIconModule,
        NgForOf,
        NgxPaginationModule,
        ReactiveFormsModule,
        NgIf,
    ],
    providers: [DatePipe],
    templateUrl: './period-attendance.component.html',
    styleUrl: './period-attendance.component.scss'
})
export class PeriodAttendanceComponent {
    attendanceForm: FormGroup;
    courseList: any[];
    semesterList: any[];
    subjectList: any[];
    classList: any[] = [];
    sessionList: any[];
    studentList: any[] = [];
    session_id = null;
    classStatus: any = null;
    p: number;
    markAllAsPresent = false;
    markAllAsAbsent = true;
    markAllAsLate = false;
    markAllAsHalfDay = false
    showList = true;
    topic_name = null;
    enableClass = false;
    latitude = null;
    longitude = null;

    constructor(private subjectService: SubjectService, private studentService: StudentService
        , private sessionService: SessionService, public datepipe: DatePipe) {
        this.attendanceForm = new FormGroup({
            id: new FormControl(null),
            course_id: new FormControl(null, [Validators.required]),
            semester_id: new FormControl(null, [Validators.required]),
            class: new FormControl(null),
            date: new FormControl(null, [Validators.required]),
            subject_id: new FormControl(null, [Validators.required]),
            session_id: new FormControl(null, [Validators.required]),
        });
        this.attendanceForm.patchValue({date: this.datepipe.transform(new Date(), 'yyyy-MM-dd')});
        this.subjectService.getCourseListener().subscribe((response) => {
            this.courseList = response;
        })
        this.courseList = this.subjectService.getCourses();

        this.sessionService.getSessionListener().subscribe((response) => {
            this.sessionList = response;
        });
        this.sessionList = this.sessionService.getSessionList();
        this.getLocation();
    }

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position: any) => {
                if (position) {
                    this.latitude = position.coords.latitude;
                    this.longitude = position.coords.longitude;
                }
            });
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }

    getSemester() {
        this.subjectService.getSemesterByCourseId(this.attendanceForm.value.course_id).subscribe((response: any) => {
            this.semesterList = response.data;
        })
    }

    markForAll(status) {
        this.studentList.forEach(function (value) {
            value.attendance = status;
        });
    }

    getSubject() {
        this.subjectService.getSubjects(this.attendanceForm.value.course_id, this.attendanceForm.value.semester_id).subscribe((response: any) => {
            this.subjectList = response.data;
        });
    }

    getClass(){
        this.subjectService.getClass(this.attendanceForm.value.subject_id, null).subscribe((response: any) => {
            if(response.success == 1){
                this.classList = response.data;
            }
        })
    }

    getStudentAttendanceList() {
        // @ts-ignore
        this.session_id = JSON.parse(localStorage.getItem('session_id'));
        this.attendanceForm.patchValue({session_id: this.session_id});

        if (!this.attendanceForm.valid) {
            this.attendanceForm.markAllAsTouched();
            return;
        }

        this.studentList = [];
        this.studentService.getStudentAttendanceNew(this.attendanceForm.value.course_id
            , this.attendanceForm.value.semester_id, this.attendanceForm.value.date
            , this.attendanceForm.value.subject_id
            , this.attendanceForm.value.session_id
            , this.attendanceForm.value.class
        ).subscribe((response: any) => {
            if (response.semester_time_table == 0) {
                Swal.fire({
                    title: 'Confirmation',
                    text: 'This subject class is not assigned today still want to give attendance ?',
                    icon: 'info',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.studentList = response.data;
                        this.classStatus = response.class_status;
                        this.enableClass = true;
                        // if(this.classStatus !== null){
                        // }
                        this.showList = false;
                        if (this.studentList.length == 0) {
                            Swal.fire({
                                position: 'center',
                                icon: 'info',
                                title: 'No Student Found',
                                showConfirmButton: false,
                                timer: 1000
                            });
                        }
                    }
                });
            } else {
                this.studentList = response.data;
                this.classStatus = response.class_status;
                if(this.classStatus !== null){
                    this.enableClass = true;
                }
                this.showList = false;
                if (this.studentList.length == 0) {
                    Swal.fire({
                        position: 'center',
                        icon: 'info',
                        title: 'No Student Found',
                        showConfirmButton: false,
                        timer: 1000
                    });
                }
            }
        });
    }

    updateClassStart() {
        this.studentService.updateClassStart(this.classStatus.id, this.latitude, this.longitude).subscribe((response: any) => {
            if (response.success == 1) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Class Started',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.classStatus = response.class_status;
            }
        });
    }

    updateClassEnd() {
        this.studentService.updateClassEnd(this.classStatus.id, this.latitude, this.longitude).subscribe((response: any) => {
            if (response.success == 1) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Class Ended',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.classStatus = response.class_status;
            }
        });
    }

    saveAttendance() {
        // @ts-ignore
        this.session_id = JSON.parse(localStorage.getItem('session_id'));
        this.attendanceForm.patchValue({session_id: this.session_id});

        if(this.topic_name == null){
            Swal.fire({
                position: 'center',
                icon: 'info',
                title: 'Please enter topic name',
                showConfirmButton: false,
                timer: 1000
            });
            return;
        }

        const topicName = this.topic_name;

        if (!this.session_id) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Select Session',
                showConfirmButton: false,
                timer: 1000
            });
            return;
        }
        let date = this.attendanceForm.value.date;
        let subject_id = this.attendanceForm.value.subject_id;
        let course_id = this.attendanceForm.value.course_id;
        let semester_id = this.attendanceForm.value.semester_id;
        let session_id = this.attendanceForm.value.session_id;
        let _class = this.attendanceForm.value.class;

        // console.log(_class);

        // return;

        this.studentList.forEach(function (value) {
            value.date = date;
            value.subject_id = subject_id;
            value.course_id = course_id;
            value.semester_id = semester_id;
            value.session_id = session_id;
            value._class = _class;
            value.topic_name = topicName;
        })
        this.studentService.saveStudentAttendance(this.studentList).subscribe((response: any) => {
            if (response.success == 1) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Attendance saved',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.classStatus = response.class_status;
                // this.attendanceForm.reset();
                this.studentList = [];
            }
        })
    }

}
