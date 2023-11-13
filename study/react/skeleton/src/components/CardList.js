
const Card = ({item, channel}) => {
    return (
        <li className="card">
            <a href={`https://www.youtube.com/watch?v=${item.id}`} className="card-link">
                <img src={item.image} className="card-image" />
                <img src={item.image} className="channel-image" />
                <h4 className="card-title">{item.title}</h4>
                <p className="card-channel">{channel}</p>
                <div className="card-metrics">
                    {item.views} / {item.published}
                </div>
            </a>
        </li>
    );
}

const CardList = ({list}) => {
    return (
        <ul className="list">
            {
                list.items.map((item, index) => (
                    <Card key={index} item={item} channel={list.channel} />
                ))
            }
        </ul>
    );
}

export default CardList;