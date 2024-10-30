import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonImg,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonImg, IonHeader, IonToolbar, IonTitle, IonContent, DecimalPipe],
})
export class HomePage implements OnInit {
  ballPosition = { x: 0, y: 0 };
  score = 0;
  ballSize = 150;
  ballColor = 'bg-blue-500';
  slapSound = new Audio('assets/slap-sound.mp3');
  showSlapIcon = false;

  ngOnInit() {
    this.moveBall();
  }

  moveBall() {
    setInterval(() => {
      const screenHeight = window.innerHeight - this.ballSize;
      const screenWidth = window.innerWidth - this.ballSize;

      this.ballPosition = {
        x: Math.random() * screenWidth,
        y: Math.random() * screenHeight,
      };
    }, 1500);
  }

  onBallClick() {
    this.score++;
    this.playSlapSound();
    this.changeBallColor();
    this.showSlapEffect();
  }

  playSlapSound() {
    this.slapSound.play();
  }

  changeBallColor() {
    this.ballColor = 'bg-red-500';
    setTimeout(() => {
      this.ballColor = 'bg-blue-500';
    }, 1000);
  }

  showSlapEffect() {
    this.showSlapIcon = true;
    setTimeout(() => {
      this.showSlapIcon = false;
    }, 1000);
  }
}
