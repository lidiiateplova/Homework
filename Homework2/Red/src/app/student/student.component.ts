import { Component, OnInit } from "@angular/core";

import { ITypeOfData } from "../models/enum";
import { Student } from "../models/student";
import { STUDENTS } from "../models/students";


@Component({
  selector: "app-student",
  templateUrl: "./student.component.html",
  styleUrls: ["./student.component.css"]
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

  ngOnInit(): void {
    this.isOpenPopUp = false;
    this.isSortClick = false;
    }

  public mySortDate(typeOfData: string): void {
    this.students = this.students.sort((a, b) => a.dateOfBirth.getTime() - b.dateOfBirth.getTime());
  }
  public mySortGpa(typeOfData: string): void {
    this.students = this.students.sort((a, b) => a.gpa - b.gpa);
  }
  public search(student: Student): boolean {
    const fullName = student.surname + " " + student.name;
    if ((this.searchStudent !== " ") && (this.searchStudent !== "") && (fullName.indexOf(this.searchStudent) !== -1)) {
      return true;
    } return false;
  }

  public openPopUp(id: number): void {
    this.isOpenPopUp = !this.isOpenPopUp;
    this.studentId = id;
  }
  public isClickedDelete(config: boolean): void {
    if (config === false) {
      this.isOpenPopUp = false;
    }
    if (config === true) {
      this.isOpenPopUp = false;
      this.students.splice(this.studentId, 1);
    }
  }
  public gpaSort(gpaFilter: number): void {

  }

}
