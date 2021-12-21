import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private httpClient: HttpClient
  ) { }
  //Lignes
  getLignes() {
    return this.httpClient.get('http://127.0.0.1:8000/api/ListerLignes');
  }
  getLine(id){
    return this.httpClient.get('http://127.0.0.1:8000/api/ListerLignes/'+id);
  }
  insertLigne(data) {
    return this.httpClient.post('http://127.0.0.1:8000/api/AjouterLigne', data);
  }
  deleteLigne(id) {
    return this.httpClient.delete('http://127.0.0.1:8000/api/SupprimerLigne/'+id);
  }
 
  updateLigne(id, data){
    return this.httpClient.put('http://127.0.0.1:8000/api/ModifierLigne/', data);
  }
  //station

  getStations() {
    return this.httpClient.get('http://127.0.0.1:8000/api/ListerStations');
  }

  insertStation(data) {
    return this.httpClient.post('http://127.0.0.1:8000/api/AjouterStation', data);
  }
  deleteStation(id) {
    return this.httpClient.delete('http://127.0.0.1:8000/api/SupprimerStation/'+id);
  }
  getStation(id){
    return this.httpClient.get('http://127.0.0.1:8000/api/ListerStations/'+id);
  }
  updateStation(id, data){
    return this.httpClient.put('http://127.0.0.1:8000/api/ModifierStation/', data);
  }
  //voyage

  getVoyages() {
    return this.httpClient.get('http://127.0.0.1:8000/api/ListerVoyages');
  }
  getVoyage(id) {
    return this.httpClient.get('http://127.0.0.1:8000/api/ListerVoyages/'+ id);
  }
  insertVoyage(data) {
    return this.httpClient.post('http://127.0.0.1:8000/api/AjouterVoyage', data);
  }
  deleteVoyage(id) {
    return this.httpClient.delete('http://127.0.0.1:8000/api/SupprimerVoyage/'+id);
  }
 
  updateVoyage(id, data){
    return this.httpClient.put('http://127.0.0.1:8000/api/ModifierVoyage/', data);
  }
  //pv

  getPvs() {
    return this.httpClient.get('http://127.0.0.1:8000/api/ListerPv');
  }
  getPv(id) {
    return this.httpClient.get('http://127.0.0.1:8000/api/ListerPv/'+ id);
  }
  insertPv(data) {
    return this.httpClient.post('http://127.0.0.1:8000/api/AjouterVente', data);
  }
  deletePv(id) {
    return this.httpClient.delete('http://127.0.0.1:8000/api/SupprimerVente/'+id);
  }
 
  updatePv(id, data){
    return this.httpClient.put('http://127.0.0.1:8000/api/ModifierVente/', data);
  }
  //emp

  getEmployes() {
    return this.httpClient.get('http://127.0.0.1:8000/api/ListerEmploye');
  }
  getEmploye(id) {
    return this.httpClient.get('http://127.0.0.1:8000/api/ListerEmploye/'+ id);
  }
  insertEmploye(data) {
    return this.httpClient.post('http://127.0.0.1:8000/api/AjouterEmploye', data);
  }
  deleteEmploye(id) {
    return this.httpClient.delete('http://127.0.0.1:8000/api/SupprimerEmploye/'+id);
  }
 
  updateEmploye(cin, data){
    return this.httpClient.put('http://127.0.0.1:8000/api/UpdateEmploye/'+ cin, data);
  }
  //taches

  getTaches() {
    return this.httpClient.get('http://127.0.0.1:8000/api/ListerTache');
  }
  getTachesCIN(cin) {
    return this.httpClient.get('http://127.0.0.1:8000/api/ListerTacheCIN/'+ cin);
  }
  getTache(id) {
    return this.httpClient.get('http://127.0.0.1:8000/api/ListerTache/'+ id);
  }
  insertTache(data) {
    return this.httpClient.post('http://127.0.0.1:8000/api/AjouterTache', data);
  }
  deleteTache(id) {
    return this.httpClient.delete('http://127.0.0.1:8000/api/SupprimerTache/'+id);
  }
 
  updateTache(id, data){
    return this.httpClient.put('http://127.0.0.1:8000/api/ModifierTache/', data);
  }
  //fonction

  getFonctions() {
    return this.httpClient.get('http://127.0.0.1:8000/api/ListerFonction');
  }
  getFonction(id) {
    return this.httpClient.get('http://127.0.0.1:8000/api/ListerFonction/'+ id);
  }
  insertFonction(data) {
    return this.httpClient.post('http://127.0.0.1:8000/api/AjouterFonction', data);
  }
  deleteFonction(id) {
    return this.httpClient.delete('http://127.0.0.1:8000/api/SupprimerFonction/'+id);
  }
 
  updateFonction(id, data){
    return this.httpClient.put('http://127.0.0.1:8000/api/ModifierFonction/', data);
  }
  //client normal 
  getClientNormaux() {
    return this.httpClient.get('http://127.0.0.1:8000/api/ListerClientNormaux');
  }
//client Abonnem
getClientAbonnés() {
  return this.httpClient.get('http://127.0.0.1:8000/api/ListerClientAbonnés');
}

CountEmploye() {
  return this.httpClient.get('http://127.0.0.1:8000/api/CountEmploye');
}
CountLigne(){
  return this.httpClient.get('http://127.0.0.1:8000/api/CountLigne');

}
CountClient()
{
  return this.httpClient.get('http://127.0.0.1:8000/api/CountClient');

}
CountStation(){
  return this.httpClient.get('http://127.0.0.1:8000/api/CountStation');

}
login(data):Observable<any>{
  return this.httpClient.post('http://127.0.0.1:8000/api/login', data);
}
}
