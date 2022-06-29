import axios from "axios";
import { ref } from "vue";
let products = ref("");
let fetchProduct = async () => {
    try {
        let response = await axios.get("https://fakestoreapi.com/products");
        let newProducts = response.data.map((d) => {
            return {
                id: d.id,
                title: d.title,
                description: d.description.substr(0, 100),
                image: d.image,
            };
        });
        console.log(newProducts);
        products.value = newProducts;
        return { products };
    } catch (error) {
        console.log(error.message);
    }
}
export { fetchProduct }