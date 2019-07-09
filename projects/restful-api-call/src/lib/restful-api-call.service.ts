import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RestfulApiCallService {
  constructor(private http: HttpClient) {
  }

  getHeader(token) {
    return {
      headers: {
        Authorization: token
      }
    };
  }

  public getData(url: string, token?: any): Promise<any> {
    token = token || {};
    return new Promise((resolve, reject) => {
      const request: string = url;
      this.http
        .get(request, token ? this.getHeader(token) : {})
        .subscribe(
          data => resolve(data),
          error => reject(error)
        );
    });
  }

  public postData(url: string, data: any, token?: any): Promise<any> {
    token = token || {};
    return new Promise((resolve, reject) => {
      const request: string = url;
      this.http.post(request, data, token ? this.getHeader(token) : {})
        .subscribe(
          res => resolve(res),
          error => {
            reject(error);
          }
        );
    });
  }

  public putData(url: string, data: any, token?: any): Promise<any> {
    token = token || {}
    return new Promise((resolve, reject) => {
      const request: string = url;
      this.http
        .put(request, data, token ? this.getHeader(token) : {})
        .subscribe(
          res => resolve(res),
          error => reject(error)
        );
    });
  }

  public deleteData(url: string, token?: any): Promise<any> {
    token = token || {};
    return new Promise((resolve, reject) => {
      const request: string = url;
      this.http
        .delete(request, token ? this.getHeader(token) : {})
        .subscribe(
          res => resolve(res),
          error => reject(error)
        );
    });
  }

  public patchData(url: string, data, token?: any): Promise<any> {
    token = token || {};
    return new Promise((resolve, reject) => {
      const request: string = url;
      this.http
        .patch(request, data, token ? this.getHeader(token) : {})
        .subscribe(
          res => resolve(res),
          error => reject(error)
        );
    });
  }

  public upload(url: any, file: any, token?: any): Promise<any> {
    token = token || {};
    return new Promise((resolve, reject) => {
      const uploadData = new FormData();
      uploadData.append('myFile', file, file.name);
      this.http
        .post(url,
          uploadData,
          token ? this.getHeader(token) : {})
        .subscribe((event) => {
          resolve(event);
        },
          error => reject(error)
        );
    });
  }
}
