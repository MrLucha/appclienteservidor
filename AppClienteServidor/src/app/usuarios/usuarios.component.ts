import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  userArray: any[] = [];
  tittle="Usuarios";

  constructor( protected userService: UserService) { }

  ngOnInit():void {
    this.userService.getUserUsuarios()
    .subscribe(
      (data) => {
        //Sucess
        console.log(data);
        this.userArray = data['results']
      },
      (error) => {
        console.error(error);
      }
    )
  }

}
