import { Maybe } from "./maybe";

export interface Customer {
    id: number;
    name: string;
    birthYear: Maybe<number>;
}