import './App3.css';
import { useState, useEffect } from 'react';
import { youtubeData } from './youtubeData';

import SkeletonCard from './components/SkeletonCard';
import CardList from './components/CardList';

const App = () => {
    const [loading, setLoading] = useState(false);
    const [videos, setVideos] = useState([]);

    useEffect(
        () => {
            setLoading(true);
            const timer = setTimeout( ()=>{
                setVideos(youtubeData);
                setLoading(false);
            }, 2000 );
            return () => clearTimeout(timer);
        }
    , []);

    return (
        <div className='App'>
            {loading && <SkeletonCard listLength={youtubeData[0].items.length} />}
            {
                !loading && videos.map((list, index) => (
                    <section key={index}>
                        <h2 className='section-title'>{list.section}</h2>
                        <CardList list={list} />
                    </section>
                ))
            }
        </div>
    );
}

export default App;