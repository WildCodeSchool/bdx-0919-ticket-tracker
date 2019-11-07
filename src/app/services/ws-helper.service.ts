import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class WsHelperService {

  constructor(private http: HttpClient) { }
  // tslint:disable-next-line: max-line-length
  // private token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjoxNDk4MiwiZmlyc3RuYW1lIjoiSHVnbyIsImxhc3RuYW1lIjoiSHVnbyIsImVtYWlsIjoiaHVnb0B3aWxkY29kZXNjaG9vbC5mciJ9LCJpYXQiOjE1NzI5NjQ3ODgsImV4cCI6MTU3Mjk2NDg0OH0.AqlHvEKtp3fsYDK48dQws5Up39rkf2PVN-6mFpe9g7c';
  private token: string;

  setToken(token: string) {
    this.token = token;
}

  get(url: string) {
    const headers =  this.createAuthHeader();
    return this.http.get(url, {headers});
  }

  post(url: string, data: any) {
    const headers =  this.createAuthHeader();
    return this.http.post(url, data, {headers});
  }

  delete(ressourceUrl: string) {
    const headers =  this.createAuthHeader();
    return this.http.delete(ressourceUrl, {headers});
  }

  private createAuthHeader() {
    return  new HttpHeaders({Authorization: 'Bearer ' + this.token});
  }
}
