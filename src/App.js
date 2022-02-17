import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CircleLoader from "react-spinners/CircleLoader";
import { css } from "@emotion/react";

const AppBar = lazy(() =>
  import("./components/AppBar" /* webpackChunkName: "appBar-page" */),
);
const HomePage = lazy(() =>
  import("./pages/HomePage" /* webpackChunkName: "home-page" */),
);
const LoginPage = lazy(() =>
  import("./pages/LoginPage" /* webpackChunkName: "login-page" */),
);
const RegisterPage = lazy(() =>
  import("./pages/RegisterPage" /* webpackChunkName: "register-page" */),
);
const UsersPage = lazy(() =>
  import("./pages/UsersPage" /* webpackChunkName: "users-page" */),
);

function App() {
  return (
    <Suspense
      fallback={
        <CircleLoader
          color={"#0d6efd"}
          css={css`
            margin: 30% 45%;
            display: block;
          `}
          size={150}
        />
      }
    >
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="users" element={<UsersPage />} />
          <Route index element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
