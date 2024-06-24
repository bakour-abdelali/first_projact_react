import { IUserData } from "../interfaces/user_data";

interface InputData {
    type:string,
    name: keyof IUserData;
    id:string,
    label:string,
    
}
export const inputData:InputData[]=[
    
  { type: 'text', name: 'email', id: 'email', label: 'Email' },
  { type: 'text', name: 'userName', id: 'userName', label: 'Username' },
  { type: 'text', name: 'address', id: 'address', label: 'Address' },
  { type: 'password', name: 'password', id: 'password', label: 'Password' },

];