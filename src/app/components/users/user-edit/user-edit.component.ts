import {Component, OnInit} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "../../../services/error.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MemberService} from "../../../services/member.service";
import Swal from "sweetalert2";
import {AchievementService} from 'src/app/services/achievement.service';
import {JobService} from 'src/app/services/job.service';

@Component({
    selector: 'app-user-edit',
    templateUrl: './user-edit.component.html',
    styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
    public FILE_URL = environment.FILE_URL;
    studentCreationForm: FormGroup;
    staffUpdateForm: FormGroup;
    educationQualificationForm: FormGroup;
    achievementForm: FormGroup;
    placementForm: FormGroup;
    placementList: any[] = [];
    achievementFile: any;
    achievementList: any[] = [];
    categoryList: any[];
    showPopup = true;
    educationUpdate = false;
    isAchievementFormUpdatable = false;
    isPlacementUpdatable = false;
    companyDetailsList: any[];
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
    } = {};
    staffDetails = {};
    private BASE_API_URL = environment.BASE_API_URL;

    constructor(private http: HttpClient, private errorService: ErrorService, private memberService: MemberService, private achievementService: AchievementService, private jobService: JobService) {
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
            identification_no: new FormControl(null),
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


        this.jobService.getCompanyDetailsListListener().subscribe((response) => {
            this.companyDetailsList = response;
        });
        this.companyDetailsList = this.jobService.getCompanyDetails();
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
                }else{
                    this.staffDetails = response.data;
                    this.staffUpdateForm.patchValue(this.staffDetails);
                    console.log(this.staffUpdateForm.value);
                }
            }
        });
    }

    updateStaff(){
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
