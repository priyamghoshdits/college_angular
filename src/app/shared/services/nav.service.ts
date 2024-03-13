import { Injectable, HostListener } from '@angular/core';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "../../services/error.service";

// Menu
export interface Menu {
	path?: string;
	title?: string;
	icon?: string;
	hidden?: boolean;
	type?: string;
	badgeType?: string;
	badgeValue?: string;
	active?: boolean;
	bookmark?: boolean;
	children?: Menu[];
}

@Injectable({
	providedIn: 'root'
})

export class NavService {

	public screenWidth: any
	public collapseSidebar: boolean = false
	public fullScreen = false;

	constructor() {
		this.onResize();
		if (this.screenWidth < 991) {
			this.collapseSidebar = true
		}

	}

	// Windows width
	@HostListener('window:resize', ['$event'])
	onResize(event?:any) {
		this.screenWidth = window.innerWidth;
	}

	MENUITEMS: Menu[] = [
		{
			title: 'Academics', hidden: false, icon: 'home', type: 'sub', badgeType: 'primary', active: false, children: [
				{ path: '/academics/subject-group', title: 'Subject Group', type: 'link', hidden: false },
				{ path: '/academics/assign-semester-teacher', title: 'Assign Semester Teacher', type: 'link', hidden: false  },
				{ path: '/academics/create-semester-timeTable', title: 'Create Semester Timetable', type: 'link', hidden: false  },
				{ path: '/academics/semester-timetable', title: 'Semester Timetable', type: 'link', hidden: false  },
				{ path: '/academics/course', title: 'Course', type: 'link', hidden: false  },
				{ path: '/academics/semester', title: 'Semester', type: 'link', hidden: false , },
				{ path: '/academics/subject', title: 'Subject', type: 'link', hidden: false  },
				{ path: '/academics/session', title: 'Session', type: 'link', hidden: false  },
				{ path: '/academics/promote-students', title: 'Promote Students', type: 'link', hidden: false  },
			]
		},
		{
			title: 'Human Resource', hidden:false , icon: 'home', type: 'sub', badgeType: 'primary', active: false, children: [
				{ path: '/human-resource/add-staff', title: 'Staff', type: 'link' },
				{ path: '/human-resource/staff-attendance', title: 'Staff Attendance', type: 'link' }, // need to be added
				{ path: '/human-resource/leave-type', title: 'Leave Type', type: 'link' },
				{ path: '/human-resource/allocate-leave', title: 'Allocate Leave', type: 'link' },
				{ path: '/human-resource/apply-leave', title: 'Apply Leave', type: 'link' },
				{ path: '/human-resource/approve-leave', title: 'Approve Leave', type: 'link' },
				{ path: '/human-resource/department', title: 'Department', type: 'link' },
				{ path: '/human-resource/designation', title: 'Designation', type: 'link' },
				{ path: '/human-resource/caste', title: 'Caste', type: 'link' },
				{ path: '/human-resource/holiday', title: 'Holiday', type: 'link' },
				{ path: '/human-resource/staff-payroll', title: 'Payroll', type: 'link' },
				{ path: '/human-resource/payroll-types', title: 'Payroll Types', type: 'link' },
			]
		},
		{
			title: 'Attendance', hidden:false , icon: 'home', type: 'sub', badgeType: 'primary', active: false, children: [
				{ path: '/attendance/period-attendance', title: 'Period Attendance', type: 'link' },
				{ path: '/attendance/show-attendance', title: 'Show Attendance', type: 'link' },
			]
		},
		{
			title: 'Library', hidden:false , icon: 'home', type: 'sub', badgeType: 'primary', active: false, children: [
				{ path: '/library/item-stock', title: 'Add Item', type: 'link' },
				{ path: '/library/issue-item', title: 'Issue Book', type: 'link' },
				{ path: '/library/book-list', title: 'Book List', type: 'link' },
				{ path: '/library/return-over-period', title: 'Return Over Period', type: 'link' },
				{ path: '/library/discount-fine', title: 'Discount Book Fine', type: 'link' },
				{ path: '/library/upload-digital-book', title: 'Upload Digital Book', type: 'link' },
				{ path: '/library/download-digital-book', title: 'Download Digital Book', type: 'link' },
			]
		},
		{
			title: 'Income', hidden:false , icon: 'home', type: 'sub', badgeType: 'primary', active: false, children: [
				{ path: '/income/income-head', title: 'Income Head', type: 'link' },
				{ path: '/income/add-income', title: 'Add Income', type: 'link' },
			]
		},
		{
			title: 'Expense', hidden:false , icon: 'home', type: 'sub', badgeType: 'primary', active: false, children: [
				{ path: '/expense/expense-head', title: 'Expense Head', type: 'link' },
				{ path: '/expense/add-expense', title: 'Add Expense', type: 'link' },
			]
		},
		{
			title: 'Hostel', hidden:false , icon: 'home', type: 'sub', badgeType: 'primary', active: false, children: [
				{ path: '/hostel/hostel', title: 'Add Hostel', type: 'link' },
				{ path: '/hostel/roomType', title: 'Room Type', type: 'link' },
				{ path: '/hostel/addHostelRooms', title: 'Add Hostel Room', type: 'link' },
			]
		},
		{
			title: 'Inventory', hidden:false , icon: 'home', type: 'sub', badgeType: 'primary', active: false, children: [
				{ path: '/inventory/inventory-item', title: 'Item Category', type: 'link' },
				{ path: '/inventory/add-item', title: 'Add Item', type: 'link' },
				{ path: '/inventory/item-supplier', title: 'Item Supplier', type: 'link' },
				{ path: '/inventory/item-store', title: 'Item Store', type: 'link' },
				{ path: '/inventory/item-stock', title: 'Add Item Stock', type: 'link' },
				{ path: '/inventory/issue-item', title: 'Issue Item', type: 'link' },
			]
		},
		{
			title: 'Internship', hidden:false , icon: 'home', type: 'sub', badgeType: 'primary', active: false, children: [
				{ path: '/internship/internshipProvider', title: 'Internship Provider', type: 'link' },
				{ path: '/internship/internship', title: 'Internship Details', type: 'link' },
			]
		},
		{
			title: 'Student Information', hidden:false , icon: 'home', type: 'sub', badgeType: 'primary', active: false, children: [
				{ path: '/student-information/student-admission', title: 'Student Admission', type: 'link' },
				{ path: '/student-information/pre-admission', title: 'Pre Admission', type: 'link' },
				{ path: '/student-information/certificate-types', title: 'Certificate Types', type: 'link' },
				{ path: '/student-information/upload-certificates', title: 'Upload Certificate', type: 'link' },
				{ path: '/student-information/download-certificates', title: 'Download Certificate', type: 'link' },
				{ path: '/student-information/send-login-credentials', title: 'Send Login Credential', type: 'link' },
			]
		},
		{
			title: 'Communication', hidden:false , icon: 'home', type: 'sub', badgeType: 'primary', active: false, children: [
				{ path: '/communication/notice', title: 'Notice', type: 'link' },
			]
		},
		{
			title: 'Examination', hidden:false , icon: 'home', type: 'sub', badgeType: 'primary', active: false, children: [
				{ path: '/examination/subject-details', title: 'Subject Details', type: 'link' },
				{ path: '/examination/subject-questions', title: 'Subject Question', type: 'link' },
				{ path: '/examination/exam', title: 'Exam', type: 'link' },
			]
		},
		{
			title: 'Virtual Class Meeting', hidden:false , icon: 'home', type: 'sub', badgeType: 'primary', active: false, children: [
				{ path: '/virtual-class-meeting/create-virtual-class', title: 'Virtual Class', type: 'link' },
				{ path: '/virtual-class-meeting/virtual-meeting', title: 'Virtual Meeting', type: 'link' },
			]
		},
		{
			title: 'Fees Collection', hidden:false , icon: 'home', type: 'sub', badgeType: 'primary', active: false, children: [
				{ path: '/fees-collection/fees-type', title: 'Fees Type', type: 'link' },
				{ path: '/fees-collection/fees-structure', title: 'Fees Structure', type: 'link' },
				{ path: '/fees-collection/collect-fees', title: 'Collect Fees', type: 'link' },
				{ path: '/fees-collection/discount', title: 'Discount/Scholarship', type: 'link' },
				{ path: '/fees-collection/search-fees-payment', title: 'Search Fees Payment', type: 'link' },
			]
		},
		{
			title: 'Report', hidden:false , icon: 'home', type: 'sub', badgeType: 'primary', active: false, children: [
				{ path: '/report/attendance-report', title: 'Attendance report', type: 'link' },
				{ path: '/report/examination-report', title: 'Examination report', type: 'link' },
				{ path: '/report/fees-collection-report', title: 'Fees Collection report', type: 'link' },
				{ path: '/report/fees-due-report', title: 'Fees Due report', type: 'link' },
				{ path: '/report/admission-report', title: 'Admission report', type: 'link' },
			]
		},
		{
			title: 'Others', hidden:false , icon: 'home', type: 'sub', badgeType: 'primary', active: false, children: [
				{ path: '/others/agent', title: 'Agent', type: 'link' },
				{ path: '/others/roles-and-permission', title: 'Roles And Permission', type: 'link' },
				{ path: '/others/user-types', title: 'Add User Type', type: 'link' },
				{ path: '/others/user-logs', title: 'User Logs', type: 'link' },
				{ path: '/others/franchise', title: 'Franchise', type: 'link' },
				{ path: '/others/icard', title: 'Icard', type: 'link' },
				{ path: '/others/agent-student-entry', title: 'Agent Student Entry', type: 'link' },
				{ path: '/others/agent-payment', title: 'Agent Payment', type: 'link' },
			]
		},
		{
			title: 'Download Center', hidden:false , icon: 'home', type: 'sub', badgeType: 'primary', active: false, children: [
				{ path: '/download-center/upload-content', title: 'Upload Content', type: 'link' },
				{ path: '/download-center/assignment', title: 'Assignment', type: 'link' },
				{ path: '/download-center/study-material', title: 'Study Material', type: 'link' },
				{ path: '/download-center/syllabus', title: 'Syllabus', type: 'link' },
			]
		},
		// {
		// 	title: 'Dashboard', icon: 'home', type: 'sub', badgeType: 'primary', badgeValue: 'new', active: true, children: [
		// 		{ path: '/dashboard/default', title: 'Default', type: 'link' },
		// 		{ path: '/dashboard/e-commerce', title: 'E-Commerce', type: 'link', },
		// 		{ path: '/dashboard/university', title: 'University', type: 'link' },
		// 		{ path: '/dashboard/bitcoin', title: 'Crypto', type: 'link' },
		// 		{ path: '/dashboard/server', title: 'Server', type: 'link' },
		// 		{ path: '/dashboard/project', title: 'Project', type: 'link' }
		// 	]
		// },
		// {
		// 	title: 'Widgets', icon: 'airplay', type: 'sub', active: false, children: [
		// 		{ path: '/widgets/general', title: 'General', type: 'link' },
		// 		{ path: '/widgets/chart', title: 'Chart', type: 'link' }
		// 	]
		// },
		// {
		// 	title: 'UI-Elements', icon: 'slack', type: 'sub', active: false, children: [
		// 		{ path: '/ui-elements/avatars', title: 'Avatars', type: 'link' },
		// 		{ path: '/ui-elements/breadcrumb', title: 'Breadcrumb', type: 'link' },
		// 		{ path: '/ui-elements/grid', title: 'Grid', type: 'link' },
		// 		{ path: '/ui-elements/helper-classes', title: 'Helper-Classes', type: 'link' },
		// 		{ path: '/ui-elements/list', title: 'List', type: 'link' },
		// 		{ path: '/ui-elements/ribbons', title: 'Ribbons', type: 'link' },
		// 		{ path: '/ui-elements/shadow', title: 'Shadow', type: 'link' },
		// 		{ path: '/ui-elements/spinner', title: 'Spinner', type: 'link' },
		// 		{ path: '/ui-elements/steps', title: 'Steps', type: 'link' },
		// 		{ path: '/ui-elements/tag-n-pills', title: 'Tag and Pills', type: 'link' },
		// 		{ path: '/ui-elements/typography', title: 'Typography', type: 'link' }
		// 	]
		// },
		//
		// {
		// 	title: 'Base', icon: 'box', type: 'sub', active: false, children: [
		// 		{ path: '/base/accordion', title: 'Accordion', type: 'link' },
		// 		{ path: '/base/alert', title: 'Alert', type: 'link' },
		// 		{ path: '/base/buttons', title: 'Buttons', type: 'link' },
		// 		{ path: '/base/carousel', title: 'Carousel', type: 'link' },
		// 		{ path: '/base/collapse', title: 'Collapse', type: 'link' },
		// 		{ path: '/base/datepicker', title: 'Datepicker', type: 'link' },
		// 		{ path: '/base/dropdown', title: 'Dropdown', type: 'link' },
		// 		{ path: '/base/modal', title: 'Modal', type: 'link' },
		// 		{ path: '/base/pagination', title: 'Pagination', type: 'link' },
		// 		{ path: '/base/popover', title: 'Popover', type: 'link' },
		// 		{ path: '/base/progressbar', title: 'Progressbar', type: 'link' },
		// 		{ path: '/base/rating', title: 'Rating', type: 'link' },
		// 		{ path: '/base/tabset', title: 'Tabset', type: 'link' },
		// 		{ path: '/base/timepicker', title: 'Timepicker', type: 'link' },
		// 		{ path: '/base/tooltip', title: 'Tooltip', type: 'link' },
		// 		{ path: '/base/typeahead', title: 'Typeahead', type: 'link' }
		// 	]
		// },
		// {
		// 	title: 'Advance', icon: 'folder-plus', type: 'sub', active: false, children: [
		// 		{ path: '/advance/dropzone', title: 'Dropzone', type: 'link' },
		// 		{ path: '/advance/crop', title: 'Image Cropper', type: 'link' },
		// 		{ path: '/advance/toastr', title: 'Ngx Toastr', type: 'link' },
		// 		{ path: '/advance/owl-carousel', title: 'Owl-Carousel', type: 'link' },
		// 		{ path: '/advance/range-slider', title: 'Range Slider', type: 'link' },
		// 		{ path: '/advance/sticky', title: 'Sticky', type: 'link' },
		// 		{ path: '/advance/sweetalert', title: 'SweetAlert', type: 'link' },
		// 	]
		// },
		// {
		// 	title: 'Icons', icon: 'command', type: 'sub', active: false, children: [
		// 		{ path: '/icons/flag', title: 'Flag icon', type: 'link' },
		// 		{ path: '/icons/fontawesome', title: 'Fontawesome Icon', type: 'link' },
		// 		{ path: '/icons/ico', title: 'Ico Icon', type: 'link' },
		// 		{ path: '/icons/themify', title: 'Themify Icon', type: 'link' },
		// 		{ path: '/icons/feather', title: 'Feather Icon', type: 'link' },
		// 		{ path: '/icons/whether', title: 'Whether Icon', type: 'link' }
		// 	]
		// },
		// {
		// 	title: 'Buttons', icon: 'cloud', type: 'sub', active: false, children: [
		// 		{ path: '/buttons/default', title: 'Default Style', type: 'link' },
		// 		{ path: '/buttons/flat', title: 'Flat Style', type: 'link' },
		// 		{ path: '/buttons/edge', title: 'Edge Style', type: 'link' },
		// 		{ path: '/buttons/raised', title: 'Raised Style', type: 'link' },
		// 		{ path: '/buttons/group', title: 'Button Group', type: 'link' }
		// 	]
		// },
		// {
		// 	title: 'Gallery', icon: 'book', type: 'sub', children: [
		// 		{ path: '/gallery/gallery-grid', title: 'Gallery Grid', type: 'link' },
		// 		{ path: '/gallery/gallery-desc', title: 'Gallery Grid With Desc', type: 'link' },
		// 		{ path: '/gallery/mesonry', title: 'Masonry Gallery', type: 'link' },
		// 		{ path: '/gallery/hover-effect', title: 'Hover Effect', type: 'link' }
		// 	]
		// },
		// {
		// 	title: 'Forms', icon: 'file-text', type: 'sub', active: false, children: [
		// 		{
		// 			title: 'Form Controls', type: 'sub', children: [
		// 				{ path: '/form/validation', title: 'Form Validation', type: 'link' },
		// 				{ path: '/form/inputs', title: 'Base Inputs', type: 'link' },
		// 				{ path: '/form/checkbox-radio', title: 'Checkbox & Radio', type: 'link' },
		// 				{ path: '/form/input-groups', title: 'Input Groups', type: 'link' },
		// 				{ path: '/form/mega-options', title: 'Mega Options', type: 'link' }
		// 			]
		// 		},
		// 		{ path: '/form/form-default', title: 'Form Default', type: 'link' },
		//
		// 	]
		// },
		//
		// {
		// 	title: 'Tables', icon: 'server', type: 'sub', active: false, children: [
		// 		{
		// 			title: 'Bootstrap Tables', type: 'sub', active: false, children: [
		// 				{ path: '/table/basic', title: 'Basic Table', type: 'link' },
		// 				{ path: '/table/sizing', title: 'Sizing Table', type: 'link' },
		// 				{ path: '/table/border', title: 'Border Table', type: 'link' },
		// 				{ path: '/table/styling', title: 'Styling Table', type: 'link' }
		// 			]
		// 		},
		// 		{
		// 			title: 'Ngx-Datatables', type: 'sub', active: false, children: [
		// 				{ path: '/table/ngx-datatables/basic', title: 'Basic Table', type: 'link' },
		// 			]
		// 		}]
		// },
		// {
		// 	title: 'Cards', icon: 'book', type: 'sub', active: false, children: [
		// 		{ path: '/cards/basic', title: 'Basic Card', type: 'link' },
		// 		{ path: '/cards/creative', title: 'Creative Card', type: 'link' },
		// 		{ path: '/cards/tabbed', title: 'Tabbed Card', type: 'link' },
		// 	]
		// },
		// {
		// 	title: 'Timeline', icon: 'sliders', type: 'sub', active: false, children: [
		// 		{ path: '/timeline/timeline1', title: 'Timeline', type: 'link' }
		// 	]
		// },
		// {
		// 	title: 'Charts', icon: 'bar-chart', type: 'sub', active: false, children: [
		// 		{ path: '/chart/google', title: 'Google Chart', type: 'link' },
		// 		{ path: '/chart/chartjs', title: 'Chartjs', type: 'link' },
		// 		{ path: '/chart/chartist', title: 'Chartist', type: 'link' },
		// 		{ path: '/chart/ngx-chart', title: 'Ngx-Chart', type: 'link' }
		// 	]
		// },
		// {
		// 	title: 'Map', icon: 'map', type: 'sub', active: false, children: [
		// 		{ path: '/map/google', title: 'Google Map', type: 'link' },
		// 		{ path: '/map/leaflet', title: 'Leaflet Map', type: 'link' }
		// 	]
		// },
		// {
		// 	path: '/editor', title: 'Editor', icon: 'git-pull-request', type: 'link'
		// },
		// {
		// 	title: 'Users', icon: 'users', type: 'sub', active: false, children: [
		// 		{ path: '/users/profile', title: 'Users Profile', type: 'link' },
		// 		{ path: '/users/show-profile', title: 'Show Profile', type: 'link' },
		// 		{ path: '/users/cards', title: 'Users Cards', type: 'link' }
		// 	]
		// },
		// {
		// 	path: '/calender', title: 'Calender', icon: 'calendar', type: 'link', bookmark: true
		// },
		// {
		// 	title: 'Blog', icon: 'edit', type: 'sub', active: false, children: [
		// 		{ path: '/blog/details', title: 'Blog Details', type: 'link' },
		// 		{ path: '/blog/single', title: 'Blog Single', type: 'link' }
		// 	]
		// },
		// {
		// 	path: '/email', title: 'Email', icon: 'mail', type: 'link', bookmark: true
		// },
		// {
		// 	path: '/contact/contacts', title: 'contact', icon: 'user-plus', type: 'link'
		// },
		// {
		// 	path: '/chat', title: 'Chat', icon: 'message-square', type: 'link', bookmark: true
		// },
		// {
		// 	path: '/social-app', title: 'Social App', icon: 'chrome', type: 'link'
		// },
		// {
		// 	title: 'Job-Search', icon: 'user-check', type: 'sub', active: false, children: [
		// 		{ path: '/job-search/cardview', title: 'Card View', type: 'link' },
		// 		{ path: '/job-search/listview', title: 'List View', type: 'link' },
		// 		{ path: '/job-search/job-desc/1', title: 'Job Detail', type: 'link' },
		// 		{ path: '/job-search/job-apply/1', title: 'Apply', type: 'link' }
		// 	]
		// },
		// {
		// 	title: 'Learning', icon: 'layers', type: 'sub', active: false, children: [
		// 		{ path: '/learning/learninglist', title: 'Learning List', type: 'link' },
		// 		{ path: '/learning/learning-detail/1', title: 'Detail Course', type: 'link' },
		// 	]
		// },
		// {
		// 	path: '/faq', title: 'FAQ', icon: 'help-circle', type: 'link'
		// },
		// {
		// 	path: '/knowledgebase', title: 'Knowledgebase', icon: 'database', type: 'link'
		// },
		// {
		// 	path: '/support-ticket', title: 'Support Ticket', icon: 'headphones', type: 'link'
		// },
		// {
		// 	path: '/to-do', title: 'To-Do', icon: 'mic', type: 'link'
		// },
		// {
		// 	title: 'Ecommerce', icon: 'shopping-bag', type: 'sub', active: false, children: [
		// 		{ path: '/ecommerce/products', title: 'Product', type: 'link' },
		// 		{ path: '/ecommerce/product-details/1', title: 'Product page', type: 'link' },
		// 		{ path: '/ecommerce/product/list', title: 'Product list', type: 'link' },
		// 		{ path: '/ecommerce/payment/detail', title: 'Payment Details', type: 'link' },
		// 		{ path: '/ecommerce/order', title: 'Order History', type: 'link' }
		// 	]
		// },
		// {
		// 	path: '/pricing', title: 'Pricing', icon: 'dollar-sign', type: 'link'
		// },
		// {
		// 	path: '/sample-page', title: 'Sample page', icon: 'file', type: 'link'
		// },
		// {
		// 	path: '/search-result', title: 'Search Page', icon: 'search', type: 'link'
		// },
		// {
		// 	title: 'Error Page', icon: 'alert-octagon', type: 'sub', active: false, children: [
		// 		{ path: 'error/400', title: 'Error 400', type: 'extTabLink' },
		// 		{ path: 'error/401', title: 'Error 401', type: 'extTabLink' },
		// 		{ path: 'error/403', title: 'Error 403', type: 'extTabLink' },
		// 		{ path: 'error/404', title: 'Error 404', type: 'extTabLink' },
		// 		{ path: 'error/500', title: 'Error 500', type: 'extTabLink' },
		// 		{ path: 'error/503', title: 'Error 503', type: 'extTabLink' }
		// 	]
		// },
		// {
		// 	title: 'Authentication', icon: 'unlock', type: 'sub', active: false, children: [
		// 		{ path: 'authentication/login', title: 'Login Simple', type: 'extTabLink' },
		// 		{ path: 'authentication/login/image', title: 'Login with Bg Image', type: 'extTabLink' },
		// 		{ path: 'authentication/login/video', title: 'Login with Bg video', type: 'extTabLink' },
		// 		{ path: 'authentication/register', title: 'Register Simple', type: 'extTabLink' },
		// 		{ path: 'authentication/register/image', title: 'Register with Bg Image', type: 'extTabLink' },
		// 		{ path: 'authentication/register/video', title: 'Register with Bg video', type: 'extTabLink' },
		// 		{ path: 'authentication/unlockuser', title: 'Unlock User', type: 'extTabLink' },
		// 		{ path: 'authentication/forgetpassword', title: 'Forget Password', type: 'extTabLink' },
		// 		{ path: 'authentication/resetpassword', title: 'Reset Password', type: 'extTabLink' }
		// 	]
		// },
		// {
		// 	title: 'Coming Soon', icon: 'briefcase', type: 'sub', active: false, children: [
		// 		{ path: 'comingsoon/page', title: 'Coming Simple', type: 'extTabLink' },
		// 		{ path: 'comingsoon/page/image', title: 'Coming with Bg Image', type: 'extTabLink' },
		// 		{ path: 'comingsoon/page/video', title: 'Coming with Bg video', type: 'extTabLink' }
		// 	]
		// },
		// {
		// 	path: '/maintenance', title: 'Maintenance', icon: 'settings', type: 'link'
		// },
	]
	// Array
	items = new BehaviorSubject<Menu[]>(this.MENUITEMS);


}
