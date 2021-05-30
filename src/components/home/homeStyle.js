import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  height: fit-content;
`;

export const RecipeCard = styled.div`
  height: 300px;
  background: #e1f1dd;
  padding: 5px;
  border-radius: 3px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 10px;
  box-shadow: 8px 8px 5px black;

  &:hover {
    box-shadow: none;
    transform: scale(0.95);
    transition: all 0.3s ease-in;
  }
`;

export const RecipeImage = styled.img`
  height: 150px;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    box-shadow: 4px 4px 3px gray;
    transform: scale(0.97);
  }
`;

export const Button = styled.button`
  background-color: #00adb5;
  outline: none;
  height: 2rem;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    box-shadow: 2px 2px 3px gray;
    transform: scale(0.9);
  }
`;

export const RecipeHeader = styled.h1`
  font-size: 1.5rem;
  text-align: center;
`;

export const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
`;

export const HomeImg = styled.img`
  width: 60vh;
`;
