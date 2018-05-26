export function compose(f, g) {
    return x => g(f(x));
}

export function pipe(...args) {
    return args.reduce(compose);
}

export const prop = (propertyName) => (object) => object[propertyName];