import {Component} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {ActivatedRoute} from "@angular/router";
import {MemberService} from "../../../services/member.service";
import {NgForOf, NgIf} from "@angular/common";

@Component({
    selector: 'app-staff-profile',
    standalone: true,
    imports: [
        NgIf,
        NgForOf
    ],
    templateUrl: './staff-profile.component.html',
    styleUrl: './staff-profile.component.scss'
})
export class StaffProfileComponent {
    public FILE_URL = environment.FILE_URL;
    staff_details: any = null;
    education_qualification: any = null;
    staff_experience: any = null;
    journal_publication: any = null;
    book_publication: any = null;

    constructor(private route: ActivatedRoute, private memberService: MemberService) {
        this.route.params.subscribe(params => {
            this.memberService.getSingleMemberFullDetails(params['id']).subscribe((response: any) => {
                if (response.success == 1) {
                    this.staff_details = response.member_data;
                    this.education_qualification = response.educational_qualification;
                    this.staff_experience = response.staff_experience;
                    this.journal_publication = response.journal_publication;
                    this.book_publication = response.journal_publication;
                }
            })
        });
    }

    protected readonly File = File;
}
