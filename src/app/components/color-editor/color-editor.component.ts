import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-editor',
  templateUrl: './color-editor.component.html',
  styleUrls: ['./color-editor.component.css']
})
export class ColorEditorComponent implements OnInit {

  color = '';

  constructor() { }

  ngOnInit(): void {
    this.setPageTitle();
  }

  setPageTitle(){
    document.title = 'CSS Editor | Color';
  }

}
