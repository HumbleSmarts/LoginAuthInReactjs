import { useContext, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import AuthContext from "./store/auth-context";

function App() {
  const authCxt = useContext(AuthContext);
  //this useeffect for logout autometic after 5 mins
  useEffect(() => {
    setTimeout(() => {
      authCxt.logout();
      // Redirect("/auth");
    }, 5 * 60 * 1000);
  }, []);
  

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        {!authCxt.isLoggedIn && (
          <Route path="/auth">
            <AuthPage />
          </Route>
        )}
        <Route path="/profile">
          {authCxt.isLoggedIn && <UserProfile />}
          {!authCxt.isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
