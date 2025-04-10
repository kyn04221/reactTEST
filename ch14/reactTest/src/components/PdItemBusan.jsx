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
      margin: 0;
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


const PdItemBusan = ({ article }) => {
  const { MAIN_TITLE, ADDR1, ITEMCNTNTS, MAIN_IMG_THUMB, HOMEPAGE_URL } = article;

  return (
    <NewsItemBlock>
      {MAIN_IMG_THUMB && (
        <div className="thumbnail">
          <a href={HOMEPAGE_URL} target="_blank" rel="noopener noreferrer">
            <img src={MAIN_IMG_THUMB} alt="thumbnail" />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          제목: {MAIN_TITLE}
        </h2>
        <p>소개 : {ITEMCNTNTS}</p>
        <p>주소 : {ADDR1}</p>

      </div>
    </NewsItemBlock>
  );
};

export default PdItemBusan;