import '../App1.css';

const WithoutSkeleton = props => {
    return (
        <div>
            <h1> Without Skeleton </h1>
            {/* isLoading: true --5초--> false */}
            {/* [!를 통해 들어오는걸 역전] false로 들어와서 5초뒤 true로 변경 */}
            {
                !props.isLoading && props.data.map(item => (
                    <li key={item.id} className='item'>
                        <div>
                            <img className='img' src={item.avatar}></img>
                        </div>
                        <div className='info'>
                            <h2>{item.first_name} / {item.last_name}</h2>
                            <p>{item.email}</p>
                        </div>
                    </li>
                ))
            }
        </div>
    );
}

export default WithoutSkeleton;