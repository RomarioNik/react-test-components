import { Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { Container, Header, Nav, List } from "./Layout.styled";

export const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <Nav>
            <List>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/examlenav">ExamleNav</NavLink>
              </li>
              <li>
                <NavLink to="/colorpicker">Colorpicker</NavLink>
              </li>
              <li>
                <NavLink to="/counter">Counter</NavLink>
              </li>
              <li>
                <NavLink to="/signupform">SignUpForm</NavLink>
              </li>
              <li>
                <NavLink to="/clock">Clock</NavLink>
              </li>
              <li>
                <NavLink to="/friends">Friends</NavLink>
              </li>
              <li>
                <NavLink to="/pokemonapp">PokemonApp</NavLink>
              </li>
              <li>
                <NavLink to="/appbar">AppBar</NavLink>
              </li>
              <li>
                <NavLink to="/tabs">Tabs</NavLink>
              </li>
              <li>
                <NavLink to="/reader">Reader</NavLink>
              </li>
              <li>
                <NavLink to="/dropdown">Dropdown</NavLink>
              </li>
              <li>
                <NavLink to="/iconbutton">IconButton</NavLink>
              </li>
              <li>
                <NavLink to="/videolist">VideoList</NavLink>
              </li>
              <li>
                <NavLink to="/mockapi">MockApi</NavLink>
              </li>
              <li>
                <NavLink to="/todoapp">TodoApp</NavLink>
              </li>
              <li>
                <NavLink to="/todoredux">TodoRedux</NavLink>
              </li>
              <li>
                <NavLink to="/todoreduxtolkit">TodoReduxTolkit</NavLink>
              </li>
            </List>
          </Nav>
        </Container>
      </Header>

      <Container>
        <main>
          <Suspense fallback={<div>Loading component...</div>}>
            <Outlet />
          </Suspense>
        </main>
      </Container>

      <footer>{/* <Container>Footer</Container> */}</footer>
    </>
  );
};
