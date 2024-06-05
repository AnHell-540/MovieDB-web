import { Route, Routes } from "react-router-dom";
import {
  Home,
  Movie,
  NextReleases,
  Favorites,
  TopRated,
} from "../ui/views/index";


export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/top-rated" element={<TopRated />} />
        <Route path="/next-releases" element={<NextReleases />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/movie" element={<Movie />} />
      </Routes>
    </>
  );
};
