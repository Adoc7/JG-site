import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ContentLoaderModule } from '@ngneat/content-loader';
import { AppComponent } from './app.component';
import { AccueilComponent } from './components/header/accueil/accueil.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { AppRootingModule } from './app-rooting.module';
import { ROUTING } from './app.routing';
import { PortfoliosComponent } from './components/body/portfolios/portfolios.component';
import { DataService } from './data.service';
import { TechnologieService } from './services/technologie.service';
import { PortfolioDevService } from './services/portfolio-dev.service';
import { DeveloppementComponent } from './components/body/portfolios/developpement/developpement.component';
import { ModalService } from './services/modal.service';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { AProposModule } from './modules/body/a-propos/a-propos.module';
import { ContactModule } from './modules/body/contact/contact.module';
import { DrawsModule } from './modules/body/portfolios/draws/draws.module';
import { InfographieModule } from './modules/body/portfolios/infographie/infographie.module';
import { ModalModule } from './modules/body/portfolios/modal/modal.module';
import { ErrorComponent } from './components/error/error.component';
import { FooterModule } from './modules/footer/footer/footer.module';
import { LoaderComponent } from './components/loader/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    NavbarComponent,
    PortfoliosComponent, 
    DeveloppementComponent,
    ErrorComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    ContentLoaderModule,
    AppRootingModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    FormsModule,
    NgxPageScrollCoreModule,
    NgxPageScrollModule,
   ROUTING,
    AProposModule,
    ContactModule,
    DrawsModule,
    InfographieModule,
    ModalModule,
    FooterModule,
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