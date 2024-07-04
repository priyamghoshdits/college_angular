import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgbNav, NgbNavItem, NgbNavOutlet } from '@ng-bootstrap/ng-bootstrap';
import { MemberService } from 'src/app/services/member.service';
import { PaperPosterService } from 'src/app/services/paper-poster.service';
import { RolesAndPermissionService } from 'src/app/services/roles-and-permission.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-paper-poster',
  standalone: true,
  imports: [
    NgbNavItem,
    NgbNavOutlet,
    NgbNav,
    FormsModule,
    ReactiveFormsModule,
    NgFor,
    NgIf,
    MatIconModule
  ],
  templateUrl: './paper-poster.component.html',
  styleUrl: './paper-poster.component.scss'
})
export class PaperPosterComponent {
  rolesAndPermission: any[] = [];
  permission: any[] = [];
  memberList: any[] = [];
  counter: number = 0;
  active: number = 1;
  paperField: any[] = [1];
  paperPosterArray: any[] = [];
  fileArray: any[] = [];
  isUpdatable: boolean = false;

  constructor(private roleAndPermissionService: RolesAndPermissionService, private memberService: MemberService, private paperPosterService: PaperPosterService) {

    this.paperPosterArray = [
      {
        'id': null,
        'staff_id': null,
        'topic_name': null,
        'type': null,
        'venue': null,
        'organized_by': null,
        'seminer_topic': null,
        'seminer_type': null,
        'date_from': null,
        'date_to': null,
        'duration': null,
        'acivement': null,
        'file_name': null,
      }
    ];

    this.memberService.getMemberListener().subscribe((response) => {
      this.memberList = response;
    });
    this.memberList = this.memberService.getMemberList();

    this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
      this.rolesAndPermission = response;
      this.permission = this.rolesAndPermission.find(x => x.name == 'PAPER SETTER').permission;
    });
    this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
    if (this.rolesAndPermission.length > 0) {
      this.permission = this.rolesAndPermission.find(x => x.name == 'PAPER SETTER').permission;
    }
  }

  fileUpload(event, index) {
    const file = event.target.files[0];
    if (file) {
      this.fileArray[index] = file;
      this.paperPosterArray[index].file_name = file.file_name;
    }
  }

  savePaperPoster() {
    this.fileArray.forEach((file, index) => {
      const formdata = new FormData();
      formdata.append('paper_poster', file);

      this.paperPosterService.saveUploadFile(formdata).subscribe((rsponse: any) => {
        // this.paperPosterArray[index].file_name = rsponse.file_name;
      });
    })

    let array = {
      'paper_poster_array': this.paperPosterArray
    }

    this.paperPosterService.savePaperPoster(array).subscribe((rsponse: any) => {
      console.log(rsponse);
      if (rsponse.success == 1) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Data Saved',
          showConfirmButton: false,
          timer: 1000
        });

        this.paperField = [1];

        this.paperPosterArray[0] = [
          {
            'id': null,
            'staff_id': null,
            'topic_name': null,
            'type': null,
            'venue': null,
            'organized_by': null,
            'seminer_topic': null,
            'seminer_type': null,
            'date_from': null,
            'date_to': null,
            'duration': null,
            'acivement': null,
            'file_name': null,
          }
        ];
      }
    });
  }

  updatePaperPoster() {

  }

  cancelUpdate() {

  }

  addField() {
    this.counter = this.counter + 1;
    this.paperField[this.counter] = [];

    const array = {
      'id': null,
      'staff_id': null,
      'topic_name': null,
      'type': null,
      'venue': null,
      'organized_by': null,
      'seminer_topic': null,
      'seminer_type': null,
      'date_from': null,
      'date_to': null,
      'duration': null,
      'acivement': null,
      'file_name': null,
    };

    this.paperPosterArray.push(array);
  }

  activeTab(data) {
    this.active = data;
  }
}
