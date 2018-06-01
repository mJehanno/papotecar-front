export interface User {
  id: number;
  lastname: string;
  firstname: string;
  birthdate: Date;
  gender: string;
  email?: string; // optionnal parameter
  password?: string; // optionnal parameter
}
