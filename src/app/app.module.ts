import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AccueilComponent } from './components/header/accueil/accueil.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { ContactsComponent } from './components/body/contacts/contacts.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { AppRootingModule } from './app-rooting.module';
import { TechnologiesComponent } from './components/body/technologies/technologies.component';
import { ParcoursComponent } from './components/body/parcours/parcours.component';
import { ROUTING } from './app.routing';
import { AProposComponent } from './components/body/a-propos/a-propos.component';
import { PortfoliosComponent } from './components/body/portfolios/portfolios.component';
import { ModalComponent } from './components/header/modal/modal.component';
import { ErrorComponent } from './components/error/error.component';
import { DataService } from './data.service';
import { TechnologieService } from './services/technologie.service';
import { PortfolioDevService } from './services/portfolio-dev.service';
import { DeveloppementComponent } from './components/body/portfolios/developpement/developpement.component';
import { InfographieComponent } from './components/body/portfolios/infographie/infographie.component';
import { DrawsComponent } from './components/body/portfolios/draws/draws.component';
import { ModalService } from './services/modal.service';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    NavbarComponent,
    ContactsComponent,
    FooterComponent,
    TechnologiesComponent,
    ParcoursComponent,
    AProposComponent,
    PortfoliosComponent,
    ModalComponent,
    ErrorComponent,
    DeveloppementComponent,
    InfographieComponent,
    DrawsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRootingModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    FormsModule,
    NgxPageScrollCoreModule,
    NgxPageScrollModule,
    ReactiveFormsModule,
    ROUTING
  ],
  providers: [
    DataService,
    TechnologieService,
    PortfolioDevService,
    ModalService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
