import styled from "styled-components";

export const DetailContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  background: #00adb5;
  min-height: calc(100vh - 75px);
  padding: 5px;
`;

export const DetailPart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  margin: 1rem;
  border: 2px solid white;
  border-radius: 5px;
  background-color: #e1f1dd;
`;

export const ImgContainer = styled.div`
  border: 3px solid #00adb5;
  border-radius: 1rem;
  padding: 4px;
  margin: 2rem;

  img {
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 25px;
  font-size: 3rem;

  h1 {
    font-size: 3rem;
  }

  img {
    width: 300px;
  }
`;

export const IngContainer = styled.div`
  width: 400px;
  font-size: 1.4rem;
  margin: 1rem;
`;

export const OtherPart = styled.div`
  text-align: center;
  font-size: 1.5rem;
  margin: 2rem;
`;
