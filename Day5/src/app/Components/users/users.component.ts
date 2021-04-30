import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit {

  constructor(private myService:UsersService, private router:Router) { }
  users:any;
  deleteID:any;
  ngOnInit(): void {
    this.myService.getAllUsers().subscribe(
      (res)=>{console.log(this.users=(res))},

      (err)=>{console.log(err);}
      );
  }
  
  OpenDelete(user:any){
    this.myService.DeleteUserById(user.id).subscribe();
    window.location.href = window.location.href
  }

  
}
