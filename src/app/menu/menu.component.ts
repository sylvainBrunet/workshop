import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit() {
  }

  public scrollElement(sectionId: string) {
    let element = document.getElementById(sectionId);
    if(element == null)
    {
      this.router.navigate(['/home']);
    }
    else
    {
      element.scrollIntoView(true);
    }
  }

}
