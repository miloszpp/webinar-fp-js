import { Customer } from "./model";
import { Maybe } from "./maybe";

export class CustomerRepository {
    private customers: Customer[] = [
        { id: 1, name: 'Jakub Kamiński', birthYear: Maybe.some<number>(1956) },
        { id: 2, name: 'Oliwia Czech', birthYear: Maybe.some<number>(1990) },
        { id: 3, name: 'Mateusz Jaworski', birthYear: Maybe.none<number>() },
    ];

    all() {
        return this.customers;
    }

    findById(id: number): Maybe<Customer> {
        const result = this.customers.find(c => c.id === id);
        return result ? Maybe.some(result) : Maybe.none();
    }
}