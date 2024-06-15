import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {Subject} from "rxjs";
import {catchError, tap} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class AchievementService {
    private BASE_API_URL = environment.BASE_API_URL;

    achievementList = [];
    achievementListSubject = new Subject<any[]>();

    getAchievementListListener(){
        return this.achievementListSubject.asObservable();
    }

    constructor(private http: HttpClient, private errorService: ErrorService) {
        this.http.get(this.BASE_API_URL + '/getAchievement').subscribe((response: any) => {
            this.achievementList = response.data;
            this.achievementListSubject.next([...this.achievementList]);
        });
    }

    getAchievementList(){
        return [...this.achievementList];
    }

    saveAchievement(value) {
        return this.http.post(this.BASE_API_URL + '/saveAchievement', value)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if(response.success == 1){
                    // @ts-ignore
                    this.achievementList.push(response.data);
                    this.achievementListSubject.next([...this.achievementList]);
                }
            }));
    }

    updateAchievement(value){
        return this.http.post(this.BASE_API_URL + '/updateAchievement', value)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if(response.success == 1){
                    // @ts-ignore
                    const index = this.achievementList.findIndex(x => x.id === response.data.id);
                    // @ts-ignore
                    this.achievementList[index] = response.data;
                    this.achievementListSubject.next([...this.achievementList]);
                }
            }));
    }

    deleteAchievement(id){
        return this.http.get(this.BASE_API_URL + '/deleteAchievement/' + id)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if(response.success == 1){
                    // @ts-ignore
                    const index = this.achievementList.findIndex(x => x.id === response.data.id);
                    // @ts-ignore
                    this.achievementList.splice(index,1);
                    this.achievementListSubject.next([...this.achievementList]);
                }
            }));
    }

}
