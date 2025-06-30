// Note: This file is for manual testing of the JSX formatter extension
// React import would be needed in a real project, but for testing we'll use a mock
const React = { Fragment: ({ children }: any) => children };

// Custom components for testing
const Header = ({ title }: { title: string }) => <h1>{title}</h1>;
const Button = ({ children, ...props }: any) => <button {...props}>{children}</button>;
const Card = ({ children }: { children?: any }) => <div className="card">{children}</div>;

const ManualTestComponent = () => {
  return (
    <div className="app">
      {/* Test 1: Basic sibling elements without spacing */}
      <div>Basic siblings test:</div>
      <Header title="Welcome" />
      <p>This is a paragraph</p>
      <Button>Click me</Button>
      <span>Some text</span>

      {/* Test 2: Nested components with siblings */}
      <section>
        <h2>Nested Test</h2>
        <Card>
          <p>Card content 1</p>
          <p>Card content 2</p>
          <Button>Card Button</Button>
        </Card>
        <Card>
          <h3>Another Card</h3>
          <p>More content</p>
        </Card>
      </section>

      {/* Test 3: Mixed JSX and conditional rendering */}
      <div className="conditional-section">
        <h2>Conditional Rendering Test</h2>
        {true && <p>This should show</p>}
        {false && <p>This should not show</p>}
        <div>Always visible</div>
        {/* Comment between elements */}
        <Button>After comment</Button>
      </div>

      {/* Test 4: List items and mapping */}
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      <div>After list</div>

      {/* Test 5: Form elements */}
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />
        <Button type="submit">Submit</Button>
      </form>

      {/* Test 6: Self-closing tags */}
      <img src="test.jpg" alt="Test" />
      <br />
      <hr />
      <input type="text" placeholder="Self-closing input" />

      {/* Test 7: Complex nesting with multiple levels */}
      <div className="complex">
        <header>
          <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>
        </header>
        <main>
          <article>
            <h1>Article Title</h1>
            <p>Article content goes here.</p>
            <footer>
              <small>Published: 2024</small>
            </footer>
          </article>
          <aside>
            <h3>Related Links</h3>
            <ul>
              <li><a href="/link1">Link 1</a></li>
              <li><a href="/link2">Link 2</a></li>
            </ul>
          </aside>
        </main>
      </div>

      {/* Test 8: JSX expressions and fragments */}
      <>
        <div>Fragment test</div>
        <p>Inside fragment</p>
      </>
      <React.Fragment>
        <span>React.Fragment test</span>
        <em>More fragment content</em>
      </React.Fragment>

      {/* Test 9: Already properly formatted (should remain unchanged) */}
      <div>Already formatted:</div>

      <p>This has proper spacing</p>

      <Button>This button too</Button>

      <span>And this span</span>

      {/* Test 10: Inline elements vs block elements */}
      <div>
        <span>Inline 1</span><span>Inline 2</span><span>Inline 3</span>
      </div>
      <p>Block element 1</p>
      <p>Block element 2</p>

      {/* Test 11: JSX with JavaScript expressions */}
      <div>{new Date().toLocaleDateString()}</div>
      <p>Current time: {new Date().toLocaleTimeString()}</p>
      <Button onClick={() => alert('Clicked!')}>Interactive Button</Button>

      {/* Test 12: Empty elements and whitespace handling */}
      <div></div>
      <p></p>
      <span>   </span>
      <div>Content after empty elements</div>
    </div>
  );
};

// Another component for testing
const AnotherTestComponent = () => (
  <div>
    <h1>Another Test Component</h1>
    <p>Testing in a different component structure</p>
    <div>
      <span>Nested content</span>
      <em>More nested content</em>
      <strong>Even more content</strong>
    </div>
    <footer>Footer content</footer>
  </div>
);

export { ManualTestComponent, AnotherTestComponent }; 