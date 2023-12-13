import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CateringCtaComponent } from './pages/homepage/catering-cta/catering-cta.component';
import { PizzaCtaComponent } from './pages/homepage/pizza-cta/pizza-cta.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FavouritesComponent } from './pages/profile/favourites/favourites.component';
import { UserInfoComponent } from './pages/profile/user-info/user-info.component';
import { PastOrdersComponent } from './pages/profile/past-orders/past-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    FooterComponent,
    CateringCtaComponent,
    PizzaCtaComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    FavouritesComponent,
    UserInfoComponent,
    PastOrdersComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
