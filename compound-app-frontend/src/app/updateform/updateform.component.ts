import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { CompoundService } from '../compound.service';

@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrl: './updateform.component.css'
})
export class UpdateformComponent {
  constructor(private compoundService: CompoundService,private router: Router,private route: ActivatedRoute,) { }
  name: string
  description: string
  imageUrl: string
  compoundId: number

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.compoundId = params['id'];
      this.compoundService.getCompoundById(this.compoundId).subscribe(compound => {
        this.name = compound.CompoundName
        this.description = compound.CompoundDescription
        this.imageUrl = compound.strImageSource
      },error=>{
        this.router.navigate(["404"])
      });
    });
  }

  updateCompound(){
    const body = {
    name: this.name,
    description: this.description,
    imageURL: this.imageUrl
    }
    this.compoundService.updateCompound(body,this.compoundId).subscribe( ()=>{
      console.log("Updated Successfully");
      this.router.navigate(["/compounds/",this.compoundId]);
    })
  }
}
