import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompoundListComponent } from './compound-list/compound-list.component';
import { CompoundDetailsComponent } from './compound-details/compound-details.component'; // Import the details component
import { AddformComponent } from './addform/addform.component';
import { UpdateformComponent } from './updateform/updateform.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: '', component: CompoundListComponent },
  { path: 'compounds/:id', component: CompoundDetailsComponent }, // Add a route for compound details page
  { path: 'add', component: AddformComponent},
  { path: 'update/:id', component: UpdateformComponent},
  { path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
