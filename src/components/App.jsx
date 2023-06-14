import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
// import ExamleNavDetails from '../pages/ExamleNavDetails.jsx';
// import ExamleNav from '../pages/ExamleNav.jsx';
// import Home from '../pages/Home.jsx';
// import { Gallery } from './Gallery/Gallery';
import { Layout } from "./Layout";

import {
  AppBarPage,
  ClockPage,
  ColorpickerPage,
  CounterPage,
  DropdownPage,
  // ExamleNav,
  // ExamleNavDetails,
  FriendsPage,
  // Home,
  IconButtonPage,
  MockApiAppPage,
  PokemonAppPage,
  ReaderPage,
  SignUpFormPage,
  TabsPage,
  TodoAppPage,
  TodoReduxAppPage,
  TodoReduxTolkitAppPage,
  TodoReduxToolkitAsyncPage,
  VideoListPage,
} from "../pages";

import { Subbreeds } from "./Subbreeds/Subbreeds";
// import { ColorpickerPage } from "../pages/ColorpickerPage.jsx";
// import { CounterPage } from "../pages/CounterPage.jsx";
// import { SignUpFormPage } from "../pages/SignUpFormPage.jsx";
// import { ClockPage } from "../pages/ClockPage.jsx";
// import { FriendsPage } from "../pages/FriendsPage";
// import { PokemonAppPage } from "../pages/PokemonAppPage";
// import { AppBarPage } from "../pages/AppBarPage.jsx";
// import { TabsPage } from "../pages/TabsPage.jsx";
// import { ReaderPage } from "../pages/ReaderPage.jsx";
// import { DropdownPage } from "../pages/DropdownPage.jsx";
// import { IconButtonPage } from "../pages/IconButtonPage.jsx";
// import { VideoListPage } from "../pages/VideoListPage.jsx";
// import MockApiAppPage from "../pages/MockApiAppPage";
// import { TodoReduxApp } from "./TodoRedux/TodoReduxApp";
// import { TodoReduxTolkitApp } from "./TodoReduxToolkit/TodoReduxTolkitApp";

const Home = lazy(() => import("../pages/Home"));
const ExamleNav = lazy(() => import("../pages/ExamleNav"));
const ExamleNavDetails = lazy(() => import("../pages/ExamleNavDetails"));
const Gallery = lazy(() =>
  import("./Gallery/Gallery").then((module) => ({
    ...module,
    default: module.Gallery,
  }))
);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="colorpicker" element={<ColorpickerPage />} />
        <Route path="counter" element={<CounterPage />} />
        <Route path="signupform" element={<SignUpFormPage />} />
        <Route path="clock" element={<ClockPage />} />
        <Route path="friends" element={<FriendsPage />} />
        <Route path="pokemonapp" element={<PokemonAppPage />} />
        <Route path="appbar" element={<AppBarPage />} />
        <Route path="tabs" element={<TabsPage />} />
        <Route path="reader" element={<ReaderPage />} />
        <Route path="dropdown" element={<DropdownPage />} />
        <Route path="iconbutton" element={<IconButtonPage />} />
        <Route path="videolist" element={<VideoListPage />} />
        <Route path="mockapi" element={<MockApiAppPage />} />
        <Route path="todoapp" element={<TodoAppPage />} />
        <Route path="todoredux" element={<TodoReduxAppPage />} />
        <Route path="todoreduxtolkit" element={<TodoReduxTolkitAppPage />} />
        <Route
          path="todoreduxtoolkitasync"
          element={<TodoReduxToolkitAsyncPage />}
        />

        <Route path="examlenav" element={<ExamleNav />} />
        <Route path="examlenav/:dogId" element={<ExamleNavDetails />}>
          <Route path="subbreeds" element={<Subbreeds>Subbreeds</Subbreeds>} />
          <Route path="gallery" element={<Gallery>Gallery</Gallery>} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
