import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Route, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { NgForOf } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ViewDetialComponent } from './view-detial/view-detial.component';
import { FormsModule } from '@angular/forms';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Route[] = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'view-detail/:id', component: ViewDetialComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component:  NotfoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    HomeComponent,
    ViewDetialComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    NgForOf,
    RouterLink,
    FormsModule,
    RouterModule.forRoot(routes),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
