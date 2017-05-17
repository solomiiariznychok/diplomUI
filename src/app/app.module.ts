import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';


import {
  ApiService,
  AuthGuard,
  CommentsService,
  FooterComponent,
  HeaderComponent,
  JwtService,
  SharedModule,
  FormulaService,
  UserService,
} from './shared';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    HomeModule,
    rootRouting,
    SharedModule,
  ],
  providers: [
    ApiService,
    AuthGuard,
    CommentsService,
    JwtService,
    FormulaService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
