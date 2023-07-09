// Portals in React provide a way to render child components outside of their parent DOM hierarchy. 
// This allows components to render content into a different part of the DOM while still maintaining 
// the logical parent - child relationship within the React component tree.

// Here's an example that illustrates the usage of portals:
import React from 'react';
import ReactDOM from 'react-dom';

// Modal component using portal
function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-content">{children}</div>
    </div>,
    document.getElementById('modal-root')
  );
}

// Parent component that renders the modal using portal
function App() {
  return (
    <div>
      <h1>Portal Example</h1>
      <Modal>
        <h2>This content is rendered in a portal!</h2>
        <p>It is rendered outside of the parent component's DOM hierarchy.</p>
      </Modal>
      <div className="other-content">
        <p>This content is part of the parent component's DOM hierarchy.</p>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// In this example, the Modal component is created to demonstrate the usage of portals. 
// It uses the ReactDOM.createPortal method to render its children into a separate DOM node with the id modal - root.
// The content within the Modal component is rendered outside the parent component's DOM hierarchy, 
// allowing it to be displayed in a modal - like structure.

// The App component acts as the parent component and renders the Modal component using the portal. 
// The Modal component's content, including the <h2> and <p> elements, is rendered within the Modal 
// component but displayed outside the parent component's DOM hierarchy.

// By using portals, you can render components into different parts of the DOM while keeping their 
// logical relationships intact within the React component tree.Portals are particularly useful for 
// scenarios like modals, tooltips, or any other situation where you need to render content outside 
// of the parent's DOM structure but still want to manage it within the parent component.