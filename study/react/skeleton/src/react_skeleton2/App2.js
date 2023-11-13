import './App2.css';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function App() {
    return (
        <div className='App'>
            <h1>스켈레톤</h1>
            <p>react-loading-skeleton</p>
            <Skeleton count={4} />
            <SkeletonTheme baseColor='#5e6c77' highlightColor='#a9b7c1'>
                <Skeleton count={3} duration={2} />
            </SkeletonTheme>
        </div>
    );
}