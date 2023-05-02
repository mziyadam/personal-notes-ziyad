import { ThemeConsumer } from '../contexts/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';
import PropTypes from 'prop-types';

function ToggleTheme() {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => {
        return <button onClick={toggleTheme}>{theme === 'light' ? <FaMoon /> : <FaSun />}</button>;
      }}
    </ThemeConsumer>
  );
}
ToggleTheme.propTypes = {
    theme: PropTypes.string,
    toggleTheme: PropTypes.func
  };

export default ToggleTheme;