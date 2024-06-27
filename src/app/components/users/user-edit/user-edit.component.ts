import { Component, OnInit } from '@angular/core';
import { environment } from "../../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { ErrorService } from "../../../services/error.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MemberService } from "../../../services/member.service";
import Swal from "sweetalert2";
import { AchievementService } from 'src/app/services/achievement.service';
import { JobService } from 'src/app/services/job.service';
import { DesignationService } from 'src/app/services/designation.service';
import { DepartmentService } from 'src/app/services/department.service';
import { FranchiseService } from 'src/app/services/franchise.service';
import { StaffDegreeService } from 'src/app/services/staff-degree.service';
import {SubjectService} from "../../../services/subject.service";

@Component({
    selector: 'app-user-edit',
    templateUrl: './user-edit.component.html',
    styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
    public FILE_URL = environment.FILE_URL;
    studentCreationForm: FormGroup;
    staffUpdateForm: FormGroup;
    manualFeesForm: FormGroup;
    educationQualificationForm: FormGroup;
    achievementForm: FormGroup;
    staffEducationForm: FormGroup;
    placementForm: FormGroup;
    placementList: any[] = [];
    achievementFile: any;
    achievementList: any[] = [];
    manualFeesList: any[] = [];
    semesterList: any[] = [];
    categoryList: any[];
    showPopup = true;
    educationUpdate = false;
    isAchievementFormUpdatable = false;
    isPlacementUpdatable = false;
    companyDetailsList: any[];
    designationList: any[];
    departmentList: any[];
    franchiseList: any[];
    user = JSON.parse(localStorage.getItem('user') || '{}');
    // @ts-ignore
    userDetails: {
        category_id: any;
        permanent_address: any;
        material_status: any;
        religion: any;
        blood_group: any;
        mobile_no: any;
        dob: any;
        gender: any;
        identification_no: any;
        current_semester: any;
        course_name: any;
        email: any;
        user_type: any;
        last_name: any;
        middle_name: any;
        first_name: any;
        course_id: any;
    } = {};
    staffDetails = {};
    educations: any[];
    degreeList: any[];

    birthCertificate: File;
    uploadJoiningLetter: File;
    uploadImage: File;
    uploadPan: File;
    uploadAadhar: File;
    userCasteCertificate: File;
    education_file: File;
    labReport: File;
    manualFeesFile: File;

    private BASE_API_URL = environment.BASE_API_URL;

    constructor(private http: HttpClient, private errorService: ErrorService
                , private memberService: MemberService
                , private achievementService: AchievementService
                , private jobService: JobService, private designationService: DesignationService
                , private departmentService: DepartmentService
                , private franchiseService: FranchiseService
                , private subjectService: SubjectService
                , private StaffDegreeService: StaffDegreeService) {
        this.studentCreationForm = new FormGroup({
            id: new FormControl(null),
            first_name: new FormControl(null),
            middle_name: new FormControl(null),
            last_name: new FormControl(null),
            identification_no: new FormControl(null),
            gender: new FormControl(null),
            dob: new FormControl(null),
            admission_date: new FormControl(null),
            image: new FormControl(null),
            mobile_no: new FormControl(null, [Validators.pattern("[0-9 ]{10}")]),
            emergency_phone_number: new FormControl(null, [Validators.pattern("[0-9]{10}")]),
            material_status: new FormControl(null),
            admission_status: new FormControl(null),
            current_address: new FormControl(null),
            permanent_address: new FormControl(null),
            religion: new FormControl(null),
            blood_group: new FormControl(null),
            category_id: new FormControl(null),
            email: new FormControl(null),
            course_name: new FormControl(null),
            semester_name: new FormControl(null),
            current_semester: new FormControl(null),
            agent_id: new FormControl(null),
            father_name: new FormControl(null),
            father_phone: new FormControl(null, [Validators.pattern("[0-9]{10}")]),
            father_occupation: new FormControl(null),
            mother_name: new FormControl(null),
            mother_phone: new FormControl(null, [Validators.pattern("[0-9]{10}")]),
            mother_occupation: new FormControl(null),
            guardian_name: new FormControl(null),
            guardian_phone: new FormControl(null, [Validators.pattern("[0-9]{10}")]),
            guardian_email: new FormControl(null),
            guardian_relation: new FormControl(null),
            guardian_occupation: new FormControl(null),
            guardian_address: new FormControl(null),
            franchise_id: new FormControl(null),
            session_id: new FormControl(null),
            roll_no: new FormControl(null),
            registration_no: new FormControl(null),
        });
        this.memberService.getCategoryListener().subscribe((response) => {
            this.categoryList = response;
        });
        this.categoryList = this.memberService.getCategoryList();

        this.educationQualificationForm = new FormGroup({
            id: new FormControl(null),
            course_id: new FormControl(null, [Validators.required]),
            semester_id: new FormControl(null, [Validators.required]),
            session_id: new FormControl(null, [Validators.required]),
            student_id: new FormControl(null, [Validators.required]),
            board_ten: new FormControl(null, [Validators.required]),
            marks_obtained_ten: new FormControl(null, [Validators.required]),
            percentage_ten: new FormControl(null, [Validators.required]),
            division_ten: new FormControl(null, [Validators.required]),
            main_subject_ten: new FormControl(null, [Validators.required]),
            year_of_passing_ten: new FormControl(null, [Validators.required]),
            board_twelve: new FormControl(null, [Validators.required]),
            marks_obtained_twelve: new FormControl(null, [Validators.required]),
            percentage_twelve: new FormControl(null, [Validators.required]),
            division_twelve: new FormControl(null, [Validators.required]),
            main_subject_twelve: new FormControl(null, [Validators.required]),
            year_of_passing_twelve: new FormControl(null, [Validators.required]),
            board_graduation: new FormControl(null, [Validators.required]),
            marks_obtained_graduation: new FormControl(null, [Validators.required]),
            percentage_graduation: new FormControl(null, [Validators.required]),
            division_graduation: new FormControl(null, [Validators.required]),
            main_subject_graduation: new FormControl(null, [Validators.required]),
            year_of_passing_graduation: new FormControl(null, [Validators.required]),
        });

        this.achievementForm = new FormGroup({
            id: new FormControl(null),
            award_date: new FormControl(null, [Validators.required]),
            award_name: new FormControl(null, [Validators.required]),
            file_name: new FormControl(null),
        });
        this.placementForm = new FormGroup({
            id: new FormControl(null),
            placement_date: new FormControl(null, [Validators.required]),
            description: new FormControl(null, [Validators.required]),
            company_id: new FormControl(null, [Validators.required]),
        });


        //FOR STAFF

        this.staffUpdateForm = new FormGroup({
            id: new FormControl(null),
            user_type: new FormControl(null),
            identification_no: new FormControl(null),
            staff_id: new FormControl(null),
            first_name: new FormControl(null, [Validators.required]),
            middle_name: new FormControl(null),
            last_name: new FormControl(null, [Validators.required]),
            gender: new FormControl(null, [Validators.required]),
            dob: new FormControl(null, [Validators.required]),
            date_of_joining: new FormControl(null, [Validators.required]),
            image: new FormControl(null),
            mobile_no: new FormControl(null, [Validators.required]),
            emergency_phone_number: new FormControl(null, [Validators.required]),
            material_status: new FormControl(null, [Validators.required]),
            work_experience: new FormControl(null, [Validators.required]),
            qualification: new FormControl(null, [Validators.required]),
            current_address: new FormControl(null, [Validators.required]),
            permanent_address: new FormControl(null, [Validators.required]),
            religion: new FormControl(null),
            caste: new FormControl(null),
            blood_group: new FormControl(null),
            category_id: new FormControl(null, [Validators.required]),
            user_type_id: new FormControl(null, [Validators.required]),
            email: new FormControl(null, [Validators.required, Validators.email]),
            department_id: new FormControl(null, [Validators.required]),
            designation_id: new FormControl(null, [Validators.required]),
            pan_number: new FormControl(null, [Validators.required]),
            epf_number: new FormControl(null),
            franchise_id: new FormControl(null),
            gross_salary: new FormControl(null),
            location: new FormControl(null),
            contract_type: new FormControl(null, [Validators.required]),
            bank_account_number: new FormControl(null),
            bank_name: new FormControl(null),
            ifsc_code: new FormControl(null),
            bank_branch_name: new FormControl(null),
            password: new FormControl(null),
        });

        this.staffEducationForm = new FormGroup({
            id: new FormControl(null),
            degree: new FormControl(null),
            specialization: new FormControl(null),
            university_name: new FormControl(null),
            percentage: new FormControl(null),
            grade: new FormControl(null),
            file_name: new FormControl(null),
        });

        this.manualFeesForm = new FormGroup({
            id: new FormControl(null),
            course_id: new FormControl(null, [Validators.required]),
            semester_id: new FormControl(null, [Validators.required]),
            student_id: new FormControl(null, [Validators.required]),
            session_id: new FormControl(null, [Validators.required]),
            date_of_payment: new FormControl(null, [Validators.required]),
            amount: new FormControl(null, [Validators.required]),
        });


        this.jobService.getCompanyDetailsListListener().subscribe((response) => {
            this.companyDetailsList = response;
        });
        this.companyDetailsList = this.jobService.getCompanyDetails();

        this.designationService.getDesignationListListener().subscribe((response) => {
            this.designationList = response;
        });
        this.designationList = this.designationService.getDesignationList();

        this.departmentService.getDepartmentListListener().subscribe((response) => {
            this.departmentList = response;
        });
        this.departmentList = this.departmentService.getDepartmentList();

        this.franchiseService.getFranchiseListener().subscribe((response) => {
            this.franchiseList = response;
        });
        this.franchiseList = this.franchiseService.getFranchiseList();


        this.StaffDegreeService.getDegreeListListener().subscribe(response => {
            this.degreeList = response;
        });
        this.degreeList = this.StaffDegreeService.getDegreeList();
    }

    getUserDetails() {
        this.http.get(this.BASE_API_URL + '/getLoggedInUserData').subscribe((response: any) => {
            if (response.success == 1) {
                if (this.user.user_type_id == 3) {
                    this.userDetails = response.data;
                    this.studentCreationForm.patchValue(this.userDetails);
                    this.educationQualificationForm.patchValue(response.education_details);
                    this.achievementList = response.achievement;
                    this.placementList = response.placement;
                    this.manualFeesList = response.manualFeesList;
                    this.subjectService.getSemesterByCourseId(this.userDetails.course_id).subscribe((response: any) => {
                        this.semesterList = response.data;
                        this.manualFeesForm.patchValue({course_id: this.userDetails.course_id});
                    })
                } else {
                    this.staffDetails = response.data;
                    this.educations = response.educations;
                    this.staffUpdateForm.patchValue(this.staffDetails);
                }
            }
        });
    }

    updateStaff() {
        console.log(this.staffUpdateForm.value);
    }

    updateProfile() {
        return this.http.post(this.BASE_API_URL + '/updateMemberOwn', this.studentCreationForm.value)
            .subscribe(response => {
                // @ts-ignore
                if (response.success == 1) {
                    Swal.fire({
                        title: "Well Done!!",
                        text: "Profile Updated",
                        icon: "success"
                    });
                }
            });
    }

    fileUpload(event, type) {
        if (type == 'birthCertificate') {
            this.birthCertificate = event.target.files[0];
        } else if (type == 'uploadJoiningLetter') {
            this.uploadJoiningLetter = event.target.files[0];
        } else if (type == 'uploadImage') {
            this.uploadImage = event.target.files[0];
        } else if (type == 'uploadPan') {
            this.uploadPan = event.target.files[0];
        } else if (type == 'uploadAadhar') {
            this.uploadAadhar = event.target.files[0];
        } else if (type == 'userCasteCertificate') {
            this.userCasteCertificate = event.target.files[0];
        }else if(type == 'education_file'){
            this.education_file = event.target.files[0];
        } else if (type == 'labReport') {
            this.labReport = event.target.files[0];
        }else if(type == 'manualFeesFile'){
            this.manualFeesFile = event.target.files[0];
        }

    }

    saveStaffEducation() {
        const formData = new FormData();
        formData.append('degree', this.staffEducationForm.value.degree);
        formData.append('specialization', this.staffEducationForm.value.specialization);
        formData.append('university_name', this.staffEducationForm.value.university_name);
        formData.append('percentage', this.staffEducationForm.value.percentage);
        formData.append('grade', this.staffEducationForm.value.grade);
        formData.append('file_name', this.staffEducationForm.value.degree);


    }

    editManualFees(data){
        this.manualFeesForm.patchValue(data);
    }

    saveManualFeesOwn(){
        const formData = new FormData();
        formData.append('id', this.manualFeesForm.value.id);
        formData.append('course_id', this.manualFeesForm.value.course_id);
        formData.append('semester_id', this.manualFeesForm.value.semester_id);
        formData.append('session_id', this.manualFeesForm.value.session_id);
        formData.append('date_of_payment', this.manualFeesForm.value.date_of_payment);
        formData.append('amount', this.manualFeesForm.value.amount);
        // @ts-ignore
        formData.append('file', this.manualFeesFile);

        return this.http.post(this.BASE_API_URL + '/saveStudentManualFees', formData)
            .subscribe((response: any) => {
                if (response.success == 1) {
                    Swal.fire({
                        title: "Well Done!!",
                        text: "Fees Saved",
                        icon: "success"
                    });
                }
                this.manualFeesForm.reset();
                this.manualFeesList = response.data;
            });
    }


    updateProfileStaff() {
        const formData = new FormData();
        formData.append('id', this.staffUpdateForm.value.id);
        formData.append('user_type', this.staffUpdateForm.value.user_type);
        formData.append('identification_no', this.staffUpdateForm.value.identification_no);
        formData.append('staff_id', this.staffUpdateForm.value.staff_id);
        formData.append('first_name', this.staffUpdateForm.value.first_name);
        formData.append('middle_name', this.staffUpdateForm.value.middle_name);
        formData.append('last_name', this.staffUpdateForm.value.last_name);
        formData.append('gender', this.staffUpdateForm.value.gender);
        formData.append('dob', this.staffUpdateForm.value.dob);
        formData.append('date_of_joining', this.staffUpdateForm.value.date_of_joining);
        formData.append('image', this.staffUpdateForm.value.image);
        formData.append('mobile_no', this.staffUpdateForm.value.mobile_no);
        formData.append('emergency_phone_number', this.staffUpdateForm.value.emergency_phone_number);
        formData.append('material_status', this.staffUpdateForm.value.material_status);
        formData.append('work_experience', this.staffUpdateForm.value.work_experience);
        formData.append('qualification', this.staffUpdateForm.value.qualification);
        formData.append('current_address', this.staffUpdateForm.value.current_address);
        formData.append('permanent_address', this.staffUpdateForm.value.permanent_address);
        formData.append('religion', this.staffUpdateForm.value.religion);
        formData.append('caste', this.staffUpdateForm.value.caste);
        formData.append('blood_group', this.staffUpdateForm.value.blood_group);
        formData.append('category_id', this.staffUpdateForm.value.category_id);
        formData.append('user_type_id', this.staffUpdateForm.value.user_type_id);
        formData.append('email', this.staffUpdateForm.value.email);
        formData.append('department_id', this.staffUpdateForm.value.department_id);
        formData.append('designation_id', this.staffUpdateForm.value.designation_id);
        formData.append('pan_number', this.staffUpdateForm.value.pan_number);
        formData.append('epf_number', this.staffUpdateForm.value.epf_number);
        formData.append('franchise_id', this.staffUpdateForm.value.franchise_id);
        formData.append('gross_salary', this.staffUpdateForm.value.gross_salary);
        formData.append('location', this.staffUpdateForm.value.location);
        formData.append('contract_type', this.staffUpdateForm.value.contract_type);
        formData.append('bank_account_number', this.staffUpdateForm.value.bank_account_number);
        formData.append('bank_name', this.staffUpdateForm.value.bank_name);
        formData.append('ifsc_code', this.staffUpdateForm.value.ifsc_code);
        formData.append('bank_branch_name', this.staffUpdateForm.value.bank_branch_name);
        formData.append('password', this.staffUpdateForm.value.password);

        formData.append('dob_proof', this.birthCertificate);
        formData.append('blood_group_proof', this.labReport);
        formData.append('joining_letter_proof', this.uploadJoiningLetter);
        formData.append('profile_image', this.uploadImage);
        formData.append('pan_proof', this.uploadPan);
        formData.append('aadhaar_card_proof', this.uploadAadhar);
        formData.append('caste_certificate_proof', this.userCasteCertificate);

        return this.http.post(this.BASE_API_URL + '/updateMemberOwn', formData)
            .subscribe(response => {
                // @ts-ignore
                if (response.success == 1) {
                    Swal.fire({
                        title: "Well Done!!",
                        text: "Profile Updated",
                        icon: "success"
                    });
                }
            });
    }

    updateEducation() {
        return this.http.post(this.BASE_API_URL + '/updateMemberOwnEducation', this.educationQualificationForm.value)
            .subscribe(response => {
                // @ts-ignore
                if (response.success == 1) {
                    Swal.fire({
                        title: "Well Done!!",
                        text: "Education Details Updated",
                        icon: "success"
                    });
                }
            });
    }

    saveAchievement() {
        if (!this.achievementForm.valid) {
            this.achievementForm.markAllAsTouched();
            return;
        }

        const formData = new FormData();
        formData.append("award_date", this.achievementForm.value.award_date);
        formData.append("award_name", this.achievementForm.value.award_name);
        formData.append("file", this.achievementFile);

        return this.http.post(this.BASE_API_URL + '/saveOwnAchievement', formData)
            .subscribe((response: any) => {
                // console.log(response);
                // @ts-ignore
                if (response.success == 1) {
                    Swal.fire({
                        title: "Well Done!!",
                        text: "Achievement saved",
                        icon: "success"
                    });
                    this.achievementForm.reset();
                    this.achievementList = response.data;
                }
            });
    }

    updateAchievement() {

        if (!this.achievementForm.valid) {
            this.achievementForm.markAllAsTouched();
            return;
        }

        const formData = new FormData();
        formData.append("id", this.achievementForm.value.id);
        formData.append("award_date", this.achievementForm.value.award_date);
        formData.append("award_name", this.achievementForm.value.award_name);
        formData.append("file", this.achievementFile);

        return this.http.post(this.BASE_API_URL + '/updateOwnAchievement', formData)
            .subscribe((response: any) => {
                // console.log(response);
                // @ts-ignore
                if (response.success == 1) {
                    Swal.fire({
                        title: "Well Done!!",
                        text: "Achievement updated",
                        icon: "success"
                    });
                    this.achievementForm.reset();
                    this.achievementList = response.data;
                }
            });
    }

    cancelachievementFormUpdate() {
        this.achievementForm.reset();
        this.isAchievementFormUpdatable = false;
    }

    selectedAchievementFile(event) {
        this.achievementFile = event.target.files[0];
    }

    editAchievement(data) {
        this.isAchievementFormUpdatable = true;
        this.achievementForm.patchValue(data);
    }

    deleteAchievement(data) {
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
                this.achievementService.deleteAchievement(data.id).subscribe((response: any) => {
                    if (response.success == 1) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Achievement Deleted',
                            showConfirmButton: false,
                            timer: 1000
                        });
                        this.achievementList = response.data;
                    }
                });
            }
        })
    }


    savePlacementDetails() {
        if (!this.placementForm.valid) {
            this.placementForm.markAllAsTouched();
            return;
        }

        const formData = new FormData();
        formData.append("company_id", this.placementForm.value.company_id);
        formData.append("placement_date", this.placementForm.value.placement_date);
        formData.append("description", this.placementForm.value.description);

        return this.http.post(this.BASE_API_URL + '/saveOwnPlacementDetails', formData)
            .subscribe((response: any) => {
                if (response.success == 1) {
                    Swal.fire({
                        title: "Well Done!!",
                        text: "Placement saved",
                        icon: "success"
                    });
                    this.placementForm.reset();
                    this.placementList = response.data;
                }
            });
    }

    updatePlacementDetails() {
        if (!this.placementForm.valid) {
            this.placementForm.markAllAsTouched();
            return;
        }

        const formData = new FormData();
        formData.append("id", this.placementForm.value.id);
        formData.append("company_id", this.placementForm.value.company_id);
        formData.append("placement_date", this.placementForm.value.placement_date);
        formData.append("description", this.placementForm.value.description);

        return this.http.post(this.BASE_API_URL + '/updateOwnPlacementDetails', formData)
            .subscribe((response: any) => {
                if (response.success == 1) {
                    Swal.fire({
                        title: "Well Done!!",
                        text: "Placement updated",
                        icon: "success"
                    });
                    this.placementForm.reset();
                    this.placementList = response.data;
                }
            });
    }

    editPlacementDetails(data) {
        this.isPlacementUpdatable = true;
        this.placementForm.patchValue(data);
    }

    cancelPlacementFormUpdate() {
        this.placementForm.reset();
        this.isPlacementUpdatable = false;
    }

    deletePlacementDetails(data) {
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
                this.jobService.deletePlacementDetails(data.id).subscribe((response: any) => {
                    if (response.success == 1) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Placement Details Updated Successfully',
                            showConfirmButton: false,
                            timer: 1000
                        });
                        this.placementForm.reset();
                        this.placementList = response.data;
                    }
                });
            }
        });
    }


    ngOnInit() {
        this.getUserDetails();
    }


    updateEducationOn() {
        this.educationUpdate = !this.educationUpdate;
    }
}
