//book gòm những thuộc tính là id, title, description, price, originalPrice, Price, image
interface Book {
    id: number;
    title: string;
    description: string;
    originalPrice:number;
    price: number;
    imageUrl: string;
}
export default Book;