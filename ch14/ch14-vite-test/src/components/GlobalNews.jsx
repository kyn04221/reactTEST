import styled from 'styled-components';

const NewsItemBlock = styled.div`
  display: flex;
  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 170px;
      object-fit: cover;
    }
  }
  .contents {
    h2 {
      margin: 0 0 0.5rem;
      a {
        color: black;
        text-decoration: none;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;

const formatDate = (isoString) => {
  const date = new Date(isoString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};


const decodeHTMLEntities = (text) => {
  const textarea = document.createElement('textarea');
  textarea.innerHTML = text;
  return textarea.value;
};

const GlobalNews = ({ article }) => {
  const {
    newsTitl,
    regn,
    natn,
    othbcDt,
    newsWrterNm,
    kotraNewsUrl,
    fileLink
  } = article;

  return (
    <NewsItemBlock>
      {fileLink && (
        <div className="thumbnail">
          <a href={kotraNewsUrl} target="_blank" rel="noopener noreferrer">
            <img src={fileLink} alt="뉴스 이미지" />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          <a href={kotraNewsUrl} target="_blank" rel="noopener noreferrer">
            {decodeHTMLEntities(newsTitl)}
          </a>
        </h2>
        <p>국가: {natn}</p>
        <p>지역: {regn}</p>
        <p>작성자: {newsWrterNm}</p>
        <p>발행일: {othbcDt ? formatDate(othbcDt) : '정보 없음'}</p>
      </div>
    </NewsItemBlock>
  );
};

export default GlobalNews;
