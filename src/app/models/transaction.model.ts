export class Transaction {
    public id: string;
    public startDate: Date;
    public endDate: Date;
    public success: boolean;
    public wallet: string;
    public cost: number;    
    public fees: number;
}