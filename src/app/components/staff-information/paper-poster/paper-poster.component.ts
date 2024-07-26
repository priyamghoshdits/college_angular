import { JsonPipe, NgFor, NgForOf, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgbNav, NgbNavItem, NgbNavLink, NgbNavLinkBase, NgbNavOutlet } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxPaginationModule } from 'ngx-pagination';
import { MemberService } from 'src/app/services/member.service';
import { PaperPosterService } from 'src/app/services/paper-poster.service';
import { RolesAndPermissionService } from 'src/app/services/roles-and-permission.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-paper-poster',
  standalone: true,
  imports: [
    FormsModule,
    MatIconModule,
    NgForOf,
    NgxPaginationModule,
    ReactiveFormsModule,
    NgIf,
    NgbNav,
    NgbNavLink,
    NgbNavLinkBase,
    NgbNavItem,
    NgbNavOutlet,
    JsonPipe,
    NgSelectModule
  ],
  templateUrl: './paper-poster.component.html',
  styleUrl: './paper-poster.component.scss'
})
export class PaperPosterComponent {
  paperPosterForm: FormGroup;
  rolesAndPermission: any[] = [];
  permission: any[] = [];
  memberList: any[] = [];
  counter: number = 0;
  active: number = 1;
  paperField: any[] = [1];
  paperPosterArray: any[] = [];
  fileArray: File[] = [];
  isUpdatable: boolean = false;
  paperPosterList: any[] = [];
  maxSize = 1 * 1024 * 1024; // 1 MB in bytes

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

    this.paperPosterForm = new FormGroup({
      from_date: new FormControl(null, [Validators.required]),
      to_date: new FormControl(null, [Validators.required]),
      staff_id: new FormControl(null),
    })

    this.memberService.getMemberListener().subscribe((response) => {
      this.memberList = response;
    });
    this.memberList = this.memberService.getMemberList();

    this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
      this.rolesAndPermission = response;
      this.permission = this.rolesAndPermission.find(x => x.name == 'PAPER POSTER').permission;
    });
    this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
    if (this.rolesAndPermission.length > 0) {
      this.permission = this.rolesAndPermission.find(x => x.name == 'PAPER POSTER').permission;
    }
  }


  getPaperSetting() {
    this.paperPosterService.searchPaperSetter(this.paperPosterForm.value).subscribe((response: any) => {
      if (response.success == 1) {
        this.paperPosterList = response.data;
      }
    })
  }


  calculateNoOFDate(index) {
    if (this.paperPosterArray[index].date_from && this.paperPosterArray[index].date_to) {
      // @ts-ignore
      let x = Math.floor(((new Date(this.paperPosterArray[index].date_to) - new Date(this.paperPosterArray[index].date_from))) / (1000 * 60 * 60 * 24)) + 1;
      this.paperPosterArray[index].duration = x;
    }
  }

  editPaperSetter(data) {
    this.paperPosterArray[0].id = data.id;
    this.paperPosterArray[0].staff_id = data.staff_id;
    this.paperPosterArray[0].topic_name = data.topic_name;
    this.paperPosterArray[0].type = data.type;
    this.paperPosterArray[0].venue = data.venue;
    this.paperPosterArray[0].organized_by = data.organized_by;
    this.paperPosterArray[0].seminer_topic = data.seminer_topic;
    this.paperPosterArray[0].seminer_type = data.seminer_type;
    this.paperPosterArray[0].date_from = data.date_from;
    this.paperPosterArray[0].date_to = data.date_to;
    this.paperPosterArray[0].duration = data.duration;
    this.paperPosterArray[0].acivement = data.acivement;
    this.paperPosterArray[0].file_name = data.file_name;
    this.active = 1;
    this.isUpdatable = true;
  }

  deletePaperSetter(data) {
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
        this.paperPosterService.deeletePaperPoster(data.id).subscribe((response: any) => {
          if (response.success == 1) {
            this.paperPosterList = response.data;
          }
        })
      }
    });
  }


  fileUpload(event, index) {
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

    const file = event.target.files[0];
    if (file) {
      this.fileArray[index] = file;
      this.paperPosterArray[index].file_name = file.name;
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
          title: 'Paper Posetr Saved',
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

    const formData = new FormData();
    formData.append('id', this.paperPosterArray[0].id);
    formData.append('staff_id', this.paperPosterArray[0].staff_id);
    formData.append('topic_name', this.paperPosterArray[0].topic_name);
    formData.append('type', this.paperPosterArray[0].type);
    formData.append('venue', this.paperPosterArray[0].venue);
    formData.append('organized_by', this.paperPosterArray[0].organized_by);
    formData.append('seminer_topic', this.paperPosterArray[0].seminer_topic);
    formData.append('seminer_type', this.paperPosterArray[0].seminer_type);
    formData.append('date_from', this.paperPosterArray[0].date_from);
    formData.append('date_to', this.paperPosterArray[0].date_to);
    formData.append('duration', this.paperPosterArray[0].duration);
    formData.append('acivement', this.paperPosterArray[0].acivement);
    formData.append('file_name', this.fileArray[0]);

    this.paperPosterService.updatePaperPoster(formData).subscribe((response: any) => {
      if (response.success == 1) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Paper Poster Updated',
          showConfirmButton: false,
          timer: 1000
        });
        this.paperField = [1];
        this.paperPosterForm.reset();
        this.cancelUpdate();
        this.paperPosterList = [];
      }
    })
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
