import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

interface AuthResponse {
    accessToken: string;
    customerId: any;
}
@Injectable({ providedIn: 'root' })



export class userService {
    private apiUrl = environment.url + '/access/login';

    constructor(private http: HttpClient) { }

    async authenticateUser(tridentToken: string): Promise<AuthResponse> {
        return await firstValueFrom(
            this.http.post<AuthResponse>(
                this.apiUrl,
                { data: { token: tridentToken } }
            )
        );
    }


}
