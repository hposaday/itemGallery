import { Component, OnInit } from '@angular/core';

import { ItemService } from './../../services/item.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { ItemDetalisComponent } from './../../components/item-detalis/item-detalis.component';
import { Item } from 'src/app/models/item';
import { typeSourceSpan } from '@angular/compiler';

@Component({
  selector: 'stg-item-board',
  templateUrl: './item-board.component.html',
  styleUrls: ['./item-board.component.css']
})
export class ItemBoardComponent implements OnInit {

  constructor( 
    private itemService: ItemService,
    private matDialog: MatDialog
     ) { }

  retrievedItems$: Observable<any[]>;

  ngOnInit(): void {

     this.retrievedItems$ = this.itemService.getItems().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    )
  }

  addItem(){
       this.itemService.pushItem({
      name: 'test',
      price: 123,
      category: 'string',
      imageLink: 'string',
      description: 'string',
    })
  }

  openDetails(item) {
    console.log(item, 'item')
   if (!item) {
     console.log("item null")
    item = new Item();
   } 
    const dialogRef = this.matDialog.open(ItemDetalisComponent , {
      width: '1000px',
      hasBackdrop: false,
      disableClose: true,
      data: item
    });

    

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      
      if (result.action === 'push') {
        this.itemService.pushItem(result.item)
      } else if (result.action === 'delete') {
        this.itemService.deleteItem(result.itemKey)
      } else {
        this.itemService.updateItem(result.key, result)
      }
    });
  }
  

}
