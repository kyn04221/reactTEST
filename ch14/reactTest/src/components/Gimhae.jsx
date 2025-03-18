import styled from 'styled-components';

// 스타일 컴포넌트 정의
const RestaurantItemBlock = styled.div`
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
    img {
      width: 100%;
      max-width: 300px;
      height: auto;
      margin-top: 0.5rem;
      border-radius: 8px;
    }
  }
`;

const Gimhae = ({ article }) => {
  const {
    name,
    category,
    address,
    phone,
    businesshour,
    menuprice,
    content,
    images,
  } = article;

  return (
    <RestaurantItemBlock>
      <div className="contents">
        <h2>{name}</h2>
        <p><strong>음식 종류:</strong> {category}</p>
        <p><strong>주소:</strong> {address}</p>
        <p><strong>전화번호:</strong> {phone}</p>
        <p><strong>영업시간:</strong> {businesshour}</p>
        {menuprice && <p><strong>메뉴:</strong> {menuprice}</p>}
        {content && <p><strong>설명:</strong> {content}</p>}
        {images.length > 0 && <img src={images[0]} alt={name} />}
      </div>
    </RestaurantItemBlock>
  );
};

export default Gimhae;
