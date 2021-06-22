import { useEffect, useState } from "react";
import http from "../Http";
import { Link } from 'react-router-dom';

import ItemTable from "../ItemTable";

const ContainerProdutos = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = () => {
        http.get("produtos")
            .then(response => {
                setProducts(response.data);
            });
    }

    return (
        <table>
            <thead>
                <tr>
                    <th className="name">
                        Nome
                    </th>
                    <th>
                        Preço
                    </th>
                </tr>
            </thead>
            <tbody>
                {products.map((p, i) => {
                    return <>
                        <ItemTable key={i} id={p.id} item={p} nome={p.nome} preco={p.preco} />
                        <Link className="details" to={`/produto/${p.id}`}>Ver detalhes</Link>
                    </>
                })}
            </tbody>
        </table>
    )


}

export default ContainerProdutos;