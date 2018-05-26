import { Customer } from "./model";

export class CustomerRepository {
    private customers: Customer[] = [
        { id: 1, name: 'Jakub Kamiński', birthYear: 1956 },
        { id: 2, name: 'Oliwia Czech', birthYear: 1990 },
        { id: 3, name: 'Mateusz Jaworski' },
    ];

    all() {
        return this.customers;
    }

    findById(id: number) {
        return this.customers.find(c => c.id === id);
    }
}