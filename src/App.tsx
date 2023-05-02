import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Board from './components/Board/Board';

import {AccountType} from "./types";
import AddNewCardPage from "./pages/AddNewCardPage";
import TimelinePage from "./pages/TimelinePage";
import NotFoundPage from "./pages/NotFoundPage";
import {SubmitContext} from "./context";
import {
  Action,
  addAccount,
  loadAccounts
} from "./redux/accounts/actions";

export type PropsApp = {
  accounts: AccountType[],
  loadAccounts(): any,
  addAccount(payload: AccountType): Action,
}

class App extends Component<any, PropsApp> {
  componentDidMount() {
    this.fetchAccounts();
  }

  fetchAccounts = () => this.props.loadAccounts();

  handleSubmit = newAccount => this.props.addAccount(newAccount);

  render(): JSX.Element {
    return (
      <Router>
        <Board accounts={this.props.accounts}/>

        <Routes>
          <Route path='/'/>
          <Route path='/actions/add_card' element={
            <SubmitContext.Provider value={{onSubmit: this.handleSubmit}}>
              <AddNewCardPage/>
            </SubmitContext.Provider>
          } />
          <Route path='/account/:accountId' element={<TimelinePage/>} />
          <Route path='*' element={<NotFoundPage/>} />
        </Routes>
      </Router>
    );
  }
}

const mapStateToProps = state => ({accounts: state.accounts});
const mapDispatchToProps = dispatch => ({
  loadAccounts: () => dispatch(loadAccounts()),
  addAccount: payload => dispatch(addAccount(payload)),
});

export {App};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
