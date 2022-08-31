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
  day!: string;
  dataAttuale!: string;
  bg: any;
  frase:any;
  buongiorno: string = 'BUONGIORNO!';
  srcHeader: any;
  srcFooter: any;

  ngOnInit(): void {
    this.calcVariables();
  }
  //Questo metodo crea un nunero random tra 0 e la lunghezza massima dell'array
  getRandomNumberRange(arrLength: number) {
    return Math.floor(Math.random() * arrLength);
  }

  //Questo metodo crea un nunero random tra 2 valori, max e min
  getRandomNumberDeg(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  //Questo metodo crea un nunero random tra 0 e 1
  getRandomBoolean() {
    return Math.round(Math.random());
  }

  //Questo metodo crea lle variabili in modo randomico
  calcVariables() {
    this.randomNumberFrasi = this.getRandomNumberRange(this.frasi.length);
    this.randomNumberImg = this.getRandomNumberRange(this.img.length);
    this.randomNumberImgHeader = this.getRandomNumberRange(
      this.imgHeader.length
    );
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

      if(this.giornoAttuale == 'DOMENICA'){
        this.day = 'BUONA'
      } else{
        this.day = 'BUON'
      }

      this.dataAttuale = new Date().toLocaleString('it-IT', { month:'2-digit',day:'2-digit' })
      // console.log(this.dataAttuale)
      // this.dataAttuale = '31/10'

      this.bg= backgrounds[this.randomNumberBackground]
      this.frase = frasi[this.randomNumberFrasi] 
      this.srcHeader = imgHeader[this.randomNumberImgHeader]
      this.srcFooter = img[this.randomNumberImg]

    if(this.dataAttuale =='31/10'){
      this.bg = 'assets/backgrounds/halloween.jpg'
      this.frase = 'Vestitevi di sincerità...perchè la sincerità al giorno d\'oggi è diventata un mostro, spaventa tutti!!!!'
      this.buongiorno = 'BUON HALLOWEEN!'
      this.srcHeader = 'assets/img/zucca.png'
      this.srcFooter = 'assets/img/boo.png'
    }
  }
}
