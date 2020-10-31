import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
`

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  width: 815px;
  padding: 70px 35px;
  margin: auto;
`

export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 8px;
  color: white;
  text-align: center;
  
  @media (max-width: 600px) {
  font-size: 35px;
  }
`

export const Item = styled.div`
  color: white;
  margin: 0 auto 10px;
  max-width: 670px;
  width: 100%;
  
  &:first-of-type {
    margin-top: 3em;
  }
  
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8em 1.2em;
  background: #303030;
  cursor: pointer;
  margin-bottom: 1px;
  font-size: 26px;
  user-select: none;
  
  img {
     width: 24px;
     filter: brightness(0) invert(1);
     
     @media(max-width: 600px) {
     width: 16px;
     }
  }
`

export const Body = styled.div`
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.5, 0, 0.1, 1);
  font-size: 26px;
  user-select: none;
  background: #303030;
  box-sizing: border-box;
  
  p {
    padding: 0.8em 2.2em 0.8em 1.2em;
    white-space: pre-wrap;
    margin: 0;
  }
  
  &.open {
    max-height: 500px;
    transition: max-height 0.4s cubic-bezier(0.5, 0, 0.1, 1);
  }
  
  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`