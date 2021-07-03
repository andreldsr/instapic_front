import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home.component';
import { LoginGuard } from './../core/auth/login.guard';

import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [LoginGuard],
        children: [
            {
                path: '', component: LoginComponent,
                data: {
                    title: 'Sign in'
                }
            },
            {
                path: 'signup', component: SignupComponent,
                data: {
                    title: 'Sign up'
                }
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
