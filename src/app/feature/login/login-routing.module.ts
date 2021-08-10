import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { RouterModule } from '@angular/router'

const routes: Routes = [
  { path: '', component: LoginComponent },
  // { path: '', component: ListUserTipsComponent },
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
