import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}
  // Provide username and password for authentication, and once authentication is successful,
  //store JWT token in session
   
  
    isLoggedIn() {
      let user = sessionStorage.getItem("username");
  
      return !(user === null);
    }
  
    logOut() {
      sessionStorage.removeItem("username");
    }
}
