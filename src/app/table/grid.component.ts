import { Component, OnInit } from '@angular/core';
import { orders } from './orders';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {
  public gridView: GridDataResult;
    public pageSize = 10;
    public skip = 0;
    private data: Object[];

    private items: any[] = orders;

    constructor() {
        this.loadItems();
    }

    public pageChange(event: PageChangeEvent): void {
        this.skip = event.skip;
        this.loadItems();
    }

    private loadItems(): void {
        this.gridView = {
            data: this.items.slice(this.skip, this.skip + this.pageSize),
            total: this.items.length
        };
    }

    delete(){
    alert("Are you sure you want to delete?");
    }

}
