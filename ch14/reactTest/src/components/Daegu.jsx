import styled from 'styled-components';

// 스타일 컴포넌트 정의
const MuseumItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-bottom: 1px solid #ccc;
  margin-bottom: 1rem;

  .contents {
    h2 {
      margin: 0 0 0.5rem;
      font-size: 1.5rem;
      color: #333;
    }
    p {
      margin: 0.3rem 0;
      line-height: 1.5;
      font-size: 1rem;
      color: #555;
    }
  }
`;

const Daegu = ({ article }) => {
  const {
    BZ_NM,
    FD_CS,
    GNG_CS,
    TLNO,
    MBZ_HR,
    MNU,
    SMPL_DESC,
  } = article;

  return (
    <MuseumItemBlock>
      <div className="contents">
        <h2>{BZ_NM}</h2>
        <p><strong>음식 종류:</strong> {FD_CS}</p>
        <p><strong>주소:</strong> {GNG_CS}</p>
        <p><strong>전화번호:</strong> {TLNO}</p>
        <p><strong>영업시간:</strong> {MBZ_HR}</p>
        {MNU && (
          <p>
            <strong>메뉴:</strong>{' '}
            <span dangerouslySetInnerHTML={{ __html: MNU }} />
          </p>
        )}
        <p><strong>설명:</strong> {SMPL_DESC}</p>
      </div>
    </MuseumItemBlock>
  );
};

export default Daegu;
