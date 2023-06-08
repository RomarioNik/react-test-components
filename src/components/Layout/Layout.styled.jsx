import styled from "styled-components";

export const Container = styled.div`
  max-width: 991px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.header`
  width: 100%;
  height: 120px;
  background-color: #cccccc;
`;

export const Nav = styled.nav`
  height: 100%;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  height: 100%;
  list-style: none;
`;
