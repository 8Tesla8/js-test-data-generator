export enum StringCaseSensetiveOptions {
    AllLowercase = 'allLowercase',
    AllUppercase = 'allUppercase',
    Default = 'default', 
}

export enum StringOptions{
    AllowDigits = 'allowDigits',
    Name = 'name',
    Guid = 'guid',
    Default = 'default', 
}

export class StringParameters{
    public minLength: number;
    public maxLength: number;
    public options: StringOptions;
    public caseSensitiveOptions: StringCaseSensetiveOptions;

    constructor() {
        this.minLength = 4;
        this.maxLength = 8;
        this.options = StringOptions.Default;
        this.caseSensitiveOptions = StringCaseSensetiveOptions.Default;
    }
}


export class NumberParameters {
    public startNumber: number;
    public endNumber: number;
    public float:boolean;
    public floatPrecisions:number;
    public convertToString: boolean;

    constructor() {
        this.convertToString = false;
        this.startNumber = 1;
        this.endNumber = 1000;
        this.float = true;
        this.floatPrecisions = 5;
    }
}


export class DateParameters {
    public startDate: Date;
    public endDate: Date;
    public convertToString: boolean;

    constructor() {
        this.convertToString = false;
        this.startDate = new Date();
        this.endDate = new Date(this.startDate.getDate() - 14);
    }
}

export class BooleanParameters {
    public convertToString: boolean;

    constructor() {
        this.convertToString = false;
    }
}