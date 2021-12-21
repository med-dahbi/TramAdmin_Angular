import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { LignesComponent } from 'src/app/pages/lignes/lignes.component';
import { StationsComponent } from 'src/app/pages/stations/stations.component';
import { VoyagesComponent } from 'src/app/pages/voyages/voyages.component';
import { PointVenteComponent } from 'src/app/pages/point-vente/point-vente.component';
import { EmployesComponent } from 'src/app/pages/employes/employes.component';
import { FunctionComponent } from 'src/app/pages/function/function.component';
import { AddLignComponent } from 'src/app/pages/add-lign/add-lign.component';
import { UpdateLigneComponent } from 'src/app/pages/update-ligne/update-ligne.component';
import { AddStationComponent } from 'src/app/pages/add-station/add-station.component';
import { UpdateStationComponent } from 'src/app/pages/update-station/update-station.component';
import { AddVoyageComponent } from 'src/app/pages/add-voyage/add-voyage.component';
import { UpdateVoyageComponent } from 'src/app/pages/update-voyage/update-voyage.component';
import { AddPvComponent } from 'src/app/pages/add-pv/add-pv.component';
import { UpdatePvComponent } from 'src/app/pages/update-pv/update-pv.component';
import { AddEmployeComponent } from 'src/app/pages/add-employe/add-employe.component';
import { UpdateEmployeComponent } from 'src/app/pages/update-employe/update-employe.component';
import { AddTacheComponent } from 'src/app/pages/add-tache/add-tache.component';
import { UpdateTacheComponent } from 'src/app/pages/update-tache/update-tache.component';
import { AddFonctionComponent } from 'src/app/pages/add-fonction/add-fonction.component';
import { UpdateFonctionComponent } from 'src/app/pages/update-fonction/update-fonction.component';
import { TachesComponent } from 'src/app/pages/taches/taches.component';
import { ClientsComponent } from 'src/app/pages/clients/clients.component';
import { AbonnemetsComponent } from 'src/app/pages/abonnemets/abonnemets.component';
import { StatistiquesComponent } from 'src/app/components/statistiques/statistiques.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'tables', component: TablesComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'lignes', component: LignesComponent },
    { path: 'stations', component: StationsComponent },
    { path: 'voyages', component: VoyagesComponent },
    { path: 'point-vente', component: PointVenteComponent },
    { path: 'employe', component: EmployesComponent },
    { path: 'function', component: FunctionComponent },
    //Ligne
    { path: 'addLigne', component: AddLignComponent },
    { path: 'updateligne/:id', component: UpdateLigneComponent },
    //station
    { path: 'addStation', component: AddStationComponent },
    { path: 'updateStation/:id', component: UpdateStationComponent },

    //voyage
    { path: 'addVoyage', component: AddVoyageComponent },
    { path: 'updatevoyage/:id', component: UpdateVoyageComponent },
    //pv
    { path: 'addPv', component: AddPvComponent },
    { path: 'updatepv/:id', component: UpdatePvComponent },
    //emp
    { path: 'addEmploye', component: AddEmployeComponent },
    { path: 'updateEmploye/:id', component: UpdateEmployeComponent },
    //taches
    { path: 'taches/:cin', component: TachesComponent },
    { path: 'addTache/:cin', component: AddTacheComponent },
    { path: 'updatetache/:id/:cin', component: UpdateTacheComponent },
    //fonction
    { path: 'addFonction', component: AddFonctionComponent },
    { path: 'updatefonction/:id', component: UpdateFonctionComponent },
    //client
    { path: 'clients', component: ClientsComponent },
    { path: 'abonnemets', component: AbonnemetsComponent },
    { path: 'statiques', component: StatistiquesComponent },

    


];
