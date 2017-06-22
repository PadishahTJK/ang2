import {Component,OnChanges,Input,Output,EventEmitter} from '@angular/core';

@Component ({
  selector:'ai-star',
  moduleId:module.id,
//   templateUrl:'star.component',
//   styleUrls:['star.component ']
  templateUrl: 'star.component.html',
    styleUrls: ['star.component.css']

})  

export class  StarComponent implements OnChanges{
    //Passing rating NU.  into  nested Component
   @Input() rating: number;
          starWidth: number;
   @Output()  ratingClicked: EventEmitter<string> = new EventEmitter <string>(); 

  //When  onChange lifecycle occur....Watchers  to  Input properties

  //We dont  have Input Properties
  //OnChange is not onfire
  /*
  // Convert x out of 5 starts
        // to y out of 86px width

  */
  ngOnChanges(): void {
    //   this.starWidth = this.rating * 86/5;
    this.starWidth = this.rating * 86 / 5;
  }

  onClick(): void {
    this.ratingClicked.emit(`The rating ${this.rating} was  clicked!`);
  }

}  