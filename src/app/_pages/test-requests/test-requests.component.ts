import { Component, OnInit } from '@angular/core';
import { RandomRequestsService } from '../../_core/_services/_api/random-requests/random-requests.service';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { METHODS } from '../../_shared/_constants/methods';
import { FormBuilder, FormControl } from '@angular/forms';
import { AppStorageService } from '../../_core/_services/app-storage/app-storage.service';
import { StorageKeys } from '../../_shared/_enums/storage-keys';

@Component({
  selector: 'app-test-requests',
  templateUrl: './test-requests.component.html',
  styleUrls: ['./test-requests.component.scss']
})
export class TestRequestsComponent implements OnInit {

  private methods: string[] = METHODS;
  private response: string;
  private exampleBody = 'title: \'foo\', body: \'bar\', userId: 1';
  private bodyPlaceholder = '';

  request = this.fb.group({
    method: new FormControl(''),
    url: new FormControl(''),
    body: new FormControl(''),
  });

  constructor(
    private randomRequestService: RandomRequestsService,
    private fb: FormBuilder,
    private appStorageService: AppStorageService) { }

  ngOnInit() {
  }

  public sendGivenRequest() {
    this.randomRequestService.getRandomRequest().pipe(
      catchError((err) => {
        this.appStorageService.setStorageDataAndSaveIt(err.status, StorageKeys.lastResponseStatus);
        this.response = JSON.stringify(err, null, 4);
        return of();
      }),
      tap((res: any) => {
        this.response = JSON.stringify(res, null, 4);
        this.appStorageService.setStorageDataAndSaveIt(res.status, StorageKeys.lastResponseStatus);
      })
    ).subscribe();
  }

  changeMethod(e) {
    this.methodName.setValue(e.target.value, {
      onlySelf: true
    });
    this.bodyPlaceholder = this.request.value.method === 'post' ? this.exampleBody : '';
  }

  get methodName() {
    return this.request.get('method');
  }

  public onSubmit() {
    this.randomRequestService.method = this.request.value.method;
    this.randomRequestService.apiUrl = this.request.value.url;
    this.randomRequestService.methodBody = this.request.value.body;
    this.sendGivenRequest();
  }
}
