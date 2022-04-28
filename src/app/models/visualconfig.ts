import { Reservation } from "./reservations";

export class VisualConfiguration {
    _id: string;
    customerName: string;
    colorMode: boolean;
    fontSize: number;

    constructor(_id: string, customerName: string, colorMode: boolean, fontSize: number) {
        this._id = _id;
        this.customerName = customerName;
        this.colorMode = colorMode;
        this.fontSize = fontSize;
    }
}