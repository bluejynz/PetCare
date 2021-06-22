import { useEffect, useState } from "react";
import http from "../Http";
import { Link } from 'react-router-dom';

import ItemTable from "../ItemTable";

const ContainerServicos = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        getServices();
    }, []);

    const getServices = () => {
        http.get("servicos")
            .then(response => {
            setServices(response.data);
        });
    }

    return <table>
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
            {services.map((s, i) => {
                return <>
                    <ItemTable key={i} id={s.id} item={s} nome={s.nome} preco={s.preco} />
                    <Link className="details" to={`/servico/${s.id}`}>Ver detalhes</Link>
                </>
            })}
        </tbody>
    </table>
}

export default ContainerServicos;