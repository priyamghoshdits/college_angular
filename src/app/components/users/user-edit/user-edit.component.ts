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
import { StaffEducationService } from 'src/app/services/staff-education.service';
import { BookPublicationService } from 'src/app/services/book-publication.service';
import { SubjectService } from "../../../services/subject.service";

@Component({
    selector: 'app-user-edit',
    templateUrl: './user-edit.component.html',
    styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
    public FILE_URL = environment.FILE_URL;
    staffId = '';
    studentCreationForm: FormGroup;
    staffUpdateForm: FormGroup;
    manualFeesForm: FormGroup;
    educationQualificationForm: FormGroup;
    achievementForm: FormGroup;
    staffEducationForm: FormGroup;
    placementForm: FormGroup;
    staffPublicationForm: FormGroup;
    staffExperienceForm: FormGroup;
    journalPublicationForm: FormGroup;
    pgPhdForm: FormGroup;
    apiScoreForm: FormGroup;
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
    isPgPhdUpdate = false;
    isApiScoreUpdate = false;
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
    apiScoreList: any[];

    birthCertificate: File;
    uploadJoiningLetter: File;
    uploadImage: File;
    uploadPan: File;
    uploadAadhar: File;
    userCasteCertificate: File;
    education_file: File;
    labReport: File;
    experienceProof: File;
    manualFeesFile: File;
    journalFile: File;
    pgPhdFile: File;
    apiScoreFile: File;
    publicationFile: File;

    educationFileName: File;
    isUpdatableStaffEducation: boolean = false;
    isUpdatableStaffPublication: boolean = false;
    isUpdatableExperience: boolean = false;
    isUpdatablePublication: boolean = false;
    stafBookPublicationList: any[];
    staffExperienceList: any[];
    journalPublicationList: any[];
    pgPhdList: any[];

    private BASE_API_URL = environment.BASE_API_URL;

    constructor(private http: HttpClient, private errorService: ErrorService, private memberService: MemberService, private achievementService: AchievementService, private jobService: JobService, private designationService: DesignationService, private departmentService: DepartmentService, private franchiseService: FranchiseService, private StaffDegreeService: StaffDegreeService, private StaffEducationService: StaffEducationService, private BookPublicationService: BookPublicationService, private subjectService: SubjectService) {
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
            degree: new FormControl(null, [Validators.required]),
            specialization: new FormControl(null, [Validators.required]),
            university_name: new FormControl(null, [Validators.required]),
            percentage: new FormControl(null, [Validators.required]),
            grade: new FormControl(null, [Validators.required]),
            file_name: new FormControl(null),
        });

        this.staffPublicationForm = new FormGroup({
            id: new FormControl(null),
            book_name: new FormControl(null, [Validators.required]),
            ISBN_number: new FormControl(null, [Validators.required]),
            name_of_publisher: new FormControl(null, [Validators.required]),
            chapter_full_book: new FormControl(null, [Validators.required]),
            chapter_name: new FormControl(null, [Validators.required]),
            page_number: new FormControl(null, [Validators.required]),
            file_name: new FormControl(null),
        });

        this.staffExperienceForm = new FormGroup({
            id: new FormControl(null),
            staff_id: new FormControl(null),
            organization: new FormControl(null, [Validators.required]),
            designation: new FormControl(null, [Validators.required]),
            experience: new FormControl(null, [Validators.required]),
            to_date: new FormControl(null, [Validators.required]),
            from_date: new FormControl(null, [Validators.required]),
            experience_proof: new FormControl(null),
        });

        this.journalPublicationForm = new FormGroup({
            id: new FormControl(null),
            journal_name: new FormControl(null),
            publication: new FormControl(null, [Validators.required]),
            ugc_affiliation: new FormControl(null, [Validators.required]),
            university_name: new FormControl(null, [Validators.required]),
            volume_page_number: new FormControl(null, [Validators.required]),
            issn_number: new FormControl(null, [Validators.required]),
            topic_name: new FormControl(null, [Validators.required]),
            impact_factor: new FormControl(null, [Validators.required]),
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

        this.pgPhdForm = new FormGroup({
            id: new FormControl(null),
            student_name: new FormControl(null, [Validators.required]),
            course: new FormControl(null, [Validators.required]),
            title_name: new FormControl(null, [Validators.required]),
            guide: new FormControl(null, [Validators.required]),
            co_guide: new FormControl(null, [Validators.required]),
            referance_no: new FormControl(null, [Validators.required]),
            ref_date: new FormControl(null, [Validators.required]),
            status: new FormControl(null, [Validators.required]),
        });

        this.apiScoreForm = new FormGroup({
            id: new FormControl(null),
            assignment_year: new FormControl(null, [Validators.required]),
        })

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
                this.staffId = this.user.id;
                if (this.user.user_type_id == 3) {
                    this.userDetails = response.data;
                    this.studentCreationForm.patchValue(this.userDetails);
                    this.educationQualificationForm.patchValue(response.education_details);
                    this.achievementList = response.achievement;
                    this.placementList = response.placement;
                    this.manualFeesList = response.manualFeesList;
                    this.subjectService.getSemesterByCourseId(this.userDetails.course_id).subscribe((response: any) => {
                        this.semesterList = response.data;
                        this.manualFeesForm.patchValue({ course_id: this.userDetails.course_id });
                    })
                } else {
                    this.staffDetails = response.data;
                    this.educations = response.educations;
                    this.stafBookPublicationList = response.publications;
                    this.staffExperienceList = response.experience;
                    this.journalPublicationList = response.journal;
                    this.pgPhdList = response.pgPhd;
                    this.apiScoreList = response.apiScoreList;
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
        } else if (type == 'education_file') {
            this.education_file = event.target.files[0];
        } else if (type == 'labReport') {
            this.labReport = event.target.files[0];
        } else if (type == 'educationFileName') {
            this.educationFileName = event.target.files[0];
        } else if (type == 'experienceProof') {
            this.experienceProof = event.target.files[0];
        } else if (type == 'manualFeesFile') {
            this.manualFeesFile = event.target.files[0];
        } else if (type == 'pgPhdFile') {
            this.pgPhdFile = event.target.files[0];
        } else if (type == 'apiScoreFile') {
            this.apiScoreFile = event.target.files[0];
        } else if (type == 'publicationFile') {
            this.publicationFile = event.target.files[0];
        }
    }

    saveApiScore() {
        if (!this.apiScoreForm.valid) {
            this.apiScoreForm.markAllAsTouched();
            return;
        }

        let formData = new FormData();
        formData.append('id', this.apiScoreForm.value.id);
        formData.append('assignment_year', this.apiScoreForm.value.assignment_year);
        formData.append('file_name', this.apiScoreFile);

        return this.http.post(this.BASE_API_URL + '/saveApiScoreOwn', formData)
            .subscribe((response: any) => {
                // @ts-ignore
                if (response.success == 1) {
                    Swal.fire({
                        title: "Well Done!!",
                        text: "Api Score saved",
                        icon: "success"
                    });
                    this.apiScoreList = response.data
                    this.apiScoreForm.reset();
                    this.isApiScoreUpdate = false;
                }
            });
    }

    editApiScore(data) {
        this.apiScoreForm.patchValue(data);
        this.isApiScoreUpdate = true;
    }
    deleteApiScore(data) {
        Swal.fire({
            title: 'Confirmation',
            text: 'Do you sure to delete course ?',
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete It!'
        }).then((result) => {
            if (result.isConfirmed) {
                return this.http.get(this.BASE_API_URL + '/deleteApiScore/' + data.id)
                    .subscribe((response: any) => {
                        // @ts-ignore
                        if (response.success == 1) {
                            Swal.fire({
                                title: "Well Done!!",
                                text: "journal Deleted",
                                icon: "success"
                            });
                            this.apiScoreList = response.data
                        }
                    });
            }
        });
    }

    savePgPhd() {
        if (!this.pgPhdForm.valid) {
            this.pgPhdForm.markAllAsTouched();
            return;
        }

        let formData = new FormData();
        formData.append('id', this.pgPhdForm.value.id);
        formData.append('student_name', this.pgPhdForm.value.student_name);
        formData.append('course', this.pgPhdForm.value.course);
        formData.append('title_name', this.pgPhdForm.value.title_name);
        formData.append('guide', this.pgPhdForm.value.guide);
        formData.append('co_guide', this.pgPhdForm.value.co_guide);
        formData.append('referance_no', this.pgPhdForm.value.referance_no);
        formData.append('ref_date', this.pgPhdForm.value.ref_date);
        formData.append('status', this.pgPhdForm.value.status);
        formData.append('file_name', this.pgPhdFile);

        return this.http.post(this.BASE_API_URL + '/savePgPhdGuideOwn', formData)
            .subscribe((response: any) => {
                // @ts-ignore
                if (response.success == 1) {
                    Swal.fire({
                        title: "Well Done!!",
                        text: "Pg Phd saved",
                        icon: "success"
                    });
                    this.pgPhdList = response.data
                    this.pgPhdForm.reset();
                    this.isPgPhdUpdate = false;
                }
            });
    }

    editPgPhdGuide(data) {
        this.pgPhdForm.patchValue(data);
        this.isPgPhdUpdate = true;
    }
    cancelpgPhdUpdate() {
        this.pgPhdForm.reset();
        this.isPgPhdUpdate = false;
    }

    deletePgPhdGuide(data) {
        Swal.fire({
            title: 'Confirmation',
            text: 'Do you sure to delete course ?',
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete It!'
        }).then((result) => {
            if (result.isConfirmed) {
                return this.http.get(this.BASE_API_URL + '/deletePgPhdGuide/' + data.id)
                    .subscribe((response: any) => {
                        // @ts-ignore
                        if (response.success == 1) {
                            Swal.fire({
                                title: "Well Done!!",
                                text: "journal Deleted",
                                icon: "success"
                            });
                            this.pgPhdList = response.data
                        }
                    });
            }
        });
    }


    journalFileUpload(event) {
        this.journalFile = event.target.files[0];
    }

    saveJournalPublication() {
        if (!this.journalPublicationForm.valid) {
            this.journalPublicationForm.markAllAsTouched();
            return;
        }

        let formData = new FormData();
        formData.append('id', this.journalPublicationForm.value.id);
        formData.append('journal_name', this.journalPublicationForm.value.journal_name);
        formData.append('publication', this.journalPublicationForm.value.publication);
        formData.append('ugc_affiliation', this.journalPublicationForm.value.ugc_affiliation);
        formData.append('university_name', this.journalPublicationForm.value.university_name);
        formData.append('volume_page_number', this.journalPublicationForm.value.volume_page_number);
        formData.append('issn_number', this.journalPublicationForm.value.issn_number);
        formData.append('topic_name', this.journalPublicationForm.value.topic_name);
        formData.append('impact_factor', this.journalPublicationForm.value.impact_factor);
        formData.append('file_name', this.journalFile);

        return this.http.post(this.BASE_API_URL + '/saveJournalPublicationOwn', formData)
            .subscribe((response: any) => {
                // @ts-ignore
                if (response.success == 1) {
                    Swal.fire({
                        title: "Well Done!!",
                        text: "Education Updated",
                        icon: "success"
                    });
                    this.journalPublicationList = response.data
                    this.journalPublicationForm.reset();
                    this.isUpdatablePublication = false;
                }
            });
    }

    cancelUpdateJournalPublication() {
        this.isUpdatablePublication = false;
    }

    editJournalPublication(data) {
        this.journalPublicationForm.patchValue(data);
        this.isUpdatablePublication = true;
    }

    deleteJournalPublication(data) {
        Swal.fire({
            title: 'Confirmation',
            text: 'Do you sure to delete course ?',
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete It!'
        }).then((result) => {
            if (result.isConfirmed) {
                return this.http.get(this.BASE_API_URL + '/deleteJournalPublication/' + data.id)
                    .subscribe((response: any) => {
                        // @ts-ignore
                        if (response.success == 1) {
                            Swal.fire({
                                title: "Well Done!!",
                                text: "journal Deleted",
                                icon: "success"
                            });
                            this.journalPublicationList = response.journals
                        }
                    });
            }
        });

    }

    saveStaffExperience() {
        if (!this.staffExperienceForm.valid) {
            this.staffExperienceForm.markAllAsTouched();
            return;
        }

        const formData = new FormData();
        formData.append('designation', this.staffExperienceForm.value.designation);
        formData.append('experience', this.staffExperienceForm.value.experience);
        formData.append('organization', this.staffExperienceForm.value.organization);
        formData.append('from_date', this.staffExperienceForm.value.from_date);
        formData.append('to_date', this.staffExperienceForm.value.to_date);
        formData.append('experience_proof', this.experienceProof);


        return this.http.post(this.BASE_API_URL + '/saveExperienceOwn', formData)
            .subscribe((response: any) => {
                // @ts-ignore
                if (response.success == 1) {
                    Swal.fire({
                        title: "Well Done!!",
                        text: "Education Updated",
                        icon: "success"
                    });
                    this.staffExperienceList = response.data
                }
            });
    }

    editStaffExperience(data) {
        this.staffExperienceForm.patchValue(data);
        this.isUpdatableExperience = true;
    }

    deleteStaffExperience(data) {
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
                return this.http.get(this.BASE_API_URL + '/deleteExperience/' + data.id)
                    .subscribe((response: any) => {
                        // @ts-ignore
                        if (response.success == 1) {
                            Swal.fire({
                                title: "Well Done!!",
                                text: "Education Updated",
                                icon: "success"
                            });
                            this.staffExperienceList = response.experiences
                        }
                    });
            }
        });
    }

    updateStaffExperience() {

        if (!this.staffExperienceForm.valid) {
            this.staffExperienceForm.markAllAsTouched();
            return;
        }

        const formData = new FormData();
        formData.append('id', this.staffExperienceForm.value.id);
        formData.append('staff_id', this.staffExperienceForm.value.staff_id);
        formData.append('designation', this.staffExperienceForm.value.designation);
        formData.append('experience', this.staffExperienceForm.value.experience);
        formData.append('organization', this.staffExperienceForm.value.organization);
        formData.append('from_date', this.staffExperienceForm.value.from_date);
        formData.append('to_date', this.staffExperienceForm.value.to_date);
        formData.append('experience_proof', this.experienceProof);

        return this.http.post(this.BASE_API_URL + '/saveExperienceOwn', formData)
            .subscribe((response: any) => {
                // @ts-ignore
                if (response.success == 1) {
                    Swal.fire({
                        title: "Well Done!!",
                        text: "Education Updated",
                        icon: "success"
                    });
                    this.staffExperienceList = response.data
                }
            });
    }

    cancelUpdateExperience() {
        this.isUpdatableExperience = false;
        this.staffExperienceForm.reset();
    }



    saveStaffEducation() {
        if (!this.staffEducationForm.valid) {
            this.staffEducationForm.markAllAsTouched();
            return;
        }

        const formData = new FormData();
        formData.append('id', this.staffEducationForm.value.id);
        formData.append('degree', this.staffEducationForm.value.degree);
        formData.append('specialization', this.staffEducationForm.value.specialization);
        formData.append('university_name', this.staffEducationForm.value.university_name);
        formData.append('percentage', this.staffEducationForm.value.percentage);
        formData.append('grade', this.staffEducationForm.value.grade);
        formData.append('file_name', this.educationFileName);

        return this.http.post(this.BASE_API_URL + '/saveStaffEducationOwn', formData)
            .subscribe((response: any) => {
                // @ts-ignore
                if (response.success == 1) {
                    Swal.fire({
                        title: "Well Done!!",
                        text: "Education Updated",
                        icon: "success"
                    });
                    this.educations = response.educations
                }
            });
    }

    editStaffEducation(data) {
        this.staffEducationForm.patchValue(data);
        this.isUpdatableStaffEducation = true;
    }

    cancelUpdateStaffEducation() {
        this.isUpdatableStaffEducation = false;
        this.staffEducationForm.reset();
    }

    deleteStaffEducation(data) {
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
                this.StaffEducationService.deleteStaffEducation(data.id).subscribe((response: any) => {
                    if (response.success == 1) {
                        this.educations = response.data;
                    }
                })
            }
        });
    }

    editManualFees(data) {
        this.manualFeesForm.patchValue(data);
    }

    saveManualFeesOwn() {
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


    saveStaffPublication() {
        if (!this.staffPublicationForm.valid) {
            this.staffPublicationForm.markAllAsTouched();
            return;
        }

        const formData = new FormData();
        formData.append('id', this.staffPublicationForm.value.id);
        formData.append('staff_id', this.staffPublicationForm.value.staff_id);
        formData.append('ISBN_number', this.staffPublicationForm.value.ISBN_number);
        formData.append('book_name', this.staffPublicationForm.value.book_name);
        formData.append('name_of_publisher', this.staffPublicationForm.value.name_of_publisher);
        formData.append('chapter_full_book', this.staffPublicationForm.value.chapter_full_book);
        formData.append('chapter_name', this.staffPublicationForm.value.chapter_name);
        formData.append('page_number', this.staffPublicationForm.value.page_number);
        formData.append('file_name', this.publicationFile);

        return this.http.post(this.BASE_API_URL + '/saveBookPublicationOwn', formData)
            .subscribe((response: any) => {
                // @ts-ignore
                if (response.success == 1) {
                    Swal.fire({
                        title: "Well Done!!",
                        text: "Publication Updated",
                        icon: "success"
                    });
                    this.stafBookPublicationList = response.data;
                    this.staffPublicationForm.reset();
                }
            });
    }

    editBookPublication(data) {
        this.staffPublicationForm.patchValue(data);
        this.isUpdatableStaffPublication = true;
    }

    cancelUpdateStaffPublication() {
        this.isUpdatableStaffPublication = false;
        this.staffEducationForm.reset();
    }

    deleteStaffBookPublication(data) {
        Swal.fire({
            title: 'Confirmation',
            text: 'Do you sure to delete course ?',
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete It!'
        }).then((result) => {
            if (result.isConfirmed) {
                this.BookPublicationService.deleteBookPublication(data.id).subscribe((response: any) => {
                    if (response.success == 1) {
                        this.stafBookPublicationList = response.data;
                    }
                })
            }
        });
    }



    updateProfileStaff() {
        if (!this.staffUpdateForm.valid) {
            this.staffUpdateForm.markAllAsTouched();
            return;
        }

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
