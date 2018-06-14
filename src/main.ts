import { CustomerRepository } from "./customer-repository";
import { pipe, prop, parseIntSafe } from "./utils";
import { flatMap, map } from "./maybe";

const repository = new CustomerRepository();

const calculateBtnEl = document.getElementById('calculate-btn') as HTMLButtonElement;
const customerIdInputEl = document.getElementById('customer-id-input') as HTMLInputElement;
const customerAgeResultsEl = document.getElementById('customer-age-results') as HTMLParagraphElement;

calculateBtnEl.onclick = () => {
    const customerId = customerIdInputEl.value;
    const maybeAge = getCustomerAgePointfree(customerId);
    maybeAge.do(age => {
        customerAgeResultsEl.textContent = `Customer age is: ${age}`;
    });
};

const findById = repository.findById.bind(repository);
const calculateAge = currentYear => year => currentYear - year;

const getCustomerAgePointfree =
    pipe(
        parseIntSafe,
        flatMap(findById),
        flatMap(prop('birthYear')),
        map(calculateAge(new Date().getFullYear()))
    );

// function getCustomerAgeSafe(idString: string) {
//     const id = parseInt(idString);
//     if (!isNaN(id)) {
//         const customer = repository.findById(id);
//         if (customer !== undefined) {
//             if (customer.birthYear !== undefined) {
//                 const currentYear = new Date().getFullYear();
//                 return currentYear - customer.birthYear;
//             }
//         }
//     }
// }