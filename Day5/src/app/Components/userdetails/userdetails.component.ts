import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styles: [
  ]
})
export class UserdetailsComponent implements OnInit {
  id:any;
  user:any;
  constructor(myActivated:ActivatedRoute, private myService:UsersService) {
    this.id= myActivated.snapshot.params.id;
   }

  ngOnInit(): void {
    this.myService.getUserById(this.id).subscribe(
      (res)=>{this.user=(res)},

      (err)=>{console.log(err)}
    )
  }

}
