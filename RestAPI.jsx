import axios from "axios";
import { useEffect } from "react";

const RestAPI = () => {
    useEffect(() => {
        axios
        .get("https://localhost:3000/cv")
        .then((res) => console.log(res.data));
        
    })
}