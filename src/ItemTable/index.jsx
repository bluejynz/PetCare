const ItemTable = (props) => {
    return (<tr>
        <th className="name">
            {props.nome}
        </th>
        <th>
            {props.preco}
        </th>
    </tr>)
}

export default ItemTable;