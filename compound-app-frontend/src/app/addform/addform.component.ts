import { Component } from '@angular/core';
import { CompoundService } from '../compound.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrl: './addform.component.css'
})
export class AddformComponent {

  constructor(private compoundService: CompoundService,private router: Router,) { }

  name: string
  description: string
  imageUrl: string

  addCompound(){
    const body = {
    name: this.name,
    description: this.description,
    imageURL: this.imageUrl
    }
    this.compoundService.addCompound(body).subscribe( ()=>{
      console.log("Added Successfully");
      this.router.navigate(["/"]);
    })
  }
}
