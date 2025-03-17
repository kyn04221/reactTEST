import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

const categories = [
  { name: 'daegu', text: '대구 맛집' },
  { name: 'globalnews', text: '글로벌 뉴스' },
  { name: 'gimhae', text: '김해 맛집' },
  { name: 'busanAtt', text: '부산 명소' },
];

const CategoriesBlock = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Category = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }

  &.active {
    font-weight: 600;
    border-bottom: 2px solid #22b8cf;
    color: #22b8cf;
    //실습2
    transition: color 0.3s ease, border-bottom 0.3s ease;

    &:hover {
      color: #3bc9db;
    }
  }

  & + & {
    margin-left: 1rem;
    @media screen and (max-width: 768px) {
      margin-left: 2rem;
    }
  }
`;

const Categories = () => {
  return (
    <CategoriesBlock>
      {categories.map((c) => (
        <Category key={c.name}

          to={c.name === 'all' ? '/' : `/${c.name}`}

        >{c.text}</Category>
      ))}
    </CategoriesBlock>
  );
};

export default Categories;