import { UserIterface } from "./user.interface";

export interface TaskInterface {
    id: string | number;
    title: string;
    tags: string[];
    user: UserIterface;
    status: 'in-progress' | 'completed' | 'wait';
}



