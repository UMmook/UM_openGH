import './Skeleton.css';

const Skeleton = () => {
    return (
        <li className='skeleton-item'>
            <div className=''>
                <div className='skeleton-img'></div>
            </div>
            <div className='skeleton-info'>
                <div className='skeleton-name'></div>
                <div className='skeleton-email'></div>
            </div>
        </li>
    );
}

export default Skeleton;