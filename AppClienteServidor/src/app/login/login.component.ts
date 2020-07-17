import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userArray: any[] = [];
  tittle="Login";

  constructor( protected userService: UserService) { }

  ngOnInit():void {
    this.userService.getUserLogin()
    .subscribe(
      (data) => {
        //Sucess
        console.log(data);
        this.userArray = data['results'];
      },
      (error) => {
        console.error(error);
      }
    )
  }

}
