export class Transaction {
    public id: string;
    public startDate: Date;
    public endDate: Date;
    public success: boolean;
    public wallet: number;
    public cost: string;    
    public fees: number;
}