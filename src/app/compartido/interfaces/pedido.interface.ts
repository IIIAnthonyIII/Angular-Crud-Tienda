export interface DetallesInterface{
    productId: number;
    productName: string;
    quantity: number;
}

export interface PedidoInterface{
    name: string;
    shippingAddress: string;
    city: string;
    date: string;
    pickup: boolean;
    id: number;
}

export interface DetallesPedidoInterface{
    details: DetallesInterface[];
    orderId: number;
}