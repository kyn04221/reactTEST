import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from '../lib/usePromise';
import PdItemBusan from './PdItemBusan';
import GlobalNews from './GlobalNews';
import Daegu from './Daegu';
import Gimhae from './Gimhae';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  const sendData = () => {
    // const query = category === 'all' ? '' : `&category=${category}`;
    // if (category === 'daegu') 
    if (category === 'daegu')  {
        return axios.get(
          `/kor/api/tasty.html?mode=json&addr=중구`
        );
      } else if (category === 'globalnews') {
      console.log(`category 2: ${category}`);
      return axios.get(
        `https://dream.kotra.or.kr/openapi/ovseaMrktNews?numOfRows=10&pageNo=1&search8=`
      );
    } else if (category === 'gimhae') {
      console.log(`category 3: ${category}`);
      return axios.get(
        `http://www.gimhae.go.kr/openapi/tour/restaurant.do`
        // `https://www.gimhae.go.kr/openapi/tour/tourinfo.do`
      );
    } else if (category === 'busanAtt') {
      console.log(`category 3: ${category}`);
      return axios.get(
        `http://apis.data.go.kr/6260000/AttractionService/getAttractionKr?serviceKey=ALRX9GpugtvHxcIO%2FiPg1vXIQKi0E6Kk1ns4imt8BLTgdvSlH%2FAKv%2BA1GcGUQgzuzqM3Uv1ZGgpG5erOTDcYRQ%3D%3D&numOfRows=10&pageNo=1&resultType=json`
      );
    } 
    else {
        // `https://newsapi.org/v2/top-headlines?country=us${query}&apiKey=0a8c4202385d4ec1bb93b7e277b3c51f`
        return Promise.resolve({ data: { articles: [] } });
      
    }
  };

  const [loading, resolved, error] = usePromise(sendData, [category]);

  if (loading) {
    return <NewsListBlock>대기 중...</NewsListBlock>;
  }

  if (!resolved) {
    return null;
  }

  if (error) {
    return <NewsListBlock>에러 발생!</NewsListBlock>;
  }

  console.log('Category:', category);
console.log('API Response:', resolved.data);


  const data = category === 'daegu'
  ? resolved.data?.data || []
    : category === 'globalnews'
    ? resolved.data?.response?.body?.itemList?.item || []
    : category === 'gimhae'
    ? resolved.data?.results || []
    : category === 'busanAtt'
      ? resolved.data?.getAttractionKr?.item || []
      : resolved.data?.articles || [];
    console.log('Fetched data:', data);


  return (
    <NewsListBlock>
        {category === 'daegu' ? (
        data.map((item, index) => (
  <Daegu key={item.seq || index} article={item} />
    ))
      ) :
      category === 'globalnews' ? (
        data.map((item, index) => (
        <GlobalNews key={index} article={item} />
    ))
      )  :
      category === 'gimhae' ? (
        data.map((item, index) => (
        <Gimhae key={index} article={item} />
    ))
      ) : category === 'busanAtt' ? (
        data.map((item, index) => (
          <PdItemBusan key={index} article={item} />
        ))
      ) : (
        data.map((item) => (
          <NewsItem key={data.url} article={item} />
        ))
      )}
    </NewsListBlock>
  );
};

export default NewsList;
