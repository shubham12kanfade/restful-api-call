# restful-api-call

## This library is build for calling restful api from angular 4+ you can simply use it by calling 

> npm install --save restful-api-call

### and you have to import HttpClientModule in your app.module.ts file
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```
### you can use it in your components like 
#### Please Note token is optional parameter

```
import {RestfulApiCallService} from 'restful-api-call'

export class AppComponent{
    constructor(private _restfullApi: RestfulApiCallService){
    this.getData();
  }

  //for getting data 
  getData(){
      this._restfullApi.getData('your api url', "add your token here")
      .then(resData=>{
          console.log(resData);
      }).catch(err=>{
          console.error(err);
      })
  }

  //for post data
  postData(){
      this._restfullApi.postData('your api url',"your data", "add your token here")
      .then(resData=>{
          console.log(resData);
      }).catch(err=>{
          console.error(err);
      })
  }

  //for update
  putData(){
      this._restfullApi.putData('your api url',"your data", "add your token here")
      .then(resData=>{
          console.log(resData);
      }).catch(err=>{
          console.error(err);
      })
  }

  //for patch
  patchData(){
      this._restfullApi.patchData('your api url',"your data", "add your token here")
      .then(resData=>{
          console.log(resData);
      }).catch(err=>{
          console.error(err);
      })
  }

  //for delete
  deleteData(){
      this._restfullApi.deleteData('your api url',"add your token here")
      .then(resData=>{
          console.log(resData);
      }).catch(err=>{
          console.error(err);
      })
  }

//for uploading file
   uploadFile(){
      this._restfullApi.upload('your api url', "file", "add your token here")
      .then(resData=>{
          console.log(resData);
      }).catch(err=>{
          console.error(err);
      })
  }
}
```