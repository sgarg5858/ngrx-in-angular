import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CustomInputComponent implements OnInit,OnDestroy {

  @Input('initialValue') set initialValue(value:string |null)
  {
    this.myInput.setValue(value,{emitEvent:false,onlySelf:true})
  }
  constructor() { }
 @Input() label:string="";
 @Output() inputChanged = new EventEmitter<string>();

  myInput=new FormControl('',[Validators.required,Validators.minLength(1)]);
  subscription = new Subscription();


  ngOnInit(): void {
    
    this.subscription.add(

      this.myInput.valueChanges.subscribe((val:string)=>{
        console.log(val)
        this.inputChanged.emit(val);
      })

    )

  }
  ngOnDestroy(): void {
      if(this.subscription)
      {
        this.subscription.unsubscribe();
      }
  }

}
