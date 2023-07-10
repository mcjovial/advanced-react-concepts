// Server-side rendering (SSR) in React refers to the process of rendering React components 
// on the server and sending the pre - rendered HTML to the client.This approach improves performance 
// by reducing the time to first render and enhances search engine optimization(SEO) since search 
// engine bots can crawl the pre - rendered HTML content.

// To implement SSR in React, you typically need a server-side rendering framework, such as Next.js or Razzle. 
// Here's an example using Next.js:
function Home({ serverRenderedData }) {
  return (
    <div>
      <h1>Server-Side Rendering Example</h1>
      <p>This content is rendered on the server.</p>
      <p>Server-rendered data: {serverRenderedData}</p>
    </div>
  );
}

export async function getServerSideProps() {
  // Simulate fetching data from an API
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();

  return {
    props: {
      serverRenderedData: data,
    },
  };
}

export default Home;

// In this example, we define a functional component Home that represents the homepage. 
// It receives the serverRenderedData as a prop, which is fetched during the server - side rendering process.

// The getServerSideProps function is a special Next.js function that runs on the server before rendering the page. 
// Inside this function, you can perform data fetching or any other server - side logic.In this example, 
// we simulate fetching data from an API and return it as a prop.

// With Next.js, server-side rendering is seamlessly integrated into the framework. 
// The getServerSideProps function allows you to fetch data and perform server - side logic before rendering the page on the server.
// This enables you to deliver pre - rendered content to the client, improving performance and SEO.

// Next.js also provides other features and optimizations, such as static site generation (SSG) and client-side rendering (CSR), 
// making it a powerful framework for building React applications with various rendering strategies.