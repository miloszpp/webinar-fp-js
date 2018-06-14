import { Maybe } from "./maybe";

export function compose(f, g) {
    return x => g(f(x));
}

export function pipe(...args) {
    return args.reduce(compose);
}

export const prop = (propertyName) => (object) => object[propertyName];

export const parseIntSafe = x => {
    const result = parseInt(x);
    return isNaN(result) ? Maybe.none<number>() : Maybe.some<number>(result);
}