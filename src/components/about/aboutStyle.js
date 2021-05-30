import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: calc(80vh - 60px);
  line-height: 2;

  span {
    color: white;
    font-family: "Girassol", sans-serif;
    font-size: 3rem;
  }
`;

export const InfoContainer = styled.div`
  text-align: right;
  padding: 15px;
  border-radius: 5px;

  a {
    color: white;
    &:hover {
      text-decoration: none;
      color: #e1f1dd;
    }
  }
`;

export const HeaderContainer = styled.div``;

export const StyledImage = styled.img`
  width: 500px;
`;
