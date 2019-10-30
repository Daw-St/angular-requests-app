import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class AppStorageService {

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  public setStorageDataAndSaveIt(storageData: any, storageName: any) {
    this.storage.set(storageName, storageData);
  }
}
