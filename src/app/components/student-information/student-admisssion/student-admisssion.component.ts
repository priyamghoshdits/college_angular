import { Component } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import { NgForOf, NgIf } from "@angular/common";
import { NgbNav, NgbNavItem, NgbNavLink, NgbNavLinkBase, NgbNavOutlet } from "@ng-bootstrap/ng-bootstrap";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MemberService } from "../../../services/member.service";
import { SubjectService } from "../../../services/subject.service";
import { SessionService } from "../../../services/session.service";
import { StudentService } from "../../../services/student.service";
import Swal from "sweetalert2";
import { ImageService } from "../../../services/image.service";
import { AgentService } from "../../../services/agent.service";
import { CustomFilterPipe } from "custom-filter.pipe";
import { CommonService } from "../../../services/common.service";
import { RolesAndPermissionService } from "../../../services/roles-and-permission.service";
import { FranchiseService } from "../../../services/franchise.service";
import { RouterLink } from "@angular/router";
import * as XLSX from 'xlsx';
import { MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious } from "@angular/material/stepper";
import { MatFormField, MatInput, MatLabel } from "@angular/material/input";
import { MatButton } from "@angular/material/button";

@Component({
    selector: 'app-student-admisssion',
    standalone: true,
    imports: [
        MatIconModule,
        NgForOf,
        NgbNav,
        NgbNavLink,
        NgbNavLinkBase,
        ReactiveFormsModule,
        NgbNavOutlet,
        NgbNavItem,
        FormsModule,
        CustomFilterPipe,
        NgIf,
        RouterLink,
        MatStepper,
        MatStep,
        MatStepLabel,
        MatInput,
        MatButton,
        MatStepperNext,
        MatFormField,
        MatLabel,
        MatStepperPrevious,
    ],
    templateUrl: './student-admisssion.component.html',
    styleUrl: './student-admisssion.component.scss'
})
export class StudentAdmisssionComponent {
    studentCreationForm: FormGroup;
    studentCreationForm1: FormGroup;
    studentCreationForm2: FormGroup;
    studentCreationForm3: FormGroup;
    studentCreationForm4: FormGroup;
    public active = 1;
    categoryList: any[];
    courseList: any[];
    semesterList: any[];
    sessionList: any[];
    isUpdateable = false;
    studentList: any[];
    nonAdmittedStudents: any[];
    disabledStudents: any[];
    agentList: any[];
    searchItem: string;
    rolesAndPermission: any[] = [];
    permission: any[] = [];
    franchiseList: any[];
    session_id = null;
    profile_image = null;
    dob_proof: null;
    blood_group_proof: null;
    aadhaar_card_proof: null;
    registration_no_proof: null;
    admission_slip: null;
    father_income_proof: null;
    mother_income_proof: null;
    isLinear = false;

    maxSize = 1 * 1024 * 1024; // 1 MB in bytes

    abcFile: File;
    studentSignatureFile: File;
    admissionLetterFile: File;

    userId = '';
    user: {
        user_type_id: number;
    };

    constructor(private memberService: MemberService, private subjectService: SubjectService
        , private sessionService: SessionService, private studentService: StudentService
        , private imageService: ImageService, private agentService: AgentService
        , private commonService: CommonService, private roleAndPermissionService: RolesAndPermissionService
        , private franchiseService: FranchiseService) {
        this.user = JSON.parse(localStorage.getItem('user') || '{}');

        this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
            this.rolesAndPermission = response;
            this.permission = this.rolesAndPermission.find(x => x.name == 'STUDENT ADMISSION').permission;
        });
        this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
        if (this.rolesAndPermission.length > 0) {
            this.permission = this.rolesAndPermission.find(x => x.name == 'STUDENT ADMISSION').permission;
        }

        // this.studentCreationForm1 = new FormGroup({
        //     id: new FormControl(null),
        //     identification_no: new FormControl(null),
        //     roll_no: new FormControl(null),
        //     registration_no: new FormControl(null),
        //     first_name: new FormControl(null, [Validators.required]),
        //     middle_name: new FormControl(null),
        //     last_name: new FormControl(null, [Validators.required]),
        //     gender: new FormControl(null, [Validators.required]),
        //     dob: new FormControl(null, [Validators.required]),
        //     admission_date: new FormControl(null, [Validators.required]),
        //     mobile_no: new FormControl(null, [Validators.required, Validators.pattern("[0-9]{10}")]),
        //     emergency_phone_number: new FormControl(null, [Validators.required, Validators.pattern("[0-9]{10}")]),
        //     material_status: new FormControl(null),
        //     admission_status: new FormControl(null),
        //     current_address: new FormControl(null, [Validators.required]),
        //     permanent_address: new FormControl(null, [Validators.required]),
        //     religion: new FormControl(null),
        //     blood_group: new FormControl(null),
        //     category_id: new FormControl(null, [Validators.required]),
        //     email: new FormControl(null, [Validators.required, Validators.email]),
        //     course_id: new FormControl(null, [Validators.required]),
        //     semester_id: new FormControl(null, [Validators.required]),
        //     agent_id: new FormControl(null),
        //     abc_id: new FormControl(null),
        //     franchise_id: new FormControl(null)
        // });

        this.studentCreationForm2 = new FormGroup({
            image: new FormControl(null),
            dob_proof: new FormControl(null),
            blood_group_proof: new FormControl(null),
            admission_slip: new FormControl(null),
            aadhaar_card_proof: new FormControl(null),
            // father_income_proof: new FormControl(null),
            // mother_income_proof: new FormControl(null),
            abc_id: new FormControl(null),
            mother_income_proof: new FormControl(null),
            registration_proof: new FormControl(null),
            abc_file: new FormControl(null),
            student_signature: new FormControl(null),
            admission_allotment: new FormControl(null),
        });

        this.studentCreationForm3 = new FormGroup({
            payment_date: new FormControl(null, [Validators.required]),
            mode_of_payment: new FormControl(null, [Validators.required]),
            transaction_id: new FormControl(null, [Validators.required]),
            caution_money: new FormControl(null, [Validators.required, Validators.pattern("^[0-9]*$")]),
        });

        this.studentCreationForm4 = new FormGroup({
            father_name: new FormControl(null),
            father_phone: new FormControl(null, [Validators.pattern("[0-9]{10}")]),
            father_occupation: new FormControl(null),
            mother_name: new FormControl(null),
            mother_phone: new FormControl(null, [Validators.pattern("[0-9]{10}")]),
            mother_occupation: new FormControl(null),
            guardian_name: new FormControl(null),
            guardian_phone: new FormControl(null, [Validators.pattern("[0-9]{10}")]),
            guardian_email: new FormControl(null, [Validators.email]),
            guardian_relation: new FormControl(null),
            guardian_occupation: new FormControl(null),
            guardian_address: new FormControl(null),
        });

        this.studentCreationForm = new FormGroup({
            id: new FormControl(null),
            identification_no: new FormControl(null),
            roll_no: new FormControl(null),
            registration_no: new FormControl(null),
            first_name: new FormControl(null, [Validators.required]),
            middle_name: new FormControl(null),
            last_name: new FormControl(null, [Validators.required]),
            gender: new FormControl(null, [Validators.required]),
            dob: new FormControl(null, [Validators.required]),
            admission_date: new FormControl(null, [Validators.required]),
            // image: new FormControl(null),
            mobile_no: new FormControl(null, [Validators.required, Validators.pattern("[0-9]{10}")]),
            emergency_phone_number: new FormControl(null, [Validators.required, Validators.pattern("[0-9]{10}")]),
            material_status: new FormControl(null),
            admission_status: new FormControl(null),
            current_address: new FormControl(null, [Validators.required]),
            permanent_address: new FormControl(null, [Validators.required]),
            religion: new FormControl(null),
            blood_group: new FormControl(null),
            category_id: new FormControl(null, [Validators.required]),
            email: new FormControl(null, [Validators.required, Validators.email]),
            course_id: new FormControl(null, [Validators.required]),
            semester_id: new FormControl(null, [Validators.required]),
            agent_id: new FormControl(null),
            abc_id: new FormControl(null),
            franchise_id: new FormControl(null),
            // session_id: new FormControl(null, [Validators.required]),
        });

        this.franchiseService.getFranchiseListener().subscribe((response) => {
            this.franchiseList = response;
        });
        this.franchiseList = this.franchiseService.getFranchiseList();

        this.memberService.getCategoryListener().subscribe((response) => {
            this.categoryList = response;
        });
        this.categoryList = this.memberService.getCategoryList();

        this.subjectService.getCourseListener().subscribe((response) => {
            this.courseList = response;
        });
        this.courseList = this.subjectService.getCourses();

        this.agentService.getAgentListListener().subscribe((response) => {
            this.agentList = response;
        });
        this.agentList = this.agentService.getAgentList();

        this.sessionService.getSessionListener().subscribe((response) => {
            this.sessionList = response;
        });
        this.sessionList = this.sessionService.getSessionList();

        this.studentService.getStudentListener().subscribe((response) => {
            this.studentList = response;
            this.nonAdmittedStudents = this.studentList.filter(x => x.admission_status == 0);
            this.disabledStudents = this.studentList.filter(x => x.status == 0);
        });
        this.studentList = this.studentService.getStudentLists();
        if (this.studentList.length > 0) {
            this.nonAdmittedStudents = this.studentList.filter(x => x.admission_status == 0);
            this.disabledStudents = this.studentList.filter(x => x.status == 0);
        }

    }

    getSemester() {
        this.subjectService.getSemesterByCourseId(this.studentCreationForm.value.course_id).subscribe((response: any) => {
            this.semesterList = response.data;
        })
    }

    changeStatus(id) {
        this.studentService.changeStudentStatus(id).subscribe((response: any) => {
        });
    }

    checkUniqueId() {
        this.commonService.checkId(this.studentCreationForm.value.identification_no).subscribe((response: any) => {
            if (response.success == 0) {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Duplicate ID',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.studentCreationForm.controls['identification_no'].reset();
            }
        })
    }


    // onSelect1(event) {
    //     let file;
    //     file = event.target.files[0];
    //     const formData = new FormData();
    //     formData.append("image", file);
    //     // @ts-ignore
    //     formData.append("p_image", this.studentCreationForm.value.id ? this.studentCreationForm.value.id : null);
    //     this.imageService.uploadProfilePic(formData).subscribe();
    //     this.studentCreationForm.patchValue({ image: file['name'] });
    // }

    selectProfilePic(event) {
        if (event.target.files[0].size > this.maxSize) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Select file max 1 mb',
                showConfirmButton: false,
                timer: 1000
            });
            event.target.value = '';
            return;
        }
        this.profile_image = event.target.files[0];
    }

    selectAdmissionSlip(event) {
        if (event.target.files[0].size > this.maxSize) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Select file max 1 mb',
                showConfirmButton: false,
                timer: 1000
            });
            event.target.value = '';
            return;
        }
        this.admission_slip = event.target.files[0];
    }

    selectRegistrationFile(event) {
        if (event.target.files[0].size > this.maxSize) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Select file max 1 mb',
                showConfirmButton: false,
                timer: 1000
            });
            event.target.value = '';
            return;
        }
        this.registration_no_proof = event.target.files[0];
    }

    uploadAadhaarCard(event) {
        if (event.target.files[0].size > this.maxSize) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Select file max 1 mb',
                showConfirmButton: false,
                timer: 1000
            });
            event.target.value = '';
            return;
        }
        this.aadhaar_card_proof = event.target.files[0];
    }

    uploadLabReport(event) {
        if (event.target.files[0].size > this.maxSize) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Select file max 1 mb',
                showConfirmButton: false,
                timer: 1000
            });
            event.target.value = '';
            return;
        }
        this.blood_group_proof = event.target.files[0];
    }

    uploadDateOfBirthProof(event) {
        if (event.target.files[0].size > this.maxSize) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Select file max 1 mb',
                showConfirmButton: false,
                timer: 1000
            });
            event.target.value = '';
            return;
        }
        this.dob_proof = event.target.files[0];
    }

    uploadFatherIncomeCertificate(event) {
        if (event.target.files[0].size > this.maxSize) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Select file max 1 mb',
                showConfirmButton: false,
                timer: 1000
            });
            event.target.value = '';
            return;
        }
        this.father_income_proof = event.target.files[0];
    }

    uploadMotherIncomeCertificate(event) {
        if (event.target.files[0].size > this.maxSize) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Select file max 1 mb',
                showConfirmButton: false,
                timer: 1000
            });
            event.target.value = '';
            return;
        }
        this.mother_income_proof = event.target.files[0];
    }

    uploadAbcId(event) {
        if (event.target.files[0].size > this.maxSize) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Select file max 1 mb',
                showConfirmButton: false,
                timer: 1000
            });
            event.target.value = '';
            return;
        }
        this.abcFile = event.target.files[0];
    }

    uploadSignature(event) {
        if (event.target.files[0].size > this.maxSize) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Select file max 1 mb',
                showConfirmButton: false,
                timer: 1000
            });
            event.target.value = '';
            return;
        }
        this.studentSignatureFile = event.target.files[0];
    }

    uploadAdmissionLatter(event) {
        if (event.target.files[0].size > this.maxSize) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Select file max 1 mb',
                showConfirmButton: false,
                timer: 1000
            });
            event.target.value = '';
            return;
        }
        this.admissionLetterFile = event.target.files[0];
    }

    activeTab(data) {
        this.active = data;
    }

    editStudent(data) {
        console.log(data);
        
        this.studentCreationForm.reset();
        this.subjectService.getSemesterByCourseId(data.course_id).subscribe((response: any) => {
            this.semesterList = response.data;

            data.transaction_id = data.caution_money_transaction_id;
            data.payment_date = data.caution_money_payment_date;
            data.mode_of_payment = data.caution_money_mode_of_payment;

            this.studentCreationForm.patchValue(data);
            // this.studentCreationForm2.patchValue(data);
            this.studentCreationForm3.patchValue(data);
            this.studentCreationForm4.patchValue(data);
            this.isUpdateable = true;
            this.active = 1;
        });
    }

    saveStudent(form_id) {
        // @ts-ignore
        this.session_id = JSON.parse(localStorage.getItem('session_id'));
        this.studentCreationForm.patchValue({ session_id: this.session_id });

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

        // if (!this.studentCreationForm.valid) {
        //     this.studentCreationForm.markAllAsTouched();
        //     window.scroll({
        //         top: 0,
        //         left: 0,
        //         behavior: 'smooth'
        //     });
        //     return;
        // }

        this.studentCreationForm.patchValue({ admission_status: 1 });
        this.studentCreationForm.patchValue({ form_id: form_id });
        Swal.fire({
            title: 'Please Wait !',
            html: 'Saving ...',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });

        const formData = new FormData();
        formData.append("id", this.studentCreationForm.value.id);
        formData.append("form_id", form_id);
        formData.append("session_id", this.session_id);

        if (form_id == 1) {
            formData.append("identification_no", this.studentCreationForm.value.identification_no);
            formData.append("roll_no", this.studentCreationForm.value.roll_no);
            formData.append("registration_no", this.studentCreationForm.value.registration_no);
            formData.append("first_name", this.studentCreationForm.value.first_name);
            formData.append("middle_name", this.studentCreationForm.value.middle_name);
            formData.append("last_name", this.studentCreationForm.value.last_name);
            formData.append("gender", this.studentCreationForm.value.gender);
            formData.append("dob", this.studentCreationForm.value.dob);
            formData.append("admission_date", this.studentCreationForm.value.admission_date);
            formData.append("mobile_no", this.studentCreationForm.value.mobile_no);
            formData.append("emergency_phone_number", this.studentCreationForm.value.emergency_phone_number);
            formData.append("material_status", this.studentCreationForm.value.material_status);
            formData.append("admission_status", this.studentCreationForm.value.admission_status);
            formData.append("current_address", this.studentCreationForm.value.current_address);
            formData.append("permanent_address", this.studentCreationForm.value.permanent_address);
            formData.append("religion", this.studentCreationForm.value.religion);
            formData.append("blood_group", this.studentCreationForm.value.blood_group);
            formData.append("category_id", this.studentCreationForm.value.category_id);
            formData.append("email", this.studentCreationForm.value.email);
            formData.append("course_id", this.studentCreationForm.value.course_id);
            formData.append("semester_id", this.studentCreationForm.value.semester_id);
            formData.append("agent_id", this.studentCreationForm.value.agent_id);
            formData.append("franchise_id", this.studentCreationForm.value.franchise_id);
            formData.append("abc_id", this.studentCreationForm.value.abc_id);
            // formData.append("session_id", this.studentCreationForm.value.session_id);
        } else if (form_id == 4) {
            formData.append("user_id", this.userId);
            formData.append("father_name", this.studentCreationForm4.value.father_name);
            formData.append("father_phone", this.studentCreationForm4.value.father_phone);
            formData.append("father_occupation", this.studentCreationForm4.value.father_occupation);
            formData.append("mother_name", this.studentCreationForm4.value.mother_name);
            formData.append("mother_phone", this.studentCreationForm4.value.mother_phone);
            formData.append("mother_occupation", this.studentCreationForm4.value.mother_occupation);
            formData.append("guardian_name", this.studentCreationForm4.value.guardian_name);
            formData.append("guardian_phone", this.studentCreationForm4.value.guardian_phone);
            formData.append("guardian_email", this.studentCreationForm4.value.guardian_email);
            formData.append("guardian_relation", this.studentCreationForm4.value.guardian_relation);
            formData.append("guardian_occupation", this.studentCreationForm4.value.guardian_occupation);
            formData.append("guardian_address", this.studentCreationForm4.value.guardian_address);
        } else if (form_id == 3) {
            formData.append("user_id", this.userId);
            formData.append("payment_date", this.studentCreationForm3.value.payment_date);
            formData.append("mode_of_payment", this.studentCreationForm3.value.mode_of_payment);
            formData.append("transaction_id", this.studentCreationForm3.value.transaction_id);
            formData.append("caution_money", this.studentCreationForm3.value.caution_money);
        } else if (form_id == 2) {
            formData.append("user_id", this.userId);
            //Images or document upload
            // @ts-ignore
            formData.append("image", this.profile_image);
            // @ts-ignore
            formData.append("dob_proof", this.dob_proof);
            // @ts-ignore
            formData.append("blood_group_proof", this.blood_group_proof);
            // @ts-ignore
            formData.append("aadhaar_card_proof", this.aadhaar_card_proof);
            // @ts-ignore
            formData.append("admission_slip", this.admission_slip);
            // @ts-ignore
            formData.append("father_income_proof", this.father_income_proof);
            // @ts-ignore
            formData.append("mother_income_proof", this.mother_income_proof);
            // @ts-ignore
            formData.append("registration_proof", this.registration_no_proof);
            formData.append("abc_file", this.abcFile);
            formData.append("student_signature", this.studentSignatureFile);
            formData.append("admission_allotment", this.admissionLetterFile);
        }

        // dob_proof: null;
        // blood_group_proof: null;
        // aadhaar_card_proof: null;
        // registration_no_proof: null;
        // admission_slip: null;


        // let file;
        // file = event.target.files[0];
        // const formData = new FormData();
        // formData.append("image", file);
        // // @ts-ignore
        // formData.append("p_image", this.studentCreationForm.value.id ? this.studentCreationForm.value.id : null);
        // this.imageService.uploadProfilePic(formData).subscribe();
        // this.studentCreationForm.patchValue({ image: file['name'] });

        this.studentService.saveStudent(formData).subscribe((response: any) => {
            if (response.success == 1) {
                Swal.close();
                this.userId = response.data.id;
                // Swal.fire({
                //     position: 'center',
                //     icon: 'success',
                //     title: 'Student Saved',
                //     showConfirmButton: false,
                //     timer: 1000
                // });
            } else if (response.success == 2) {
                Swal.close();
                // this.userId = response.data.id;
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Student Saved',
                    showConfirmButton: false,
                    timer: 1000
                });
            }
        })
    }

    refundAmount(data) {
        Swal.fire({
            title: 'Confirmation',
            text: 'Confirm Refund ?',
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Refund!'
        }).then((result) => {
            if (result.isConfirmed) {
                this.studentService.refundStudent(data.id).subscribe((response: any) => {
                    if (response.success == 1) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Student Refunded',
                            showConfirmButton: false,
                            timer: 1000
                        });
                    }
                })
            }
        });
    }


    updateStudent(form_id) {
        // @ts-ignore
        this.session_id = JSON.parse(localStorage.getItem('session_id'));
        this.studentCreationForm.patchValue({ session_id: this.session_id });
        if (!this.studentCreationForm.valid) {
            this.studentCreationForm.markAllAsTouched();
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
            return;
        }
        this.studentCreationForm.patchValue({ admission_status: 1 });
        const formData = new FormData();
        formData.append("id", this.studentCreationForm.value.id);
        formData.append("form_id", form_id);
        // @ts-ignore
        formData.append("session_id", this.session_id);


        if (form_id == 1) {
            formData.append("identification_no", this.studentCreationForm.value.identification_no);
            formData.append("roll_no", this.studentCreationForm.value.roll_no);
            formData.append("registration_no", this.studentCreationForm.value.registration_no);
            formData.append("first_name", this.studentCreationForm.value.first_name);
            formData.append("middle_name", this.studentCreationForm.value.middle_name);
            formData.append("last_name", this.studentCreationForm.value.last_name);
            formData.append("gender", this.studentCreationForm.value.gender);
            formData.append("dob", this.studentCreationForm.value.dob);
            formData.append("admission_date", this.studentCreationForm.value.admission_date);
            formData.append("mobile_no", this.studentCreationForm.value.mobile_no);
            formData.append("emergency_phone_number", this.studentCreationForm.value.emergency_phone_number);
            formData.append("material_status", this.studentCreationForm.value.material_status);
            formData.append("admission_status", this.studentCreationForm.value.admission_status);
            formData.append("current_address", this.studentCreationForm.value.current_address);
            formData.append("permanent_address", this.studentCreationForm.value.permanent_address);
            formData.append("religion", this.studentCreationForm.value.religion);
            formData.append("blood_group", this.studentCreationForm.value.blood_group);
            formData.append("category_id", this.studentCreationForm.value.category_id);
            formData.append("email", this.studentCreationForm.value.email);
            formData.append("course_id", this.studentCreationForm.value.course_id);
            formData.append("semester_id", this.studentCreationForm.value.semester_id);
            formData.append("agent_id", this.studentCreationForm.value.agent_id);
            formData.append("franchise_id", this.studentCreationForm.value.franchise_id);
            formData.append("abc_id", this.studentCreationForm.value.abc_id);
            // formData.append("session_id", this.studentCreationForm.value.session_id);
        } else if (form_id == 4) {
            formData.append("id", this.userId);
            formData.append("father_name", this.studentCreationForm4.value.father_name);
            formData.append("father_phone", this.studentCreationForm4.value.father_phone);
            formData.append("father_occupation", this.studentCreationForm4.value.father_occupation);
            formData.append("mother_name", this.studentCreationForm4.value.mother_name);
            formData.append("mother_phone", this.studentCreationForm4.value.mother_phone);
            formData.append("mother_occupation", this.studentCreationForm4.value.mother_occupation);
            formData.append("guardian_name", this.studentCreationForm4.value.guardian_name);
            formData.append("guardian_phone", this.studentCreationForm4.value.guardian_phone);
            formData.append("guardian_email", this.studentCreationForm4.value.guardian_email);
            formData.append("guardian_relation", this.studentCreationForm4.value.guardian_relation);
            formData.append("guardian_occupation", this.studentCreationForm4.value.guardian_occupation);
            formData.append("guardian_address", this.studentCreationForm4.value.guardian_address);
        } else if (form_id == 3) {
            formData.append("id", this.userId);
            formData.append("payment_date", this.studentCreationForm3.value.payment_date);
            formData.append("mode_of_payment", this.studentCreationForm3.value.mode_of_payment);
            formData.append("transaction_id", this.studentCreationForm3.value.transaction_id);
            formData.append("caution_money", this.studentCreationForm3.value.caution_money);
        } else if (form_id == 2) {
            formData.append("user_id", this.userId);
            //Images or document upload
            // @ts-ignore
            formData.append("image", this.profile_image);
            // @ts-ignore
            formData.append("dob_proof", this.dob_proof);
            // @ts-ignore
            formData.append("blood_group_proof", this.blood_group_proof);
            // @ts-ignore
            formData.append("aadhaar_card_proof", this.aadhaar_card_proof);
            // @ts-ignore
            formData.append("admission_slip", this.admission_slip);
            // @ts-ignore
            formData.append("father_income_proof", this.father_income_proof);
            // @ts-ignore
            formData.append("mother_income_proof", this.mother_income_proof);
            // @ts-ignore
            formData.append("registration_proof", this.registration_no_proof);
            formData.append("abc_file", this.abcFile);
            formData.append("student_signature", this.studentSignatureFile);
            formData.append("admission_allotment", this.admissionLetterFile);
        }

        this.studentService.updateStudent(formData).subscribe((response: any) => {
            if (response.success == 1) {
                Swal.close();
                this.userId = response.data.id;

                // Swal.fire({
                //     position: 'center',
                //     icon: 'success',
                //     title: 'Student Updated',
                //     showConfirmButton: false,
                //     timer: 1000
                // });
            } else if (response.success == 2) {
                Swal.close();
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Student Updated',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.cancelUpdate();
            }
        })
    }

    cancelUpdate() {
        this.studentCreationForm.reset();
        this.isUpdateable = false;
    }

    deleteStudent(data) {
        Swal.fire({
            title: 'Confirmation',
            text: 'Do you sure to delete ?',
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete It!'
        }).then((result) => {
            if (result.isConfirmed) {
                this.studentService.deleteStudents(data.id).subscribe((response) => {
                    // @ts-ignore
                    if (response.success == 1) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Student Deleted',
                            showConfirmButton: false,
                            timer: 1000
                        });
                    }
                })
            }
        });

    }

    exportStudentListExcel(type) {
        // @ts-ignore
        let x: [{
            "Identification Number": any;
            "Name": any;
            "Gender": any;
            "DOB": any;
            "Religion": any;
            "Mobile No": any;
            "Email": any;
            "Session Name": any;
            "Category Name": any;
            "Admission Date": any;
            "Blood Group": any;
            "Course Name": any;
            "Semester": any;
            "Current Semester": any
        }] = [];
        let output = [];

        if (type === 1) {
            if (this.studentList.length == 0) {
                Swal.fire({
                    position: 'center',
                    icon: 'info',
                    title: 'No Data To Export',
                    showConfirmButton: false,
                    timer: 1000
                });
                return;
            }

            this.studentList.forEach(function (value) {
                x = [{
                    'Identification Number': value.identification_no,
                    'Name': value.first_name ?? '' + ' ' + value.middle_name ?? '' + ' ' + value.last_name ?? '',
                    'Gender': value.gender,
                    'DOB': value.dob,
                    'Religion': value.Hinduism,
                    'Mobile No': value.mobile_no,
                    'Email': value.email,
                    'Session Name': value.session_name,
                    'Category Name': value.category_name,
                    'Admission Date': value.admission_date,
                    'Blood Group': value.blood_group,
                    'Course Name': value.course_name,
                    'Semester': value.semester,
                    'Current Semester': value.current_semester,
                }];
                // @ts-ignore
                output.push(x[0]);
            })
        } else if (type === 2) {
            if (this.nonAdmittedStudents.length == 0) {
                Swal.fire({
                    position: 'center',
                    icon: 'info',
                    title: 'No Data To Export',
                    showConfirmButton: false,
                    timer: 1000
                });
                return;
            }

            this.nonAdmittedStudents.forEach(function (value) {
                x = [{
                    'Identification Number': value.identification_no,
                    'Name': value.first_name ?? '' + ' ' + value.middle_name ?? '' + ' ' + value.last_name ?? '',
                    'Gender': value.gender,
                    'DOB': value.dob,
                    'Religion': value.Hinduism,
                    'Mobile No': value.mobile_no,
                    'Email': value.email,
                    'Session Name': value.session_name,
                    'Category Name': value.category_name,
                    'Admission Date': value.admission_date,
                    'Blood Group': value.blood_group,
                    'Course Name': value.course_name,
                    'Semester': value.semester,
                    'Current Semester': value.current_semester,
                }];
                // @ts-ignore
                output.push(x[0]);
            })
        } else if (type === 3) {
            if (this.disabledStudents.length == 0) {
                Swal.fire({
                    position: 'center',
                    icon: 'info',
                    title: 'No Data To Export',
                    showConfirmButton: false,
                    timer: 1000
                });
                return;
            }

            this.disabledStudents.forEach(function (value) {
                x = [{
                    'Identification Number': value.identification_no,
                    'Name': value.first_name ?? '' + ' ' + value.middle_name ?? '' + ' ' + value.last_name ?? '',
                    'Gender': value.gender,
                    'DOB': value.dob,
                    'Religion': value.Hinduism,
                    'Mobile No': value.mobile_no,
                    'Email': value.email,
                    'Session Name': value.session_name,
                    'Category Name': value.category_name,
                    'Admission Date': value.admission_date,
                    'Blood Group': value.blood_group,
                    'Course Name': value.course_name,
                    'Semester': value.semester,
                    'Current Semester': value.current_semester,
                }];
                // @ts-ignore
                output.push(x[0]);
            })
        }

        /* pass here the table id */
        const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(output);
        /* generate workbook and add the worksheet */
        const wb: XLSX.WorkBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        /* save to file */
        XLSX.writeFile(wb, 'Student-List-Report.xlsx');
    }
}
