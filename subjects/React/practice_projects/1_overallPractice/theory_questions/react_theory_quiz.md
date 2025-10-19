# React Theory Practice Questions 🎓

> 💡 **Learning Tip:** This quiz has 35 questions across 5 sections. Don't try to do them all at once! Take breaks between sections and aim for 5-7 questions per study session for the best learning experience.

## Section 1: Virtual DOM (5 Questions)

> 📚 **Section Focus:** Understanding React's core optimization strategy and how it improves performance.

### Q1. What is the Virtual DOM and why is it important?

**Answer the following:**

- What problem does the Virtual DOM solve?
  A - The slow update process of the regular DOM. The regular DOM updates the entire page each time which is slow and creates a bad user experience, especially when rapid updates are needed.
- How does React use the Virtual DOM to optimize performance?
  A - The virtual DOM!==real DOM. It is a copy. React takes a snapshot of the previous version of the real DOM when an update is made. It then compares that snapshot with the snapshot of the DOM after the update. Based on this, it determines which elements changes and then only effect changes to that specific element on the real DOM.
- What happens during the "reconciliation" process?
  NOTE: A - Reconciliation is React's process of comparing (DIFFING) the new Virtual DOM tree with the previous one, identifying what changed, and UPDATING only those specific nodes in the real DOM.

### Q2. Compare Virtual DOM vs Real DOM

**Fill in the comparison table:**

| Aspect              | Virtual DOM          | Real DOM                 |
| ------------------- | -------------------- | ------------------------ |
| Performance         | \***\*\FAST\*\***    | \***\*\SLOW\*\***        |
| Memory Usage        | \***\*\Minimal\*\*** | \***\*\Large\*\***       |
| Update Speed        | \***\*\Rapid\*\***   | \***\*\Can be slow\*\*** |
| Direct Manipulation | \***\*\No\*\***      | \***\*\Yes\*\***         |

### Q3. Virtual DOM Workflow

**Order these steps (1-5) in the correct Virtual DOM update process:**

- [3] Compare new Virtual DOM tree with previous Virtual DOM tree
- [5] Apply minimal changes to Real DOM
- [1] State change triggers re-render
- [2] Create new Virtual DOM tree
- [4] Calculate differences (diffing algorithm)

### Q4. True/False - Virtual DOM Concepts

- [x] T/F: Virtual DOM is faster than Real DOM in all scenarios
- [x] T/F: Virtual DOM is a JavaScript representation of the Real DOM
- [F] T/F: React updates the entire Real DOM on every state change
- [T] T/F: Virtual DOM helps with predictable UI updates

### Q5. Scenario Question

**You have a list of 1000 items, and only 1 item changes. Explain how the Virtual DOM handles this update efficiently compared to directly manipulating the Real DOM.**

- It creates a new virtual DOM tree and compares it with a snapshot it took from the previous version.
- It then compares the differences, finds the exact changes, and only updates those elements.
- This is better than updating the real DOM as it would re-render the entire list of 1000 items, instead of just the 1 that changed.
- Since it uses lightweight copies to perform diffing, the virtual DOM is much faster to compare and update the DOM. It is also less resource hungry.
- React uses keys to very efficiently identify which specific item changed in a list.

---

### ✅ **Section 1 Checkpoint**

**Pause here and review your understanding:**

- Can you explain what the Virtual DOM is in your own words?
- Do you understand why React uses this approach?
- Are you comfortable with the reconciliation process?

**If you answered "yes" to all three, continue to Section 2. If not, review the concepts before moving forward.**

---

## Section 2: JSX (8 Questions)

> 📚 **Section Focus:** Mastering React's syntax, expressions, and JSX patterns.

### Q6. JSX Fundamentals

**What does this JSX code compile to?**

```jsx
const element = <h1 className="greeting">Hello, World!</h1>;
```

Write the equivalent `React.createElement()` call:
A - React.createElement('h1', { className: 'greeting' }, 'Hello, World!')
-- JSX is syntactic sugar for React.createElement() calls
-- The pattern is: React.createElement(type, props, children)
-- Your answer mixed up rendering with element creation

### Q7. JSX Rules

**Identify what's wrong with this JSX and fix it:**

```jsx
function BadComponent() {
  return (
    <div>
      <h1>Welcome</h1>
      <p>This is a paragraph</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
```

A - It did not have a single outermost element. Also removed the parenthesis from the eventHandler to prevent it calling immediately.

### Q8. Expressions in JSX

**What will be rendered for each expression?**

```jsx
const name = "Alice";
const age = 25;
const isStudent = true;
const courses = ["React", "JavaScript", "CSS"];

// What renders?
{
  name;
} // Result: __Alice_______
{
  age > 18 ? "Adult" : "Minor";
} // Result: ____Adult_____
{
  isStudent && "Student";
} // Result: ____Student_____
{
  courses.length;
} // Result: ___3______
```

### Q9. Conditional Rendering Patterns

**Complete these conditional rendering patterns:**

```jsx
// Pattern 1: Ternary operator
{
  isLoggedIn ? "welcome" : "Login failed";
}

// Pattern 2: Logical AND
{
  showMessage && "Message to show";
}

// Pattern 3: Logical OR (default values)
{
  userName || "Guest";
}

// Pattern 4: Multiple conditions
{
  {
    isAdmin
      ? "Welcome admin"
      : isModerator
      ? "Welcome moderator"
      : "Welcome user";
  }
  // Explained: The structure should be: condition1 ? result1 : condition2 ? result2 : fallback
}
```

### Q10. Arrays and Keys

**What's wrong with this list rendering? Provide the corrected version:**

```jsx
const items = ["apple", "banana", "orange"];
return (
  <ul>
    {items.map((item, index) => {
      return <li key={index}>{item}</li>;
    })}
  </ul>
);
```

A :
-- The "issue" many developers worry about:
--- Using index as key can cause problems when list order changes
--- However, for static lists that don't reorder, index keys are acceptable
--- Better practice: use unique IDs when available

### Q11. Event Handlers in JSX

**Complete the event handler patterns:**

```jsx
// Inline function
<button onClick={(e)=> alert(`The button was clicked`)}>Click me</button>

// Function reference
<button onClick={handkeClick}>Click me</button>

// Function with parameters
<button onClick={()=> handleClick(itemId)}>Delete Item</button>

// Form submission
<form onSubmit={handleSubmit}>
```

### Q12. JSX Attributes

**Convert these HTML attributes to JSX:**

```html
<!-- HTML -->
<div class="container" for="email" tabindex="0"></div>
<label for="email">Email:</label>
<input type="text" readonly />
```

```jsx
{/* JSX */}
<div className="container" htmlFor="email" tabIndex="0"></div>
<label htmlFor="email">Email:</label>
<input type="text" readOnly />
```

### Q13. JSX Best Practices

**Rate these practices as Good ✅ or Bad ❌ and explain why:**

- [Bad] Using index as key in lists: \***\*\Can cause rendering bugs when list order changes. React can't efficiently track which items changed\*\***
- [Bad] Inline styles in JSX: \***\*\Quickly becomes messy and hard to track when multiple styles are needed.\*\***
- [Bad] Arrow functions in render: \***\*\Creates new function on every render. Can cause unnecessary re-renders\*\***
- [Good] Fragment shorthand `<></>`: \***\*\Lightweight and removes the need to style a div but provides an outermost parent element\*\***

---

### ✅ **Section 2 Checkpoint**

**Pause here and review your understanding:**

- Can you write JSX confidently with proper syntax?
- Do you understand expressions and conditional rendering in JSX?
- Are you comfortable with event handlers and attributes?

**If you're feeling confident, continue to Section 3. If JSX still feels tricky, practice writing some simple components before moving on.**

---

## Section 3: React Components (7 Questions)

> 📚 **Section Focus:** Building and organizing functional components with proper state management.

### Q14. Component Types

**Complete the component conversion:**

```jsx
// Convert this functional component to use proper React syntax
function Welcome() {
  const [name, setName] = useState("");

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
}
```

### Q15. useState Hook

**Analyze this useState usage:**

```jsx
const [count, setCount] = useState(0);
const [user, setUser] = useState({ name: "", age: 0 });
const [items, setItems] = useState([]);
```

**Answer:**

- What is the initial state for each variable?
  A -
  count = 0
  user = { name: "", age: 0 }
  items = []
- How would you update `count` by 1?
  A - setCount(prev=> prev +1)
- How would you update only the user's name?
  A - setUser(prev => ({...prev, name:'New User Name'}))
- How would you add an item to the `items` array?
  A - setItems(prev => [...prev, newItem])

### Q16. State Management Scenarios

**Choose the correct state update for each scenario:**

Scenario A: Toggle a boolean

```jsx
const [isVisible, setIsVisible] = useState(false);
// Correct way to toggle:
a) setIsVisible(!isVisible)
b) setIsVisible(prev => !prev)
//b is correct - This is the correct answer. The next state is based on the previous state and prevent using outdated state
c) Both are correct
d) Neither is correct
```

Scenario B: Update object property

```jsx
const [user, setUser] = useState({ name: 'John', age: 30 });
// Correct way to update only age:
a) setUser({ age: 31 })
b) setUser({ ...user, age: 31 })
//b is correct - you copy the original and replace only the needed property.
c) user.age = 31; setUser(user)
d) setUser(prev => prev.age = 31)
```

### Q17. Component Lifecycle with Hooks

**Match the Class Component lifecycle methods with their Hook equivalents:**

| Class Component       | Hook Equivalent                           |
| --------------------- | ----------------------------------------- | ----------------------- |
| componentDidMount     | \***\*\useEffect(()=>{},[])\*\***         |
| componentDidUpdate    | \***\*\useEffect(()=>{})\*\***            |
| componentWillUnmount  | \***\*\useEffect() cleanup function\*\*** |
| shouldComponentUpdate | \***\*\useMemo()\*\***                    | //I don't know this yet |

### Q18. Form Handling

**Complete this controlled component:**

```jsx
function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.value]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handlChange} />
      <input name="email" value={formData.email} onChange={handlChange} />
      <input name="message" value={formData.message} onChange={handlChange} />
    </form>
  );
}
```

### Q19. Conditional Rendering Logic

**What will render in each case?**

```jsx
const isLoggedIn = false;
const user = null;
const items = [];

// Case 1:
{
  isLoggedIn ? <Dashboard /> : <Login />;
}
// Renders: <Login />

// Case 2:
{
  user && <Profile user={user} />;
}
// Renders: Nothing is rendered

// Case 3:
{
  items.length > 0 && <ItemList items={items} />; //Note to me: Use this logic for the playlist rendering in the music app
}
// Renders: nothing is rendered

// Case 4:
{
  items.length ? <ItemList items={items} /> : <EmptyState />;
}
// Renders: <EmptyState />
```

### Q20. Component Composition

**Design a component hierarchy for a blog post:**

```
BlogPost (parent)
├── BlogHeader
│   ├── Title
│   ├── Author
│   └── PublishDate
├── BlogContent
│   ├── Paragraph
│   ├── Image
│   └── CodeBlock
└── BlogFooter
    ├── Tags
    ├── LikeButton
    └── ShareButtons
```

**Which components need props? What props would they receive?**
Answer:

```
BlogPost (props: post object with all data)
├── BlogHeader (props=title, author, publishInfo)
     ├── Title
     ├── Author
     └── PublishDate
├── BlogContent (props=content, image)
     ├── Paragraph
     ├── Image
     └── CodeBlock
└── BlogFooter (props: tags, likeCount, onLike, onShare)
    ├── Tags
    ├── LikeButton
    └── ShareButtons
```

---

### ✅ **Section 3 Checkpoint**

**Pause here and review your understanding:**

- Are you comfortable creating functional components?
- Do you understand useState and how to manage component state?
- Can you plan component hierarchies and props flow?

**This is a good time for a longer break! Grab some coffee ☕ and continue when you're ready for component interaction patterns.**

---

## Section 4: Component Interaction & Props (6 Questions)

> 📚 **Section Focus:** Understanding how components communicate and share data.

### Q21. Props Flow

**Trace the data flow in this component tree:**

```jsx
function App() {
  const [users, setUsers] = useState([]);
  return <UserList users={users} onUserSelect={handleUserSelect} />;
}

function UserList({ users, onUserSelect }) {
  return (
    <div>
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          onClick={() => onUserSelect(user.id)}
        />
      ))}
    </div>
  );
}

function UserCard({ user, onClick }) {
  return (
    <div onClick={onClick}>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
}
```

**Questions:**

- What props does `UserList` receive?
  A - users (an array of objects)
  A - onUserSelect (an eventHandler function)
- What props does `UserCard` receive?
  A - user (an object)
  A - onClick (the event handler with the userId as a param)
- How does data flow from App to UserCard?
  A - The data is flowing unidirectionally, from the parent down.
- How does user interaction flow back to App?
  A - through each prop that it was initially passed down on - in reverse. (from userCard to userList and then App)

### Q22. State Lifting

**You have two sibling components that need to share data. Where should the state live and why?**

```
Parent
├── ComponentA (needs to display total)
└── ComponentB (needs to update total)
```

**Answer:**

- Where should the `total` state be placed?
  A - in the parent as it will be the source of truth for the state and then the children get the state via props (ensures it is always the same)
- How will ComponentA access the total?
  A - with the state variable passed to it via props
- How will ComponentB update the total?
  A - with the setter function passed to it via props
- What props need to be passed down?
  A - componentA gets the state variable and componentB gets the setter function

### Q23. Props Validation

**Add appropriate prop validation:**

```jsx
import PropTypes from "prop-types";

function ProductCard({ name, price, isOnSale, tags, onAddToCart }) {
  // Component implementation
}

// Add PropTypes validation:
ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  isOnSale: PropTypes.bool,
  tags: PropTypes.array,
  onAddToCart: PropTypes.func,
};

ProductCard.defaultProps = {
  isOnSale: false,
  tags: [],
};
```

> PropTypes Lesson:

1. What are PropTypes?
   -- It is used to check whether a component receives the right type of data.
   -- Helps to catch bugs: They warn you in development if you pass wrong data types!

2. How to use it:
   -- import `PropTypes from 'prop-types` at the top of the file.
   -- Define your component as usual.
   -- After the component, in the same file, add the a validation.
   -- You can also set default props, after the component, for any optional items.

3. Syntax:
import PropTypes from 'prop-types'

function ComponentName({name, age, isActive}){
return <div>{name} is {age} years old.</div>
};

ComponentName.propTypes = {
name: PropTypes.string.isRequired,
age: PropTypes.number.isRequired,
isActive: PropTypes.bool
};

ComponentName.defaultProps = {
isActive: false
};

4. Common PropTypes:
   -- PropTypes.string - text
   -- PropTypes.number - numbers
   -- PropTypes.bool - true/false
   -- PropTypes.array - lists
   -- PropTypes.func - functions
   -- PropTypes.object - objects

### Q24. Component Communication Patterns

**Match the communication pattern with the correct scenario:**

| Pattern      | Scenario       |
| ------------ | -------------- |
| Props down   | \***\*\C\*\*** |
| Callbacks up | \***\*\B\*\*** |
| Context API  | \***\*\A\*\*** |
| Custom hooks | \***\*\D\*\*** |

Scenarios:
A) Sharing theme data across entire app
B) Child component notifying parent of click
C) Parent passing data to child
D) Sharing logic between components

### Q25. Render Props Pattern

**Complete this render prop implementation:**

```jsx
function DataFetcher({ url, render }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [url]);

  return render(data, loading);
}

// Usage:
<DataFetcher url="/api/users" render={(data, loading) => loading ? <div>Loading...</div>} : <UserList users={data}/>;
```

### Q26. Key Prop Understanding

**Explain what happens in each scenario:**

Scenario A: Using array index as key

```jsx
{
  items.map((item, index) => <Item key={index} data={item} />);
}
```

Scenario B: Using unique ID as key

```jsx
{
  items.map((item) => <Item key={item.id} data={item} />);
}
```

**When you delete the first item from the array:**

- What happens with index keys?
  A - All the indexes change as indexes are zero indexed. SO there is always going to be an index 0 for example.
  A - this is not good. The indexes can change and React will not know which elements have changed it index
- What happens with ID keys?
  A - best practice as it allows react to instantly make changes when changes are made to the specific item
- Which is better and why?
  A - unique keys as it allows react to instantly make changes when changes are made to the specific item

> Keyin React Lesson:

1. What are keys?
   -- Keys help React identify which items in a LIST have changed, been added, or removed.

2. Problem with using indexes as the keys:
   -- When any item in an array or object is deleted or added, it shifts the indexes for the remaining items.
   -- Since the indexes shift, react does not know that an item was removed and will think that an item changed.
   -- It thus causes rendering bugs.

3. Solution = use UNIQUE id values as the keys.
   -- use the id property in objects as the key as this does not change, like the index would.

---

### ✅ **Section 4 Checkpoint**

**Pause here and review your understanding:**

- Do you understand how data flows between components?
- Are you comfortable with props and callback patterns?
- Can you design component communication strategies?

**Almost there! One more section focusing on the powerful hooks you'll use constantly.**

---

## Section 5: Hooks (useState & useEffect) (9 Questions)

> 📚 **Section Focus:** Mastering React's most essential hooks for state and side effects.

### Q27. useState Patterns

**Complete these useState patterns:**

```jsx
// Counter with increment/decrement
const [count, setCount] = useState(0);
const increment = () => setCount(_________);
const decrement = () => setCount(_________);

// Toggle boolean
const [isOpen, setIsOpen] = useState(false);
const toggle = () => setIsOpen(_________);

// Array operations
const [items, setItems] = useState([]);
const addItem = (item) => setItems(_________);
const removeItem = (id) => setItems(_________);

// Object updates
const [user, setUser] = useState({ name: "", email: "" });
const updateName = (name) => setUser(_________);
```

### Q28. useEffect Dependencies

**For each useEffect, what will happen?**

```jsx
// Effect A
useEffect(() => {
  console.log("Effect A runs");
});

// Effect B
useEffect(() => {
  console.log("Effect B runs");
}, []);

// Effect C
useEffect(() => {
  console.log("Effect C runs");
}, [count]);

// Effect D
useEffect(() => {
  console.log("Effect D runs");
}, [count, user.name]);
```

**When does each effect run?**

- Effect A: \***\*\_\*\***
- Effect B: \***\*\_\*\***
- Effect C: \***\*\_\*\***
- Effect D: \***\*\_\*\***

### Q29. useEffect Cleanup

**Add appropriate cleanup to these effects:**

```jsx
// Timer effect
useEffect(() => {
  const timer = setInterval(() => {
    setCount((c) => c + 1);
  }, 1000);

  return _________; // Add cleanup
}, []);

// Event listener effect
useEffect(() => {
  const handleScroll = () => setScrollY(window.scrollY);
  window.addEventListener("scroll", handleScroll);

  return _________; // Add cleanup
}, []);

// Fetch with abort controller
useEffect(() => {
  const controller = new AbortController();

  fetch("/api/data", { signal: controller.signal })
    .then((res) => res.json())
    .then(setData);

  return _________; // Add cleanup
}, []);
```

### Q30. useEffect Best Practices

**Rate these practices as Good ✅ or Bad ❌:**

- [ ] Missing dependencies in dependency array
- [ ] Using async function directly in useEffect
- [ ] Multiple useEffect hooks for different concerns
- [ ] Updating state in useEffect without dependencies
- [ ] Using empty dependency array for one-time effects

### Q31. State Batching

**What will be the final count value after clicking the button?**

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  return <button onClick={handleClick}>Count: {count}</button>;
}
```

**After clicking once, count will be: \*\***\_**\*\***

**How would you fix this to increment by 3?**

```jsx
const handleClick = () => {
  _________;
  _________;
  _________;
};
```

### Q32. Complex State Updates

**Complete this shopping cart reducer pattern with useState:**

```jsx
function ShoppingCart() {
  const [cart, setCart] = useState({ items: [], total: 0 });

  const addItem = (product) => {
    setCart((prevCart) => ({
      items: _________,
      total: _________,
    }));
  };

  const removeItem = (productId) => {
    setCart((prevCart) => {
      const newItems = _________;
      return {
        items: newItems,
        total: _________,
      };
    });
  };

  const updateQuantity = (productId, quantity) => {
    setCart((prevCart) => ({
      items: _________,
      total: _________,
    }));
  };
}
```

### Q33. useEffect Infinite Loops

**Identify which effects will cause infinite loops and fix them:**

```jsx
// Effect 1
const [user, setUser] = useState({});
useEffect(() => {
  setUser({ ...user, lastSeen: Date.now() });
}, [user]); // Problem? _________

// Effect 2
const [data, setData] = useState([]);
useEffect(() => {
  if (data.length === 0) {
    fetchData().then(setData);
  }
}, [data]); // Problem? _________

// Effect 3
useEffect(() => {
  const fetchUserData = async () => {
    const result = await api.getUser();
    setUser(result);
  };
  fetchUserData();
}, []); // Problem? _________
```

### Q34. Custom Hook Logic

**Extract this logic into a custom hook:**

```jsx
// Component using the logic
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/users/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [userId]);

  return { user, loading, error };
}

// Create custom hook:
function useUser(userId) {
  // Move the logic here
  _________;
}
```

### Q35. Hook Rules

**Which of these violate React Hook rules?**

```jsx
function Component({ condition }) {
  // A
  if (condition) {
    const [state, setState] = useState(0);
  }

  // B
  const [count, setCount] = useState(0);

  // C
  for (let i = 0; i < 3; i++) {
    useEffect(() => {}, []);
  }

  // D
  const helper = () => {
    const [value, setValue] = useState("");
    return value;
  };

  // E
  useEffect(() => {
    if (condition) {
      const [temp, setTemp] = useState(0);
    }
  }, []);
}
```

**Violations:** \***\*\_\*\***

---

### ✅ **Final Section Complete!**

**Congratulations! You've completed all 35 theory questions. Take a moment to:**

- Review any questions you found challenging
- Check your answers against the answer key
- Calculate your score using the scoring guide
- Identify areas where you might need more practice

**Ready for hands-on coding? Move on to the coding exercises when you feel confident with the theory!**

---

## Answer Key 🔑

**I'll provide the answer key in a separate file. Work through these questions first, then check your answers!**

**Scoring Guide:**

- 30-35 correct: Expert level 🎯
- 25-29 correct: Advanced level 🚀
- 20-24 correct: Intermediate level 📈
- 15-19 correct: Good foundation 👍
- Below 15: Review concepts 📚

**Take your time and think through each question. These will help solidify your React knowledge!**
