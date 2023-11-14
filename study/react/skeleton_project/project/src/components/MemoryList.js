const Card = ({item}) => {
    return (
        <li className="card">
            <img src={item.image} className="card-image" />
            <h4 className="card-title">{item.title}</h4>
            <p className="card-price">{item.price}</p>
        </li>
    );
}

const MemoryList = ({list}) => {
    return (
        <ul className="list">
            {
                list.items.map((item, index) => (
                    <Card key={index} item={item} />
                ))
            }
        </ul>
    );
}
export default MemoryList;