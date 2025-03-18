export class DataBaseError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'DataBaseError';
        this.message = message;
    }
}

export class DataBaseSystemFailure extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'DataBaseSystemFailure';
        this.message = message;
    }
}

export class TypeError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'TypeError';
        this.message = message;
    }
}
