import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import '../App.css';

const MemoryCard = (props) => {
    return (
        <section>
            <h2 className='section-title'>
                <Skeleton duration={1} height={30} width={300} />
            </h2>
            <ul className='list'>
            {/* props.listLength */}
                {Array(4).fill().map((item, index) => (
                    <li className='card' key={index}>
                        <Skeleton height={180} />
                    </li>
                ))}
            </ul>
        </section>
    );
}

const MemoryListCard = (props) => {
    return (
        <>
            <MemoryCard />
        </>
    );
}

export default MemoryListCard;