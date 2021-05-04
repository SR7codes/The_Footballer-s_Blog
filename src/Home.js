
import Bloglist from './bloglist';
import useFetch from './useFetch';

const Home = () => {

    const {data: blogs, isPending, error} = useFetch ('http://localhost:8000/blogs');

    return (
        <div className='Home'>
            {error && <div>{error} </div>}
            {isPending && <div>loading...</div>}
            {blogs && <Bloglist blogs={blogs} title="All blogs!"></Bloglist>}
            </div>
    );
}

export default Home;