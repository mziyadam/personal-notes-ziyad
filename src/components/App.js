import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AddNote from './AddNote';
import InputLogin from './InputLogin';
import InputRegister from './InputRegister';
import DetailPage from './DetailPage';
import NoteList from './NoteList';
import { putAccessToken, getUserLogged } from '../utils/network-data';
import '../styles/style.css';
import { ThemeProvider } from '../contexts/ThemeContext';
import ToggleTheme from './ToggleTheme';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authedUser: null,
      initializing: true,
      theme: localStorage.getItem('theme') || 'light',
      toggleTheme: () => {
        this.setState((prevState) => {
          // mendapatkan nilai tema baru berdasarkan state sebelumnya
          const newTheme = prevState.theme === 'light' ? 'dark' : 'light';
          // menyimpan nilai tema baru ke local storage
          localStorage.setItem('theme', newTheme);
          // mengembalikan state dengan nilai theme terbaru.
          return {
            theme: newTheme
          };
        });
      }
    };
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }
  async onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    this.setState(() => {
      return {
        authedUser: data,
      };
    });
  }
  onLogout() {
    this.setState(() => {
      return {
        authedUser: null
      }
    });
    putAccessToken('');
  }
  async componentDidMount() {
    const { data } = await getUserLogged();
    this.setState(() => {
      return {
        authedUser: data,
        initializing: false
      };
    });
    document.documentElement.setAttribute('data-theme', this.state.theme);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.theme !== this.state.theme) {
      document.documentElement.setAttribute('data-theme', this.state.theme);
    }
  }
  render() {
    if (this.state.initializing) {
      return null;
    }

    if (this.state.authedUser === null) {
      return (
        <ThemeProvider value={this.state}>
          <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <ul className='navbar-nav ms-2'>
                <li className='nav-item'>
                  <ToggleTheme />
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to="/login">Login</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to="/register">Register</Link>
                </li>
              </ul>
            </nav>
          </header>
          <main>
            <Routes>
              <Route path="/*" element={<InputLogin loginSuccess={this.onLoginSuccess} />} />
              <Route path="/login" element={<InputLogin loginSuccess={this.onLoginSuccess} />} />
              <Route path="/register" element={<InputRegister />} />
            </Routes>
          </main>
        </ThemeProvider>
      );
    }
    return (
      <ThemeProvider value={this.state}>
        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className='navbar-nav ms-2'>
              <li className='nav-item'>
                <ToggleTheme />
              </li>
              <li className='nav-item active'>
                <Link className='nav-link' to="/">Home</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to="/new">New</Link>
              </li>
              <li className='nav-item'>
                <button className='btn' onClick={this.onLogout}>Logout</button>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<NoteList />} />
            <Route path="/new" element={<AddNote />} />
            <Route path="/detail/:id" element={<DetailPage />} />
          </Routes>
        </main>
      </ThemeProvider>
    );
  }
}
export default App;