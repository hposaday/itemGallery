import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'stg-item-detalis',
  templateUrl: './item-detalis.component.html',
  styleUrls: ['./item-detalis.component.css']
})
export class ItemDetalisComponent implements OnInit {

  isEditing: boolean;
  isCreating: boolean;

  constructor(
    public dialogRef: MatDialogRef<ItemDetalisComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit(): void {
    
    this.isEditing = false
    this.isCreating = this.data.key ? false : true

    if (this.isCreating) {
      this.data = {
        name: '',
        price: '',
        category: '',
        imageLink: '',
        description: ''
      }
    }
    console.log(this.isEditing,'editig')
  }

  editItem () {
    this.isEditing = !this.isEditing 
  }

  saveItem () {
    if (!this.data.name || !this.data.imageLink || !this.data.price) {
      alert('Recuerde que los campos Nombre, precio e imagen son obligatorios')
    } else {
      Object.keys(this.data)
      this.dialogRef.close({
        action: 'push',
        item: this.data,
      })
    }
  }

  deleteItem() {
    this.dialogRef.close({
      action: 'delete',
      itemKey: this.data.key
    })
  }

}
