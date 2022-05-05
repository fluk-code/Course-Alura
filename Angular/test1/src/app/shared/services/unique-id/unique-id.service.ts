import { Injectable } from '@angular/core';
import { v4 as uuiv4 } from 'uuid';

@Injectable()
export class UniqueIdService {
  private _numberOfGeneratedIds = 0;
  private _isValidIdRegex = /^[A-Za-z]+[\w\-\:\.]*$/;

  public generateUniqueIdWithPrefix(prefix: string): string {
    if(!prefix || !this._isValidIdRegex.test(prefix)) {
      throw Error('Prefix can not be empty');
    }

    const uniqueId = this.generateUniqueId();
    this._numberOfGeneratedIds++;

    return `${prefix}-${uniqueId}`;
  }

  public getNumberOfGenerateUniqueIds(): number {
    return this._numberOfGeneratedIds;
  }

  private generateUniqueId(): string {
    return uuiv4();
  }

}