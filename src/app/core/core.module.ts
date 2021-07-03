import { OnlyLoggedModule } from './../shared/directives/only-logged/only-logged.module';
import { MenuModule } from './../shared/components/menu/menu.module';
import { LoadingModule } from './../shared/components/loading/loading.module';
import { AlertModule } from './../shared/components/alert/alert.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RequestInterceptor } from './auth/request.interceptor';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    AlertModule,
    LoadingModule,
    MenuModule,
    OnlyLoggedModule
  ],
  exports: [HeaderComponent, FooterComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }
  ]
})
export class CoreModule { }
