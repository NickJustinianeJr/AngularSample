import { Component } from '@angular/core';

@Component({
    selector:'sandbox',
    template:`
        <h1>Hello World</h1>
        <button id="btn" (click)="fireEvent($event)">Click Event</button>
        <br>
        <button id="btn" (mouseover)="fireEvent($event)">Mouseover Event</button>
        <br>
        <button id="btn" (mousedown)="fireEvent($event)">Mousedown Event</button>
        <br>
        <button id="btn" (mouseup)="fireEvent($event)">Mouseup Event</button>
        <br>
        <button id="btn" (dblclick)="fireEvent($event)">Double Click Event</button>
        <br>
        <button id="btn" (drag)="fireEvent($event)">Drag Event</button>
        <br>
        <button id="btn" (dragover)="fireEvent($event)">Drag Over Event</button>
    `
})

export class SandboxComponent{
   fireEvent(e){
       console.log(e.type);
   }
}