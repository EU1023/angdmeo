import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class QuestService {
  quizId!: number;
  questId!: number;
  questData!: any;
}
