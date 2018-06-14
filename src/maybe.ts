export class Maybe<T> {
    private constructor(private value: T) {}

    static some<T>(value: T) {
        if (!value) throw 'value cannot be falsy';
        return new Maybe<T>(value);
    }

    static none<T>() {
        return new Maybe<T>(null);
    }

    map<R>(f: (value: T) => R): Maybe<R> {
        return !this.value ? Maybe.none<R>() : Maybe.some(f(this.value));
    }

    flatMap<R>(f: (value: T) => Maybe<R>): Maybe<R> {
        return !this.value ? Maybe.none<R>() : f(this.value);
    }

    do(f: (value: T) => void): void {
        if (this.value) f(this.value);
    }
}

export const map = f => m => m.map(f);

export const flatMap = f => m => m.flatMap(f);