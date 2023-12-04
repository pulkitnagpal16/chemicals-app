import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, } from '@angular/router';
import { CompoundService } from '../compound.service';

@Component({
  selector: 'app-compound-details',
  templateUrl: './compound-details.component.html',
  styleUrls: ['./compound-details.component.css']
})

export class CompoundDetailsComponent implements OnInit {
  compound: any;
  compoundId:number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private compoundService: CompoundService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.compoundId = params['id'];
      this.compoundService.getCompoundById(this.compoundId).subscribe(compound => {
        this.compound = compound;
      },error=>{
        this.router.navigate(["404"])
      });
    });
  }

  deleteCompound(){
    this.compoundService.deleteCompound(this.compoundId).subscribe(data =>{
      console.log("Compound Deleted ");
      this.router.navigate(["/"]);
    })    
  }

  updateCompound(){
    this.router.navigate(["/update/",this.compoundId])
  }
}
