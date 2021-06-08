import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';


@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor(private injector: Injector) { }

  handleError(error: any) {
    const router = this.injector.get(Router);
    console.log(`Request URl : ${router.url}`);

    if (error instanceof HttpErrorResponse) {
      console.log('back end retuened status code : ', error.status);
      console.log('Message : ', error.message);
    } else {
      console.log('an error occurred ', error.message);
    }
    router.navigate(['error']);
  }
}
