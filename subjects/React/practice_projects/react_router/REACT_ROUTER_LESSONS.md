# React Router Learning Path 🛣️

> **Goal:** Master React Router with bite-sized, easy-to-understand lessons
>
> **Approach:** Short lessons (5-10 minutes each) to avoid overwhelm

---

## Progress Tracker

### **Phase 1: Foundation** 🌱

- [x] **Lesson 1:** What is React Router?

  - Understanding the concept of client-side routing

    1. The problem with traditional websites:

       - You click "About" or "Contact" and the browser loads an entire new page from the server.
       - Each click causes a full page refresh which is SLOW and JARRING UX.

    2. The React solution is to create a Single Page Application (SPA):
       - Where the entire app loads at ONCE.
       - Navigating to various sections causes react to SWAP components.
       - No page refreshes occur! MUCH FASTER and SMOOTH

  - Why we need React Router in single-page applications

    1. Without routing in React:
       -- The URL always stays the same!
       -- Cannot bookmark specific pages.
       -- Back button does not work.
       -- Can't share links to specific pages.

    ```jsx
    // This is what happens without React Router
    function App() {
      const [page, setPage] = useState("home");

      if (page === "home") return <Home />;
      if (page === "about") return <About />;
      // URL stays the same! Always shows: localhost:3000
    }
    ```

    2. WITH React Router:
       -- It syncs the URLs with specific components.
       -- Makes the back button work.
       -- URLs can be bookmarked.
       -- Enables link sharing.

    ```jsx
    <Routes>
      <Route path="/" element={<Home />} /> {/* localhost:3000 */}
      <Route path="/about" element={<About />} /> {/* localhost:3000/about */}
    </Routes>
    ```

    3. Real-world examples:
       -- Consider Gmail:
       ---> gmail.com/inbox shows the inbox.
       ---> gmail.com/sent shows the sent emails.
       ---> gmail.com/drafts shows the drafts.

  <------------------>

- [x] **Lesson 2:** Basic Setup

  - Installing React Router DOM
    **Step 1**

    - In the terminal run `npm install react-router-dom`
      -- What is react-router-dom?
      ==> The web version of React Router which contains the components we need (`BrowserRouter, Routes, Route`, etc)

  - Setting up BrowserRouter in your app
    **Step 2**

    - React Router MUST wrap the entire APP. It is the router manager that watches the URL changes.
    - All the code in the App.jsx needs to be wrapped inside a `BrowserRouter` component.

    ```jsx
    import { BrowserRouter } from "react-router-dom";
    import "./App.css";

    function App() {
      return (
        <BrowserRouter>
          {/*ALL the child elements inside the BrowserRouter has access to routing*/}
          <div>
            <h1> My React Router App</h1>
            <p> Routing setup complete!</p>
          </div>
        </BrowserRouter>
      );
    }

    export default App;
    ```

    **Step 3**: Test the App
    -- Save file
    -- run `npm start`
    -- visit localhost:server
    --\* The app should run normally with no errors! This means it worked.

    - The BrowserRouter:
      -- Listens to URL changes
      -- Provides the routing context for ALL child components
      -- Enables the browser's back and forward buttons
      -- Syncs your app with the browser's address bar

    - There are 2 common setup patterns:
      -- 1: Wrap in the App.jsx (as above)

      ```jsx
      function App() {
        return <BrowserRouter>{/* Your app content */}</BrowserRouter>;
      }
      ```

    -- 2: Wrap in index.jsx (alternative)

        ```jsx
        root.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
        );
        ```

    - Troubleshooting:
      --Errors:
      --> Module not found: Can't resolve 'react-router-dom'
      ---- The fix: run `npm install react-router-dom` again
      --> BrowserRouter is not defined
      ---- The fix: Check the `import` statement.

  <------------------>

- [x] **Lesson 3:** Your First Route

  - Creating a simple Home page route to understand the `Route` component.
    -- To create a Home page that shows when someone visits the main URL (/):

  1. Create a Home page COMPONENT (normal JSX with content as desired. Export it to you App.jsx)
     -- Example code:

     ```jsx
     function Home() {
       return (
         <div>
           <h1>Welcome to My Website!</h1>
           <p>This is the home page.</p>
         </div>
       );
     }

     export default Home;
     ```

  2. In the App.jsx, import the following:
     2.1 `BrowserRouter, Routes, Route`
     2.2 `Home` component
  3. Create the first Route:
     3.1 Nest `Routes` inside the `BrowserRouter` wrapper.
     3.2 Then nest `Route` inside the `Routes` container.
     3.3 INSIDE the `Route` component, use the `path` and `element` props.
     3.3.1 The `path` prop === the URL path, starting from the `/`, which represent the homepage (The ROOT URL)
     3.3.2 The `element` prop takes a value, which is the ACTUAL COMPONENT to render when the URL path matches.

  ```jsx
  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import Home from "./pages/Home";
  import "./App.css";

  function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    );
  }

  export default App;
  ```

  <=================================================================================================>

### **Phase 2: Core Routing** 🚀

- [x] **Lesson 4:** Multiple Routes

  - Adding About and Contact page routes
    **Step 1:** Create an About component:

  ```jsx
  function About() {
    return (
      <div>
        <h1>About Us 👥</h1>
        <p>We are a company that builds awesome React apps!</p>
        <p>Founded in 2023, we love helping people learn React Router.</p>
      </div>
    );
  }
  export default About;
  ```

  **Step 2:** Create an Contact component:

  ```jsx
  function Contact() {
    return (
      <div>
        <h1>Contact Us 📧</h1>
        <p>Get in touch with us!</p>
        <ul>
          <li>Email: hello@example.com</li>
          <li>Phone: (555) 123-4567</li>
          <li>Address: 123 React Street</li>
        </ul>
      </div>
    );
  }
  export default Contact;
  ```

  **Step 3:** Add multiple Routes to the App.jsx:

  ```jsx
  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import Home from "./pages/Home";
  import About from "./pages/About";
  import Contact from "./pages/Contact";
  import "./App.css";

  function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    );
  }

  export default App;
  ```

- Understanding the Routes component

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
```

-- How it works:

- React Router looks at the current URL and compares it to EACH `path`, from top-to-bottom.
- When it finds a match, it renders that `element`
- Only ONE route renders at a time.
  ** The browser back and forward buttons will now work.
  ** URLs that do not match a `path` renders nothing (no default has been set yet)

-- Key Rules:

1. Routes MUST match exactly -> /about only matches /about and not /about/team.
2. The Order matters -> Routes are checked from Top to Bottom.
3. Routes are case sensitive -> /About !==/about
4. Forward slash matters -> /about !== about

<------------------>

- [x] ## **Lesson 5:** Navigation Links
  -- Syntax for adding navigation:

**Step1:** Create a navigation component:

```jsx
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav style={{ padding: "20px", borderBottom: "1px solid #ccc" }}>
      <Link to="/" style={{ marginRight: "20px" }}>
        Home
      </Link>
      <Link to="/about" style={{ marginRight: "20px" }}>
        About
      </Link>
      <Link to="/contact" style={{ marginRight: "20px" }}>
        Contact
      </Link>
    </nav>
  );
}

export default Navigation;
```

**Step 2:** Add navigation to the App.jsx

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navigation />{" "}
      {/* Look at the placement of this Component. It is the `Routes` Sibling and NOT child */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

- Using `<Link>` component vs regular `<a>` tags

1. `<a> `tags:
   -- The browser makes a new HTTP request
   -- Server then send an entire HTML page
   -- JavaScript starts from scratch
   -- The app loses state, and this is slow.

2. `<Link>` tags:
   -- The React Router intercepts the click
   -- It updates the URL without a HTTP request
   -- Swaps components instantly
   -- This is fast and PRESERVES app STATE.

2.1 Important `<Link>` properties:

```jsx
// Basic link
<Link to="/about">About</Link>

// Link with custom styling
<Link to="/contact" style={{ color: 'blue' }}>
  Contact Us
</Link>

// Link with CSS classes
<Link to="/home" className="nav-link">
  Home
</Link>
```

- Navigation Best Practices:

1. ALways use <Link> for internal navigation.
2. Use <a> tags for external navigation.
3. Place Navigation OUTSIDE <Routes/> = Allows it to SHOW on EVERY page.
4. Keep navigation consistent accross pages.

<------------------>

- [x] **Lesson 6:** Active Links

- Using `<NavLink>` for navigation menus
  -- The problem with <Link> is that users cannot tell which page they are on!

1. The solution is to use <NavLink>: It works like link BUT automatically know when it is active (uses this with styling to highlight it).

**Step 1:** Replace all the `<Link>` with `<NavLink>`
**Step 2:** Make the active links look differnt by styling it.

```jsx
import { NavLink } from "react-router-dom";

function Navigation() {
  // Define styles for active and inactive links
  const linkStyle = {
    marginRight: "20px",
    textDecoration: "none",
    padding: "8px 16px",
    borderRadius: "4px",
  };

  const activeStyle = {
    ...linkStyle,
    backgroundColor: "#007bff",
    color: "white",
    fontWeight: "bold",
  };

  const inactiveStyle = {
    ...linkStyle,
    color: "#007bff",
  };

  return (
    <nav style={{ padding: "20px", borderBottom: "1px solid #ccc" }}>
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
      >
        Contact
      </NavLink>
    </nav>
  );
}

export default Navigation;
```

- Understanding how the `isActive` function.

```jsx
style={({ isActive }) => isActive ? activeStyle : inactiveStyle}
```

1. NavLink automatically passes an `isActive` boolean to your style function.
2. isActive is `true` when the current URL matches the Navlink's `to` prop, and `false` if it does not match.
3. You then return different styles based on the active state.

- An alternative approach is to use `className` with this logic and a CSS file for the styling:

```jsx
import { NavLink } from "react-router-dom";
import "./Navigation.css"; // This is the CSS File for the styles.

function Navigation() {
  return (
    <nav className="navigation">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Contact
      </NavLink>
    </nav>
  );
}

export default Navigation;
```

--The CSS file:

```jsx
.navigation {
  padding: 20px;
  border-bottom: 1px solid #ccc;
}

.nav-link {
  margin-right: 20px;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 4px;
  color: #007bff;
}

.nav-link.active {
  background-color: #007bff;
  color: white;
  font-weight: bold;
}

.nav-link:hover {
  background-color: #e3f2fd;
}
```

> > > Key Differences: Link vs NavLink

```
| Feature                       | `<Link>`      | `<NavLink>`      |
| ----------------------------- | ------------  | ---------------- |
| Basic navigation              | ✅           | ✅               |
| Knows when active             | ❌           | ✅               |
| Auto styling for active state | ❌           | ✅               |
| Best for                      | Content links | Navigation menus |
```

<------------------>

- [x] **Lesson 7:** 404 Pages

- Using the catch-all route pattern

1. Define a NotFound.jsx component that has some basic info about not being on the right page.
2. Include a <Link> element to redirect back to `<Home>` component with the `to` prop set equal to `/`.
3. The `path` for the NotFound Route is a `*`

- Understanding the Catch-All Route:

```jsx
<Route path="*" element={<NotFound />} />
```

1. The `*` wildcard:
   1.1 Matches ANY URL that does not match any previous routes.
   1.2 Always placed at THE BOTTOM of the routes (order matters! === Routes are checked from Top to Bottom)
   1.3 Act as the "fallback" route
   1.4 Provides a better UX than a blank page with no info.

2. Common 404 Page Features to consider including:
   2.1 Clear error message (404 - Page Not Found)
   2.2 Helpful explaination (What might have happened)
   2.3 Navigation back to safety! (Home `<Link>`)
   2.4 Search functionality (for larger sites)
   2.5 Popular pages `<Link>'s` (for better UX)

3. Advnced 404 Patterns:

```jsx
// Basic catch-all
<Route path="*" element={<NotFound />} />

// 404 with layout (future lesson!)
<Route path="*" element={<Layout><NotFound /></Layout>} />

// Different 404s for different sections
<Routes>
  <Route path="/blog/*" element={<BlogNotFound />} /> {/*Look at how the wildcard is constructed*/}
  <Route path="*" element={<GeneralNotFound />} />
</Routes>
```

<=================================================================================================>

### **Phase 3: Dynamic Routing** ⚡

- [ ] **Lesson 8:** URL Parameters

- Creating routes with parameters like `/user/:id`

  1. Create a component for a user.
  2. import and use the useParams function that returns an `id`

  ```jsx
  import { useParams } from "react-router-dom";

  function UserProfile() {
    const { id } = useParams();

    return (
      <div style={{ padding: "20px" }}>
        <h1>User Profile 👤</h1>
        <div
          style={{
            background: "#f0f8ff",
            padding: "15px",
            borderRadius: "5px",
            marginTop: "20px",
          }}
        >
          <h2>User ID: {id}</h2>
          <p>
            This is the profile page for user with ID: <strong>{id}</strong>
          </p>
          <p>In a real app, you'd fetch user data from an API using this ID!</p>
        </div>
      </div>
    );
  }

  export default UserProfile;
  ```

  3. Use Dyanamic `path` values with `:` after the forward stroke for different users/items/etc:

  ```jsx
  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import Navigation from "./components/Navigation";
  import Home from "./pages/Home";
  import About from "./pages/About";
  import Contact from "./pages/Contact";
  import UserProfile from "./pages/UserProfile";
  {
    /*This is the component for the Dynamic route*/
  }
  import NotFound from "./pages/NotFound";
  import "./App.css";

  function App() {
    return (
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:id" element={<UserProfile />} /> {/*This is the  Dynamic route*/}
          <Route path="\*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );
  }

  export default App;
  ```

  3.  Testing:
      3.1 Try these URLs in your browser:
      3.1.1 localhost:3000/user/123 → Shows "User ID: 123"
      3.1.2 localhost:3000/user/alice → Shows "User ID: alice"
      3.1.3 localhost:3000/user/john-doe → Shows "User ID: john-doe"
      3.1.4 localhost:3000/user/999 → Shows "User ID: 999"

- Understanding dynamic route patterns:

```jsx
<Route path="/user/:id" element={<UserProfile />} />
```

1. The `:id` syntax:
   1.1 `:id` is a parameter placeholer (this can be named anything)
   1.2 It captures whatever comes after `/user/`
   1.3 The captures value is then available in your component through the `useParams()`method.
   1.3.1 You must use "Object destructuring" to access it.

2. Mutiple parameters can be obtained from ONE route:

```jsx
// Route with multiple parameters
<Route path="/user/:userId/post/:postId" element={<UserPost />} />;

// Component accessing multiple parameters
function UserPost() {
  const { userId, postId } = useParams();

  return (
    <div>
      <h1>
        Post {postId} by User {userId}
      </h1>
    </div>
  );
}
```

2.1 Example URLs for the above:
-- `/user/123/post/456` → userId: "123", postId: "456"
-- `/user/alice/post/hello-world` → userId: "alice", postId: "hello-world"

3. Common Parameter Patterns:

```jsx
// User profiles
<Route path="/user/:username" element={<UserProfile />} />

// Product pages
<Route path="/product/:productId" element={<Product />} />

// Blog posts
<Route path="/blog/:slug" element={<BlogPost />} />

// Categories with items
<Route path="/category/:categoryId/item/:itemId" element={<Item />} />
```

4. You can add navigation links in the app that has a `path` to the `/user/:id` such as `/user/alice`.
   -- When this link is clicked, it routes to user URL and adds the unique id.

5. Key Rules:
   -- Parameters are ALWAYS strings.
   -- Parameter names can be ANYTHING (:id, :username, :slug)
   -- Parameters are required (route will not match without them)
   -- Parameters can contain letters, numbers, hyphens, underscores.
   <------------------>

- [ ] **Lesson 9:** Reading Parameters

- NOTE: Explained through examples by building out a UserProfile.jsx page with mock data.

- Understanding the `useParams()` hook
  ```jsx
  const { id } = useParams();
  ```

1. useParams() returns:
   -- an Object containing all the URL parameters
   -- These parameter values are always strings
   -- if no paramter exists, it returns an empty object.
   --- used in components to access the parameters.

- Real-World useParams() Patterns:

1. Type Checking and Validation

```jsx
function UserProfile() {
  const { id } = useParams();

  // Validate parameter
  if (!id || id.trim() === "") {
    return <div>Invalid user ID</div>;
  }

  // Use the parameter...
}
```

2. Converting String Params:

```jsx
function ProductPage() {
  const { productId } = useParams();

  // Convert to number if needed
  const numericId = parseInt(productId, 10);

  if (isNaN(numericId)) {
    return <div>Invalid product ID</div>;
  }

  // Use numericId...
}
```

3. Using Params for API Calls:

```jsx
function UserProfile() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // In a real app, you'd fetch from an API
    fetch(`/api/users/${id}`)
      .then((response) => response.json())
      .then((userData) => setUser(userData));
  }, [id]); // Re-fetch when ID changes

  // Render user...
}
```

- Common mistakes:

```jsx
// ❌ Forgetting parameters are strings
const { id } = useParams();
if (id === 123) {
  /* This will never be true! */
}

// ✅ Correct string comparison
const { id } = useParams();
if (id === "123") {
  /* This works! */
}

// ❌ Not handling missing parameters
const { id } = useParams();
const user = users[id]; // Could be undefined!

// ✅ Proper error handling
const { id } = useParams();
const user = users[id];
if (!user) {
  return <div>User not found</div>;
}
```

- Best Practices:
  -- Always validate parameters before using them
  -- Handle missing/invalid parameters gracefully
  -- Remember parameters are strings - convert if needed
  -- Use descriptive parameter names (:userId not :id)
  -- Consider URL-friendly formats (kebab-case, no spaces)
  <------------------>

- [ ] **Lesson 10:** Nested Routes

- Creating routes inside other routes
- Building hierarchical navigation

<=================================================================================================>

### **Phase 4: Advanced Features** 🎯

- [ ] **Lesson 11:** Programmatic Navigation

- Using the `useNavigate()` hook
- Redirecting users after form submissions

<------------------>

- [ ] **Lesson 12:** Route Protection

- Basic authentication routing
- Protecting pages that require login

<------------------>

- [ ] **Lesson 13:** Layout Components

- Creating shared headers and footers
- Using Outlet for nested route content

<=================================================================================================>

### **Phase 5: Practice** 🏆

- [ ] **Lesson 14:** Mini Project

- Building a complete multi-page app
- Putting all concepts together

<=================================================================================================>

---

## Learning Notes 📝

### Key Concepts to Remember:

- React Router enables client-side routing (no page refreshes)
- `<Link>` and `<NavLink>` are better than `<a>` tags
- Routes are matched from top to bottom
- URL parameters make routes dynamic
- Nested routes create hierarchical structures

### Common Patterns:

```jsx
// Basic route structure
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

---

## Quick Reference 🔍

### Essential Components:

- `BrowserRouter` - Wraps your entire app
- `Routes` - Container for all routes
- `Route` - Defines a single route
- `Link` - Navigation without page refresh
- `NavLink` - Link with active state styling

### Essential Hooks:

- `useParams()` - Get URL parameters
- `useNavigate()` - Programmatic navigation
- `useLocation()` - Get current location info

---

## Next Steps 🎯

After completing all lessons:

- [ ] Review the concepts that felt challenging
- [ ] Build a personal project using React Router
- [ ] Explore React Router documentation for advanced features

---

**Ready to start?** Ask for "Lesson 1" when you're ready to begin! 🚀

_Remember: Take your time with each lesson. It's better to understand one concept well than to rush through multiple concepts._
