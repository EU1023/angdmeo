import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class QuestService {
  questId!: number;
  questData!: any;
}
