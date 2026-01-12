// You are given two objects:
    // One object contains product details
    // Another object contains pricing details
// Tasks:
    // Merge both objects using the spread operator
    // Use destructuring to extract:
        // name
        // price
        // category
    // Display the extracted values

const product = {
  name: "Laptop",
  category: "Electronics"
};

const pricing = {
  price: 50000,
  discount: 10
};

export default function Product(){
    const merged = {
        ...product,
        ...pricing
    }

    const {name, price, category, discount} = merged;
    console.log(name, price, category, discount);
    
    return (
        <>
        {/* <div>
            <h1>Name: {name}</h1>
            <h2>Price: {price}</h2>
            <h2>category: {category}</h2>
            <h2>Discount: {discount}</h2>
        </div> */}
        </>
    )
}