export default async function getUsers(){
    const result = await fetch('https://fakestoreapi.com/products')
    return result.json();
}