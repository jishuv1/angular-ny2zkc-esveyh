import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent } from '@syncfusion/ej2-angular-diagrams';
import { Diagram, NodeModel, UndoRedo } from '@syncfusion/ej2-diagrams';

Diagram.Inject(UndoRedo);

/**
 * Default FlowShape sample
 */

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('diagram', { static: true })
  public diagram: DiagramComponent;

  //define nodes
  public nodes: NodeModel[] = [
    {
      id: 'SVGNode',
      width: 100,
      height: 100,
      offsetX: 200,
      offsetY: 200,
      shape: {
        //set type as native
        type: 'Native',
        // define SVG content as a tring
        content:
          '<svg height="150" width="400"><defs><linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1" /><stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1" /></linearGradient></defs><ellipse cx="200" cy="70" rx="85" ry="55" fill="url(#grad1)" /></svg>'
      }
    }
  ];
}
