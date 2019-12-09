export enum TypeOfData {
  surname,
  name,
  patronymic,
  dateOfBirth,
  gpa
}

export interface ITypeOfData {
  surname: string;
  name: string;
  patronymic: string;
  dateOfData: Date;
  gpa: number;
}


