import styled from 'styled-components';

export const Container = styled.div`
    width: 100%auto;
    height: 100%auto;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
`;
export const ContainerCenter = styled.div`
  width: 850px;
  height: 550px;
  margin: 0 auto;
  background: #E8D1F2; //
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1px;
`;
export const Header = styled.div`
  width: 850px;
  height: 220px;
  margin: 0 auto;
  background: #0f1f2e; //
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Footer = styled.div`
  width: 850px;
  height: 150px;
  margin: 0 auto;
  background: #0f1f2e; //
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Line = styled.div`
    margin-top: 15px;
    margin-left: 10px;
    width: 830px;
    height: 5px;
    background-color: #132930;
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  justify-items:center;
  align-items: flex-start;
  width:650px;
  margin-top: 60px;
  margin-bottom:12px;
`;

export const ContainerFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items:center;
  align-items: flex-start;
  width:650px;
`;

export const ContainerButton = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  justify-items: center;
  width:850px;
  height: 50px;
`;
export const ContainerList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  width:850px;
  height:380px;
`;

export const ContainerActions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width:650px;
    height:50px;
    
`;

export const ContainerFavorite = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width:650px;
    height:50px;
`;

export const ContainerBodySubTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  width:850px;
  height:100px;
  margin-top: 16px;
`;

export const Body = styled.div`
  width: 850px;
  height: 500px;
  margin: 0 auto;
  background: #13293D; //
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Square = styled.div`
  width: 120px;
  height: 100px;
  font-size: 24px;
  font-weight: bold;
  background: #fff ;//linear-gradient(to right, #7927b2, #fb3182);
  margin-left: 5px;
  margin-top: 10px;
`;
export const Title = styled.h3`
    color: #fff;
    font-family: Roboto, 'Helvetica Neue', sans-serif;
    font-size: 36px;
    font-weight: bold;
    text-transform: uppercase;
`;

export const SubTitle = styled.h3`
    color: #fff;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
`;
export const Description = styled.h3`
    color: #fff;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    font-weight: 300;
`;

export const Button = styled.button`
    border: none;
    border-style: none;
    background-color: #27ae60; 
    width: 100px;
    height: 38px;
    border-radius: 12px;
    margin-left: 12px;
    cursor: pointer;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 700;
    color: #fff;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    text-decoration: none;
    overflow: hidden;
    &:hover{
        opacity:initial;
        background-color:#2ecc71;
    }
    
`;

export const ButtonArround = styled.button`
    border: px;
    border-color: #fff;
    background-color: #13293D; 
    width: 30px;
    height: 30px;
    border-radius: 20px;
    margin-left: 12px;
    margin-top: 5px;
    cursor: pointer;
    font-size: 18px;
    color: #fff;
`;

export const ButtonOutlineAround = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: none;
    border-style: none;
    background-color: #13293D; 
    width: 25px;
    height: 25px;
    border-radius: 20px;
    cursor: pointer;
    font-weight: 700;
    color: #fff;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    overflow: hidden;

    
`;

export const SeachFilter = styled.input`
    background-color: #13293D;
    width: 300px;
    height: 35px;
    color: #fff;
    margin-left: 12px;
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    font-family: Roboto, 'Helvetica Neue', sans-serif;
    font-size: 16px;

    
`;
export const ContainerInput = styled.div`
    display:flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    justify-items: center;
    width: 850px;
    height: 20px;
    margin-left: 12px;
    margin-bottom: 12px;

`;
export const ContainerMusic = styled.div`
    display:flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    justify-items: center;
    width: 650px;
    height: 50px;
    margin-bottom: 12px;
    margin-top: 12px;
    margin-left: 20px
`;


// 13293D
// 006494
// 247BA0
// 1B98E0
// E8D1F2