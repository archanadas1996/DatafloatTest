import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { RouterModule } from '@angular/router'
import { AddUserComponent } from './add-user.component'

const routes: Routes = [
  { path: 'add-user', component: AddUserComponent },
  // { path: '', component: ListUserTipsComponent },
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
