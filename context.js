// React Context allows you to create a context object using React.createContext(). 
// This context object consists of two components: a Provider and a Consumer.
// The Provider component wraps the part of the component tree where you want to 
// share the data, and the Consumer component allows accessing that data from any component within the tree.

// Here's an example that demonstrates the usage of React Context to manage a theme:

import React, { createContext, useState } from 'react';

// Create a context object
const ThemeContext = createContext();

// Create a theme provider component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Provide the theme and toggleTheme function to the context
  const contextValue = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
  );
}

// A component that consumes the theme from the context
function ThemeButton() {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <button onClick={toggleTheme} className={theme}>
          Toggle Theme
        </button>
      )}
    </ThemeContext.Consumer>
  );
}

// A component that consumes the theme from the context
function ThemeText() {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => <p className={theme}>This is a themed text.</p>}
    </ThemeContext.Consumer>
  );
}

// App component that uses the theme provider
function App() {
  return (
    <ThemeProvider>
      <div>
        <ThemeButton />
        <ThemeText />
      </div>
    </ThemeProvider>
  );
}



// In this example, the ThemeContext object is created using createContext(). 
// The ThemeProvider component wraps the components that need access to the theme data.
// It provides the theme value and the toggleTheme function as the context value.
// The ThemeButton and ThemeText components consume the theme value from the context using the ThemeContext.Consumer component.

// By using this approach, any component within the ThemeProvider component's subtree can access
// the theme value and the toggle function without explicitly passing them as props.
// This is particularly useful when you have a large component tree and want to share data without prop drilling.

// Note that for better organization and separation of concerns, you can define the context and
// provider components in separate files and import them as needed throughout your application.