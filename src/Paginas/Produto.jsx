import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Produto = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8000/produtos/' + id)
            .then(response => setProduct(response.data))
    }, [id]);

    return <div>
        <h2>{product.nome}</h2>
        <h2>{product.preco}</h2>
    </div>
}

export default Produto;