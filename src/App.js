import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Navigation from "./components/Navigation";
import Users from "./components/Users/Users";
import Albums from "./components/Albums/Albums";

function App() {
  return (
    <Router>
      <Container maxWidth="md">
        <Navigation />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Switch>
              <Route path="/users">
                <Users />
              </Route>
              <Route path="/albums">
                <Albums />
              </Route>
              <Route path="*">
                <Redirect to="/" />
              </Route>
            </Switch>
          </Grid>
        </Grid>
      </Container>
    </Router>
  );
}

export default App;
