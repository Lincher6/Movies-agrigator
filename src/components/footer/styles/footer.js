import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 1000px;
  padding: 70px 56px;
  
  @media (max-width: 1000px) {
  padding: 70px 30px;
  }
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`

export const Title = styled.p`
  font-size: 20px;
  margin-bottom: 40px;
  color: #757575;
`

export const Link = styled.a`
  text-decoration: none;
  color: #757575;
  margin-bottom: 10px;
  font-size: 16px;
`

export const Break = styled.div`
  height: 20px;
`

export const Text = styled.p`
  font-size: 16px;
  color: #757575;
  margin-bottom: 40px;
`;