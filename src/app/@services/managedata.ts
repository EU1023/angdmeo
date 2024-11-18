import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
@Injectable({
  providedIn:'root'
})


export class Managedata{
  constructor(private router: Router){};
  manage!:number;
  // manage:number=0;
}
