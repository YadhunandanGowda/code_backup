import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductpageComponent } from './components/productpage/productpage.component';
import { ProductthumbnailComponent } from './components/productpage/productthumbnail/productthumbnail.component';
import { CustompopupComponent } from './components/productpage/custompopup/custompopup.component';
import { CheckoutpopupComponent } from './components/productpage/checkoutpopup/checkoutpopup.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductpageComponent,
    ProductthumbnailComponent,
    CustompopupComponent,
    CheckoutpopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
