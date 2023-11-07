import { useRouter } from "next/router";

function Id() {
    const router = useRouter();
    const id = Number(router.query.id);

    return (
        <div>
            <h1>/pages/sub/[id].js</h1>
            <a href="/">page/index.js</a>
            <p>읽어낸 id 값: {id}</p>
        </div>
    );
}

export default Id;