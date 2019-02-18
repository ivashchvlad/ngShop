import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ItemComponent } from './item/item.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartDisplaComponent } from './cart-displa/cart-displa.component';
import { LoginComponent } from './login/login.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CatalogComponent,
    ItemComponent,
    NotFoundComponent,
    NavbarComponent,
    CartDisplaComponent,
    LoginComponent,
    UserSettingsComponent,
    AdminPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [
    AngularFireAuth,
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
