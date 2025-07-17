import {db} from  "../models/data.js";
import { collection,
        getDocs,
        getDoc,
        addDoc,
        deleteDoc,
        doc
 } from "firebase/firestore";

const productsCollection = collection(db, "products");

export const getAllProducts = async () => {
    try {
        const querySnapshot = await getDocs(productsCollection);
        const products = [];
        querySnapshot.forEach((doc) => {
            products.push({ id: doc.id, ...doc.data() });
        });
        return products;
    } catch (error) {
        console.error(error);   
    }
};


export const getProductById = async (id) => {
    try {
        const docRef = doc(productsCollection, id);
        const docObtenido = await getDoc(docRef); 
        if (docObtenido.exists()){
            return {id: docObtenido.id, ...docObtenido.data()};
        }
        else {
            return null;
        }
    } catch (error) {
        console.error(error);
    }
    
};

export const createProduct = async (registro) => {
    try {
        const docRef = await addDoc(productsCollection, registro);
        return {id: docRef.id, ...registro };

    } catch (error) {
        console.error(error);
    }
    
};

export const deleteProduct = (id) => {
    const indice = products.findIndex((item) => item.id === id);
    const productoBorrado = products.splice(indice, 1);
    fs.writeFileSync(filePath, JSON.stringify(products, null, 2));
    return productoBorrado;
}

export const updateProduct = (id, nuevosDatos ) => {
     const indice = parseInt(products.findIndex((item) => item.id === id));
     if (indice == undefined){
        return null;
     }
     else {
        products[indice] = { ...products[indice], ...nuevosDatos };
        fs.writeFileSync(filePath, JSON.stringify(products, null, 2));
        return products[indice];
     }
}

