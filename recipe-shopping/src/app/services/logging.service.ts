import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {

  constructor() { }

  logStatusChange(status: string) {
    console.log('Logging server change:', status);
  }
}
