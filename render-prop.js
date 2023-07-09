// The Render Props pattern in React involves passing a function as a prop to a component, 
// allowing the component to call that function and pass necessary data as arguments.
// This pattern enables components to share code and functionality while giving the parent 
// component control over what to render.Here's an example to illustrate the concept:
import React from 'react';

// A component that accepts a render prop
function RenderPropComponent(props) {
  const data = 'Hello, Render Props!';
  return <div>{props.render(data)}</div>;
}

// Parent component that uses the RenderPropComponent
function App() {
  const renderFunction = data => {
    return <p>{data}</p>;
  };

  return (
    <div>
      <h1>Render Props Example</h1>
      <RenderPropComponent render={renderFunction} />
    </div>
  );
}
// In this example, the RenderPropComponent accepts a prop named render, which is a function. 
// The component invokes this function and passes the necessary data as an argument.
// In this case, the data is the string 'Hello, Render Props!'.The parent component, 
// App, defines the renderFunction, which receives the data as an argument and returns the JSX to be rendered.

// By using the Render Props pattern, the RenderPropComponent allows the parent component (App in this case) 
// to control what to render based on the provided render function. 
// This pattern promotes code reuse and flexibility, as the parent component can determine how to 
// display the data without relying on predefined render logic inside the RenderPropComponent.



// The Render Props pattern can be further extended to pass additional parameters or component 
// state to the render function, providing even more flexibility and control over what 
// is rendered.Here's an example that demonstrates this extension:
import React, { useState } from 'react';

// A component that accepts a render prop and additional parameters
function RenderPropComponent(props) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      {props.render(count, increment)}
      <p>Current Count: {count}</p>
    </div>
  );
}

// Parent component that uses the RenderPropComponent
function App() {
  const renderFunction = (count, increment) => {
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
      </div>
    );
  };

  return (
    <div>
      <h1>Render Props Example</h1>
      <RenderPropComponent render={renderFunction} />
    </div>
  );
}

// In this extended example, the RenderPropComponent not only accepts a render function but also 
// provides additional parameters and component state.
// The component maintains a count state using the useState hook and provides an increment function to update the state.

// The parent component, App, defines the renderFunction that receives the count and increment as arguments. 
// It then renders a JSX that displays the count value and a button to trigger the increment function.

// By passing additional parameters and component state to the render function, you can have more dynamic 
// control over what is rendered.The render function can utilize the provided parameters and state to 
// customize the rendering logic based on various conditions or requirements.

// This extended usage of the Render Props pattern showcases its power and flexibility in sharing code and behavior 
// between components.It allows you to leverage the state and parameters from the parent component to drive the rendering 
// logic within the child component.
