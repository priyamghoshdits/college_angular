import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentAdmisssionComponent} from "./student-admisssion/student-admisssion.component";
import {CertificateTypesComponent} from "./certificate-types/certificate-types.component";
import {UploadCertificateComponent} from "./upload-certificate/upload-certificate.component";
import {DownloadCertificatesComponent} from "./download-certificates/download-certificates.component";
import {PreAdmissionComponent} from "./pre-admission/pre-admission.component";
import {SendStudentLoginCredentialComponent} from "./send-student-login-credential/send-student-login-credential.component";

const routes: Routes = [
  {
    path: 'student-admission',
    component: StudentAdmisssionComponent,
    data: {
      title: "Student Admission",
      breadcrumb: "Student Admission"
    }
  },
  {
    path: 'pre-admission',
    component: PreAdmissionComponent,
    data: {
      title: "Pre Admission",
      breadcrumb: "Pre Admission"
    }
  },
  {
    path: 'send-login-credentials',
    component: SendStudentLoginCredentialComponent,
    data: {
      title: "Send Login Credentials",
      breadcrumb: "Send Login Credentials"
    }
  },
  {
    path: 'certificate-types',
    component: CertificateTypesComponent,
    data: {
      title: "Certificate Types",
      breadcrumb: "Certificate Types"
    }
  },
  {
    path: 'upload-certificates',
    component: UploadCertificateComponent,
    data: {
      title: "Upload Certificate",
      breadcrumb: "Upload Certificate"
    }
  },
  {
    path: 'download-certificates',
    component: DownloadCertificatesComponent,
    data: {
      title: "Download Certificate",
      breadcrumb: "Download Certificate"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentInformationRoutingModule { }
