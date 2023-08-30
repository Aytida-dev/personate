import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Blogpage from "../pages/Blogpage";
import SingleBlogsPage from "../pages/SingleBlogsPage";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/blog" element={<Blogpage />} />
      <Route path="/blog/:id" element={<SingleBlogsPage />} />
    </Routes>
  );
}
