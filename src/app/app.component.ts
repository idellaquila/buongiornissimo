import { Component, OnInit } from '@angular/core';
import {
  backgrounds,
  color,
  font,
  frasi,
  img,
  imgHeader,
  positionText,
} from '../constant/constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'buongiornissimo';

  randomNumberFrasi!: number;
  randomNumberImg!: number;
  randomNumberImgHeader!: number;
  randomNumberBackground!: number;
  randomNumberFontFrase!: number;
  randomNumberFontBg!: number;
  randomNumberColorFrase!: number;
  randomNumberColorBgHeader!: number;
  randomNumberColorBgFooter!: number;
  randomNumberImgPosition!: number;
  randomNumberImgTopPosition!: number;
  randomNumberHeaderRotation!: number;
  randomNumberFooterRotation!: number;
  randomNumberFraseRotation!: number;
  randomNumberColumnDirection!: number;
  randomNumberPositionHeaderText!: number;
  randomNumberPositionFooterText!: number;
  randomNumberPaddingFrase!: number;
  positionHeaderText!: string;
  positionFooterText!: string;
  giornoAttuale!: string;
  frasi = frasi;
  img = img;
  imgHeader = imgHeader;
  backgrounds = backgrounds;
  font = font;
  color = color;
  positionText = positionText;

  ngOnInit(): void {
    this.calcVariables();
  }

  getRandomNumberRange(arrLength: number) {
    return Math.floor(Math.random() * arrLength);
  }

  getRandomNumberDeg(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  getRandomBoolean(){
    return Math.round(Math.random())
  }

  calcVariables() {
    this.randomNumberFrasi = this.getRandomNumberRange(this.frasi.length);
    this.randomNumberImg = this.getRandomNumberRange(this.img.length);
    this.randomNumberImgHeader = this.getRandomNumberRange(this.imgHeader.length);
    this.randomNumberBackground = this.getRandomNumberRange(
      this.backgrounds.length
    );
    this.randomNumberFontBg = this.getRandomNumberRange(this.font.length);
    this.randomNumberFontFrase = this.getRandomNumberRange(this.font.length);
    this.randomNumberColorFrase = this.getRandomNumberRange(this.color.length);
    this.randomNumberColorBgHeader = this.getRandomNumberRange(
      this.color.length
    );
    this.randomNumberColorBgFooter = this.getRandomNumberRange(
      this.color.length
    );
    this.randomNumberImgPosition = this.getRandomNumberRange(5);
    this.randomNumberImgTopPosition = this.getRandomNumberRange(5);
    this.randomNumberHeaderRotation = this.getRandomNumberDeg(-15, 15);
    this.randomNumberFooterRotation = this.getRandomNumberDeg(-15, 15);
    this.randomNumberFraseRotation = this.getRandomNumberDeg(-10, 10);
    this.randomNumberColumnDirection = this.getRandomBoolean();
    this.randomNumberPositionHeaderText = this.getRandomNumberRange(2);
    this.randomNumberPositionFooterText = this.getRandomNumberRange(2);
    this.randomNumberPaddingFrase = this.getRandomBoolean();
    this.giornoAttuale = new Date()
      .toLocaleString('it-IT', { weekday: 'long' })
      .toUpperCase();
  }
}
