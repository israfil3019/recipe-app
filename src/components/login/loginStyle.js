import styled from "styled-components";

export const LoginContainer = styled.div`
  background-image: url("https://picsum.photos/1600/900");
  background-repeat: no-repeat;
  height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.div`
  width: 90vh;
  min-width: 90vh;
  height: 90vh;
  background-color: rgba(0, 173, 181, 0.7);
  border-radius: 50%;
  border: 2px solid #e1f1dd;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Header = styled.h1`
  color: white;
  font-family: "Girassol", sans-serif;
  font-size: 3rem;
`;

export const StyledInput = styled.input`
  height: 8vh;
  font-size: 2rem;
  width: 40vh;
  border-radius: 5px;
  font-family: "Girassol", sans-serif;
  background-color: rgba(0, 0, 0, 0.6);
  border: none;
  color: white;
  margin: 0.5rem;
  text-indent: 20px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledButton = styled.button`
  font-size: 2rem;
  font-family: "Girassol", sans-serif;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  cursor: pointer;
  margin: 0.5rem;
`;

export const StyledImg = styled.img`
  width: 20vh;
  margin: 0.5rem;
`;
