import { Component, OnInit } from '@angular/core';
import { ReplaceSpacesPipe } from 'src/app/shared/pipes/replace-spaces.pipe';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  providers: [ReplaceSpacesPipe]
})
export class LoginPageComponent implements OnInit{

    value = 'Hola mundo'

    constructor(private replaceSpace: ReplaceSpacesPipe) {}

    ngOnInit(): void {
        this.value = this.replaceSpace.transform(this.value, '-');
    }

}
