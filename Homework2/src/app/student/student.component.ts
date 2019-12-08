import { Component, OnInit} from '@angular/core';

import { STUDENTS } from '../models/Students';
import { Student } from '../models/student';
import { TypeOfData } from '../models/enum';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students = STUDENTS;
  checkedBad: boolean;
  checkedNorm: boolean;
  checkedGood: boolean;
  checkedBadHidden: boolean;
  checkedNormHidden: boolean;
  checkedGoodHidden: boolean;
  searchStudent: string;
  isOpenPopUp: boolean;
  studentId: number;
  isSortClick: boolean;

  constructor() { }
  ngOnInit() {
    this.isOpenPopUp = false;
    this.isSortClick = false;
    }

  public mySort(typeOfData) {
    this.students = this.students.sort((a, b) => a[typeOfData] - b[typeOfData]);
  }
  public search(student: Student): boolean {
    const fullName = student.surname + ' ' + student.name;
    if ((this.searchStudent !== ' ') && (this.searchStudent !== '') && (fullName.indexOf(this.searchStudent) !== -1)) {
      return true;
    } else {
      return false;
    }
  }

  public openPopUp(id: number): void {
    this.isOpenPopUp = !this.isOpenPopUp;
    this.studentId = id;
  }
  public isClickedDelete(config: boolean) {
    if (config === false) {
      this.isOpenPopUp = false;
    }
    if (config === true) {
      this.isOpenPopUp = false;
      this.students.splice(this.studentId, 1);
    }
  }
  public changeSort(): void {
    this.isSortClick = !this.isSortClick;
    console.log(this.isSortClick);
  }
}
