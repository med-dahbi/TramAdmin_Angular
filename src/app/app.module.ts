import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { LignesComponent } from './pages/lignes/lignes.component';
import { StationsComponent } from './pages/stations/stations.component';
import { VoyagesComponent } from './pages/voyages/voyages.component';
import { EmployesComponent } from './pages/employes/employes.component';
import { PointVenteComponent } from './pages/point-vente/point-vente.component';
import { FunctionComponent } from './pages/function/function.component';
import { AddLignComponent } from './pages/add-lign/add-lign.component';
import { UpdateLigneComponent } from './pages/update-ligne/update-ligne.component';
import { UpdateStationComponent } from './pages/update-station/update-station.component';
import { AddStationComponent } from './pages/add-station/add-station.component';
import { AddVoyageComponent } from './pages/add-voyage/add-voyage.component';
import { UpdateVoyageComponent } from './pages/update-voyage/update-voyage.component';
import { AddPvComponent } from './pages/add-pv/add-pv.component';
import { UpdatePvComponent } from './pages/update-pv/update-pv.component';
import { AddEmployeComponent } from './pages/add-employe/add-employe.component';
import { UpdateEmployeComponent } from './pages/update-employe/update-employe.component';
import { UpdateFonctionComponent } from './pages/update-fonction/update-fonction.component';
import { AddFonctionComponent } from './pages/add-fonction/add-fonction.component';
import { AddTacheComponent } from './pages/add-tache/add-tache.component';
import { UpdateTacheComponent } from './pages/update-tache/update-tache.component';
import { TachesComponent } from './pages/taches/taches.component';
import { ExcelService } from './services/excel.service';
import { ClientsComponent } from './pages/clients/clients.component';
import { AbonnemetsComponent } from './pages/abonnemets/abonnemets.component';
import { MatSliderModule } from '@angular/material/slider';
import { StatistiquesComponent } from './components/statistiques/statistiques.component';
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    MatSliderModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    LignesComponent,
    StationsComponent,
    VoyagesComponent,
    EmployesComponent,
    PointVenteComponent,
    FunctionComponent,
    AddLignComponent,
    UpdateLigneComponent,
    UpdateStationComponent,
    AddStationComponent,
    AddVoyageComponent,
    UpdateVoyageComponent,
    AddPvComponent,
    UpdatePvComponent,
    AddEmployeComponent,
    UpdateEmployeComponent,
    UpdateFonctionComponent,
    AddFonctionComponent,
    AddTacheComponent,
    UpdateTacheComponent,
    TachesComponent,
    ClientsComponent,
    AbonnemetsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
