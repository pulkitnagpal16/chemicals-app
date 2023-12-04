import { Component, OnInit } from '@angular/core';
import { CompoundService } from '../compound.service';

@Component({
  selector: 'app-compound-list',
  templateUrl: './compound-list.component.html',
  styleUrls: ['./compound-list.component.css']
})

export class CompoundListComponent implements OnInit {
  compounds: any[] = [];
  currentPage = 1;
  compoundsPerPage = 10;
  totalPages: number

  constructor(private compoundService: CompoundService) { }

  ngOnInit(): void {
    this.loadCompounds();
  }

  loadCompounds(): void {
    const startIndex = (this.currentPage - 1) * this.compoundsPerPage;
    this.compoundService.getAllCompounds(this.currentPage).subscribe((data: any) => {
      this.compounds = data.rows;
      this.totalPages = Math.ceil(data.count/this.compoundsPerPage)
    });
  }

  nextPage(): void {
    this.currentPage++;
    this.loadCompounds();
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadCompounds();
    }
  }
}
