import { User } from '../user/user';

export interface Ride {
  id: number;
  state: string;
  description: string;
  seatingCapacity: number;
  price: number;
  driver: User;
  pools: User[];
}
