import "./App1.css";
import { userdata } from "./userdata";
import { useState } from "react";

import WithoutSkeleton from './conponents/WithoutSkeleton';
import WithSkeleton from './conponents/WithSkeleton';

export default function App() {
    const [data, setData] = useState(userdata);

    const [isLoading, setIsLoading] = useState(true);
    setTimeout( () => setIsLoading(false), 5000 );  // 5초 로딩

    return (
        <div className="App">
            <ul className="contentsDiv">
                <WithoutSkeleton data={data} isLoading={isLoading} />
            </ul>
            <ul className="contentsDiv">
                <WithSkeleton data={data} isLoading={isLoading} contentsLength={userdata.length} />
            </ul>
        </div>
    );
}