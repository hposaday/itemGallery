import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemBoardComponent } from './pages/item-board/item-board.component';

const routes: Routes = [
  {path: '', component: ItemBoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
