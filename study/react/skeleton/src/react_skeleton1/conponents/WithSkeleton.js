import '../App1.css';
import Skeleton from './Skeleton';

const WithSkeleton = props => {
    return (
        <div>
            <h1> With Skeleton </h1>
            {
                props.isLoading ? 
                    new Array(props.contentsLength).fill(1).map((dummy, i) => (
                        <Skeleton key={i} />
                    ))
                :
                    props.data.map(item => (
                        <li className='item' key={item.id}>
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

export default WithSkeleton;