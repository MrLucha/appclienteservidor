import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userArray: any[] = [];
  tittle="Dashboard";

  constructor( protected userService: UserService) { }

  ngOnInit():void {
    this.userService.getUserDashboard()
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
