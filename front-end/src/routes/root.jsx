import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../layout/Layout";
import EntryPage from "../pages/home/EntryPage";
import ManageURLsPage from "../pages/ed/ManageURLsPage";
import HistoryPage from "../pages/History/HistoryPage";
export const route = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<EntryPage />} />
      <Route path="v1/manageurls" element={<ManageURLsPage />} />
      <Route path="v1/history" element={<HistoryPage />} />
    </Route>
  )
);
