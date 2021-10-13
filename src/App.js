import { BrowserRouter, Route } from "react-router-dom";
import Step1 from "./pages/Step1";
import Step2 from "./pages/Step2";
import { CSSTransition } from 'react-transition-group';
const App = () => {
  return (
        <BrowserRouter>
          <Route exact path="/">
          {({ match }) => (
            <CSSTransition timeout={500} classNames="fade" unmountOnExit in={match != null}>
              <Step1 />
            </CSSTransition>
            )}
          </Route>
          <Route path="/step-2">
          {({ match }) => (
            <CSSTransition timeout={500} classNames="fade" unmountOnExit in={match != null}>
              <Step2 />
            </CSSTransition>
            )}
          </Route>
        </BrowserRouter>
  )
}

export default App;
