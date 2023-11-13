import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import '../App3.css';

const SkeletonItem = (props) => {
    return (
        <section>
            <h2 className='section-title'>
                <Skeleton duration={1} height={30} width={300} />
            </h2>
            <h2 className='section-title'>
                <Skeleton duration={1} height={20} width={100} />
            </h2>
            <ul className='list'>
            {/* props.listLength */}
                {Array(3).fill().map((item, index) => (
                    <li className='card' key={index}>
                        <Skeleton height={180} />
                    </li>
                ))}
            </ul>
        </section>
    );
}

const SkeletonCard = (props) => {
    return (
        <>
            <SkeletonItem />
            <SkeletonItem />
            <SkeletonItem />
        </>
    );
}

export default SkeletonCard;