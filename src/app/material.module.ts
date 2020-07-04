import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
//import { MatMenuModule } from '@angular/material';
//import { MatIconModule } from '@angular/material'
import { MatCardModule } from '@angular/material/card';
//import { MatSidenavModule } from '@angular/material'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
//import { MatTooltipModule } from '@angular/material'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list'
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatToolbarModule,
        MatGridListModule,
        MatListModule,
        MatDialogModule
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatToolbarModule,
        MatGridListModule,
        MatListModule,
        MatDialogModule
    ]
})
export class MaterialModule { }