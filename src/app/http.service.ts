import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class HttpService {

  public baseURL: string = "https://api.aideye.org";

  public usercount = new BehaviorSubject(0);
  getUserCount = this.usercount.asObservable();


  public subscount = new BehaviorSubject(0);
  getSubsCount = this.usercount.asObservable();

  constructor(private http: Http) { }

  changeusercount(count: number) {
    this.usercount.next(count)
  }

  changesubscount(count: number) {
    this.subscount.next(count);
  }

  // send otp
  login(user: any) {
    let _base = this;
    return new Promise(function (resolve, reject) {
      let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
      let options = new RequestOptions({ headers: headers }); // Create a request option
      return _base.http.post(_base.baseURL + '/admin/login', user, options)
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
        .subscribe(
          success => {
            resolve(success);
          },
          err => {
            reject(err);
          });
    });
  }

  /**
   * Send data to loca server
   * 
   * api : updateSensorValues
   * 
   * {
   *     time:string,
   *     id:string,
   *     bodyTemparature   // spelling mistake by Subhajit - considering
   * }
   * 
   * **/
  public updateuser(userid: string, userdata: any) {
    let _base = this;
    // ...using get request
    return new Promise(function (resolve, reject) {
      // let bodyString = JSON.stringify(body); // Stringify payload
      let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
      let options = new RequestOptions({ headers: headers }); // Create a request option
      return _base.http.put(_base.baseURL + '/user/updateUser?id=' + userid, userdata, options)
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
        .subscribe(
          success => {
            resolve(success);
          },
          err => {
            reject(err);
          });
    });
  }


  public getnewusercount() {
    let _base = this;
    // ...using get request
    return new Promise(function (resolve, reject) {
      // let bodyString = JSON.stringify(body); // Stringify payload
      let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
      let options = new RequestOptions({ headers: headers }); // Create a request option
      return _base.http.get(_base.baseURL + '/users/count', options)
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
        .subscribe(
          success => {
            resolve(success);
          },
          err => {
            reject(err);
          });
    });
  }

  public getnewsubscriptioncount() {
    let _base = this;
    // ...using get request
    return new Promise(function (resolve, reject) {
      // let bodyString = JSON.stringify(body); // Stringify payload
      let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
      let options = new RequestOptions({ headers: headers }); // Create a request option
      return _base.http.get(_base.baseURL + '/subscriptions/count', options)
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
        .subscribe(
          success => {
            resolve(success);
          },
          err => {
            reject(err);
          });
    });
  }

  public getnewusers() {
    let _base = this;
    // ...using get request
    return new Promise(function (resolve, reject) {
      // let bodyString = JSON.stringify(body); // Stringify payload
      let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
      let options = new RequestOptions({ headers: headers }); // Create a request option
      return _base.http.get(_base.baseURL + '/users/new', options)
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
        .subscribe(
          success => {
            resolve(success);
          },
          err => {
            reject(err);
          });
    });
  }

  public getnewsubscriptions() {
    let _base = this;
    // ...using get request
    return new Promise(function (resolve, reject) {
      // let bodyString = JSON.stringify(body); // Stringify payload
      let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
      let options = new RequestOptions({ headers: headers }); // Create a request option
      return _base.http.get(_base.baseURL + '/subscriptions/new', options)
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
        .subscribe(
          success => {
            resolve(success);
          },
          err => {
            reject(err);
          });
    });
  }

}