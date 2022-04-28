import { Injectable } from '@angular/core';
import { v4 as uuidV4 } from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class UniqueIdService {

  public generateUniqueIdWithPrefix(prefix: string): string {
    const uniqueId = this.generateUniqueId();
    return `${prefix}-${uniqueId}`;
  }

  private generateUniqueId(): string {
    return uuidV4();
  }
}