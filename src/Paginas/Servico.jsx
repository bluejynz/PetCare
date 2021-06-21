import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Servico = () => {
    const { id } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8000/servicos/' + id)
            .then(response => setService(response.data))
    }, [id]);

    return <div>
        <h2>{service.nome}</h2>
        <h2>{service.preco}</h2>
    </div>
}

export default Servico;