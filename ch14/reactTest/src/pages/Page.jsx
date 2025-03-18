import { useParams } from 'react-router-dom';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';

const Page = () => {
    const params = useParams();

    const category = params.category || 'globalnews';

    return (
        <>
            <Categories />
            <NewsList category={category} />
        </>
    );
};

export default Page;