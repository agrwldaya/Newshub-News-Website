import { useSelector } from 'react-redux';
import NewsItem from './Newsitem';

export default function News() {
    const items = useSelector((store) => store.newsItem);
    //  console.log(items);
    return (
        <div className='main'>
            <main>
                <div className="items-container">
                    {items.map((item, index) => (
                     <NewsItem key={index} item={item} />
                    ))}
                </div>
            </main>
        </div>
    );
}
