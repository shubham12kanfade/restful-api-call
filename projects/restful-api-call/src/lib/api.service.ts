import { Injectable } from '@angular/core';
import { RestfulApiCallService } from './restful-api-call.service';

@Injectable()
export class ApiService {

  constructor(private _api: RestfulApiCallService) {
  }

  getData(url, token?: any) {
    token = token || {};
    this._api.getData(url, token)
      .then(resData => {
        return resData;
      })
      .catch(err => {
        console.error(err);
        return err;
      })
  }
  postData(url, data, token?: any) {
    token = token || {};
    this._api.postData(url, data, token)
      .then(resData => {
        return resData;
      })
      .catch(err => {
        console.error(err);
        return err;
      })
  }
  putData(url, data, token?: any) {
    token = token || {};
    this._api.putData(url, data, token)
      .then(resData => {
        return resData;
      })
      .catch(err => {
        console.error(err);
        return err;
      })
  }
  patchData(url, data, token?: any) {
    token = token || {};
    this._api.patchData(url, data, token)
      .then(resData => {
        return resData;
      })
      .catch(err => {
        console.error(err);
        return err;
      })
  }
  deleteData(url, token?: any) {
    token = token || {};
    this._api.deleteData(url, token)
      .then(resData => {
        return resData;
      })
      .catch(err => {
        console.error(err);
        return err;
      })
  }

  uploadFile(url, file, token?: any) {
    token = token || {};
    this._api.upload(url, file, token)
      .then(resData => {
        return resData;
      })
      .catch(err => {
        console.error(err);
        return err;
      })
  }
}
