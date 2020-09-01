import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../http-client.service';

export class PrivateAPIKeySet {
  constructor(public key: string, public secret: string) {}
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  keySet = new PrivateAPIKeySet('', '');
  hide = true;
  constructor(private httpClientService: HttpClientService) {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.keySet); 

    var loginInfo = new LoginInfo(this.keySet.key, this.keySet.secret);
    
    this.httpClientService.postLogin(loginInfo);
  }
}
