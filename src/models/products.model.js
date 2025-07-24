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
        console.log("Error en cabecera!");
    }
    
};

export const deleteProduct = async (id) => {
    try {
        const docRef = doc(productsCollection, id);
        const docObtenido = await getDoc(docRef);
        if (docObtenido.exists()){
            await deleteDoc(docRef, id);
            return true;
        }
        else {
            return false;
        }
        
    } catch (error) {
        console.error(error);
      }
};



