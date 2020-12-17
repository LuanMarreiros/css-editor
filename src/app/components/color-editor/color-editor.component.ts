import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-editor',
  templateUrl: './color-editor.component.html',
  styleUrls: ['./color-editor.component.css']
})
export class ColorEditorComponent implements OnInit {

  colorRGB = 'rgb(223,40,34)';
  colorHEX = '';

  constructor() { }

  ngOnInit(): void {
    this.setPageTitle();
    setInterval(()=>{
      this.colorHEX = this.rgbToHEXColor();
    })
  }

  setPageTitle(){
    document.title = 'CSS Editor | Color';
  }

  rgbToHEXConversion(numberRGB){
    return Number(numberRGB).toString(16);
  }

  rgbToHEXColor(){
    let r = this.colorRGB.replace(/[A-z]|[\\(\\)]/g,'').split(',')[0];
    let g = this.colorRGB.replace(/[A-z]|[\\(\\)]/g,'').split(',')[1];
    let b = this.colorRGB.replace(/[A-z]|[\\(\\)]/g,'').split(',')[2];

    return `#${this.rgbToHEXConversion(r)}${this.rgbToHEXConversion(g)}${this.rgbToHEXConversion(b)}`
  }

}
