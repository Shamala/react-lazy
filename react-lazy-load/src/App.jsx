import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
// import Admin from "./components/Admin"
import SkeletonAdmin from "./components/skeletons/SkeletonAdmin";
import ErrorFallback from "./components/ErrorFallback";

import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const Admin = lazy(() => import("./components/Admin"));

function App() {
  const navigate = useNavigate();
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route
          path="admin"
          element={
            <ErrorBoundary
              FallbackComponent={ErrorFallback}
              onReset={() => navigate("/")}
            >
              <Suspense fallback={<SkeletonAdmin />}>
                <Admin />
              </Suspense>
            </ErrorBoundary>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
