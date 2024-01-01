import { Component } from '@angular/core';
import LawersJson from '../../assets/json/lawers.json';
// import  * as LawersJson from '../../assets/json/lawers.json';

@Component({
  selector: 'app-test-topic',
  templateUrl: './test-topic.component.html',
  styleUrls: ['./test-topic.component.css'],
})
export class TestTopicComponent {
  // lawers:any=LawersJson[0];
  lawers: any = LawersJson;

  commentBool: boolean = false;
  valueStr: string = '';
  ngX: string = '';
  styleBind: boolean = false;

  showComment() {
    this.commentBool = !this.commentBool;
  }

  keyUoFunction(e: any) {
    this.valueStr = e.target.value;
  }

  numSequence(n: number): Array<number> {
    return Array(n);
  }
}
