//Lo que contenga la interface debe ser exactamente las variables de la API, en este caso
export interface ProductoInterface{
    id: number;
    name: string;
    price: number;
    description: string;
    categoryId: number;
    stock: number;
    quantity: number;
}