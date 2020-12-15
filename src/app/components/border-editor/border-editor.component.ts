import { Clipboard } from '@angular/cdk/clipboard';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-border-editor',
  templateUrl: './border-editor.component.html',
  styleUrls: ['./border-editor.component.css']
})
export class BorderEditorComponent implements OnInit {

  borderLeft = 0;
  borderRight = 0;
  borderTop = 0;
  borderBottom = 0;

  constructor(private clipBoard: Clipboard) { }

  ngOnInit(): void {
  }

  borderEdit(){

  }

}
