# React Coding Practice Exercises 💻

## Exercise 1: Component Creation & JSX 🏗️

### Task: User Profile Card

Create a `UserProfile` component that displays user information.

**Requirements:**

- Functional component
- Use JSX to create the structure
- Display user name, email, avatar, and bio
- Include conditional rendering for optional bio
- Add a "Contact" button

**Starter Code:**

```jsx
// File: UserProfile.jsx
import React from "react";

const UserProfile = ({ user }) => {
  // Your code here
};

export default UserProfile;
```

**Expected Props:**

```jsx
const user = {
  id: 1,
  name: "Alice Johnson",
  email: "alice@example.com",
  avatar: "https://via.placeholder.com/100",
  bio: "Frontend developer passionate about React", // Optional
  isOnline: true,
};
```

**Output should include:**

- Avatar image
- Name as h2
- Email
- Online status indicator (green dot if online)
- Bio paragraph (only if bio exists)
- Contact button

---

## Exercise 2: State Management with useState 🔄

### Task: Interactive Counter

Build a counter with multiple operations.

**Requirements:**

- Use useState for counter value
- Buttons: +1, -1, +5, -5, Reset
- Display current count
- Prevent negative values
- Show "High Score" if count > 20

**Starter Code:**

```jsx
// File: Counter.jsx
import React, { useState } from "react";

const Counter = () => {
  // Your code here
};

export default Counter;
```

**Expected Features:**

- Initial count: 0
- Increment/decrement buttons
- Bulk operations (+5, -5)
- Reset to 0
- High score message
- Prevent going below 0

---

## Exercise 3: Form Handling & Controlled Components 📝

### Task: Registration Form

Create a user registration form with validation.

**Requirements:**

- Controlled inputs for: username, email, password, confirm password
- Real-time validation
- Form submission handling
- Error display
- Success message

**Starter Code:**

```jsx
// File: RegistrationForm.jsx
import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Your code here
};

export default RegistrationForm;
```

**Validation Rules:**

- Username: min 3 characters
- Email: valid email format
- Password: min 6 characters
- Confirm Password: must match password

**Features:**

- Show errors in real-time
- Disable submit if invalid
- Success message on submit
- Clear form after submission

---

## Exercise 4: Lists & Keys 📋

### Task: Dynamic Todo List

Build a todo list with add/remove functionality.

**Requirements:**

- Add new todos
- Remove todos
- Mark as complete/incomplete
- Filter by status (All, Active, Completed)
- Show todo count

**Starter Code:**

```jsx
// File: TodoList.jsx
import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState("all"); // 'all', 'active', 'completed'

  // Your code here
};

export default TodoList;
```

**Todo Object Structure:**

```jsx
{
  id: Date.now(), // or use a counter
  text: "Learn React",
  completed: false
}
```

**Features:**

- Add button/Enter key to add
- Checkbox to toggle completion
- Delete button for each todo
- Filter buttons
- Todo counter display

---

### 🌉 **Bridge Exercise 4.5: useEffect Fundamentals**

**Before jumping into complex API calls, let's master useEffect basics!**

**Task:** Create a simple component that demonstrates basic useEffect patterns.

**Requirements:**

- Component that shows current time and updates every second
- Display how many times the component has rendered
- Clean up timer when component unmounts
- Add a toggle to start/stop the timer

**Key Learning:** This prepares you for Exercise 5 by practicing:

- useEffect with dependencies
- Cleanup functions
- Timer management
- State updates in effects

**Time to Complete:** 15-20 minutes

---

## Exercise 5: useEffect & Side Effects ⚡

### Task: Weather Widget

Fetch and display weather data with useEffect.

**Requirements:**

- Fetch weather data on mount
- Loading state
- Error handling
- Cleanup on unmount
- Refresh button

**Starter Code:**

```jsx
// File: WeatherWidget.jsx
import React, { useState, useEffect } from "react";

const WeatherWidget = ({ city = "London" }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Your code here
};

export default WeatherWidget;
```

**Mock API Function:**

```jsx
// Mock weather API (use this instead of real API)
const fetchWeather = (city) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.2) {
        // 80% success rate
        resolve({
          city,
          temperature: Math.floor(Math.random() * 30) + 5,
          condition: ["Sunny", "Cloudy", "Rainy", "Snowy"][
            Math.floor(Math.random() * 4)
          ],
          humidity: Math.floor(Math.random() * 40) + 30,
        });
      } else {
        reject(new Error("Weather service unavailable"));
      }
    }, 1000);
  });
};
```

**Features:**

- Loading spinner
- Error message display
- Refresh button
- Weather info display
- Proper cleanup

---

## Exercise 6: Component Communication 🔗

### Task: Parent-Child Data Flow

Create a product catalog with cart functionality.

**Requirements:**

- Product list component
- Individual product cards
- Add to cart functionality
- Cart summary
- State lifting

**Starter Code:**

```jsx
// File: ProductCatalog.jsx
import React, { useState } from "react";

const products = [
  { id: 1, name: "Laptop", price: 999, image: "laptop.jpg" },
  { id: 2, name: "Mouse", price: 29, image: "mouse.jpg" },
  { id: 3, name: "Keyboard", price: 79, image: "keyboard.jpg" },
  { id: 4, name: "Monitor", price: 299, image: "monitor.jpg" },
];

const ProductCatalog = () => {
  const [cart, setCart] = useState([]);

  // Your code here
};

const ProductCard = ({ product, onAddToCart }) => {
  // Your code here
};

const CartSummary = ({ cart, onRemoveFromCart }) => {
  // Your code here
};

export default ProductCatalog;
```

**Features:**

- Display all products
- Add to cart button
- Cart item count
- Remove from cart
- Total price calculation
- Quantity handling

---

## Exercise 7: Event Handling & DOM Updates 🎯

### Task: Interactive Image Gallery

Build an image gallery with navigation and zoom.

**Requirements:**

- Multiple images
- Previous/Next navigation
- Current image indicator
- Zoom in/out functionality
- Keyboard navigation (arrow keys)

**Starter Code:**

```jsx
// File: ImageGallery.jsx
import React, { useState, useEffect } from "react";

const images = [
  { id: 1, src: "https://via.placeholder.com/600x400/FF6B6B", alt: "Red" },
  { id: 2, src: "https://via.placeholder.com/600x400/4ECDC4", alt: "Teal" },
  { id: 3, src: "https://via.placeholder.com/600x400/45B7D1", alt: "Blue" },
  { id: 4, src: "https://via.placeholder.com/600x400/96CEB4", alt: "Green" },
  { id: 5, src: "https://via.placeholder.com/600x400/FFEAA7", alt: "Yellow" },
];

const ImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  // Your code here
};

export default ImageGallery;
```

**Features:**

- Current image display
- Navigation buttons
- Image indicators (dots)
- Zoom toggle
- Keyboard navigation
- Smooth transitions

---

### 🌉 **Bridge Exercise 7.5: Conditional Rendering Patterns**

**Before tackling complex dashboards, let's master conditional rendering!**

**Task:** Create a "User Status Component" that practices different rendering patterns.

**Requirements:**

- Show different content based on user role (admin, user, guest)
- Display loading, error, and success states
- Show/hide content based on multiple conditions
- Practice different conditional rendering techniques

**Key Learning:** This prepares you for Exercise 8 by practicing:

- Multiple conditional rendering patterns
- Role-based content display
- State-dependent UI changes
- Complex conditional logic

**Time to Complete:** 20-25 minutes

---

## Exercise 8: Conditional Rendering & Arrays 🎨

### Task: User Dashboard

Create a dashboard with different views based on user role and data.

**Requirements:**

- Different views for admin/user roles
- Conditional content based on data availability
- Dynamic navigation menu
- Loading states
- Empty states

**Starter Code:**

```jsx
// File: UserDashboard.jsx
import React, { useState, useEffect } from "react";

const UserDashboard = ({ userRole = "user" }) => {
  const [user, setUser] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [stats, setStats] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [loading, setLoading] = useState(true);

  // Your code here
};

export default UserDashboard;
```

**Mock Data:**

```jsx
const mockUser = {
  name: "John Doe",
  role: "admin", // or "user"
  avatar: "https://via.placeholder.com/50",
  lastLogin: "2024-01-15",
};

const mockNotifications = [
  { id: 1, message: "New message received", type: "info", read: false },
  {
    id: 2,
    message: "Profile updated successfully",
    type: "success",
    read: true,
  },
  { id: 3, message: "Payment due tomorrow", type: "warning", read: false },
];

const mockStats = {
  totalUsers: 1250,
  activeProjects: 23,
  completedTasks: 189,
  revenue: 45670,
};
```

**Features:**

- Role-based content
- Tab navigation
- Notification center
- Stats cards (admin only)
- Empty states
- Loading indicators

---

## Exercise 9: Advanced State Management 🧠

### Task: Shopping Cart with Complex State

Build a full-featured shopping cart with multiple operations.

**Requirements:**

- Add/remove items
- Quantity updates
- Price calculations
- Discount codes
- Local storage persistence

**Starter Code:**

```jsx
// File: ShoppingCart.jsx
import React, { useState, useEffect } from "react";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [discountCode, setDiscountCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState(null);

  // Your code here
};

export default ShoppingCart;
```

**Cart Item Structure:**

```jsx
{
  id: 1,
  name: "Product Name",
  price: 29.99,
  quantity: 2,
  image: "product.jpg"
}
```

**Discount Codes:**

```jsx
const discountCodes = {
  SAVE10: { type: "percentage", value: 10 },
  FLAT20: { type: "fixed", value: 20 },
  WELCOME: { type: "percentage", value: 15 },
};
```

**Features:**

- Item management
- Quantity controls
- Subtotal/total calculation
- Discount application
- Local storage sync
- Cart persistence

---

### 🌉 **Bridge Exercise 9.5: Component Architecture Planning**

**Before building complex applications, let's practice planning!**

**Task:** Plan the architecture for a "Task Manager" application without coding it yet.

**Requirements:**

- Draw component hierarchy (on paper or digitally)
- Define state structure and where each piece lives
- Plan component props and communication patterns
- Identify reusable components
- Plan file organization

**Key Learning:** This prepares you for Exercises 10 & 11 by practicing:

- Application architecture thinking
- Component planning and organization
- State management strategy
- Breaking large apps into manageable pieces

**Deliverable:** Architecture diagram and component plan

**Time to Complete:** 30-40 minutes

---

## Exercise 10: State Management Integration 🧠

### Task: Enhanced Shopping Cart

Build a feature-rich shopping cart that integrates multiple React concepts.

**Requirements:**

- Product display with filtering
- Advanced cart operations
- Form handling for checkout
- Local storage integration
- Complex state management

**Starter Code:**

```jsx
// File: EnhancedShoppingCart.jsx
import React, { useState, useEffect } from "react";

const EnhancedShoppingCart = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [filters, setFilters] = useState({
    category: "all",
    priceRange: [0, 1000],
  });

  // Your code here
};

export default EnhancedShoppingCart;
```

**Features Required:**

- Product catalog with search/filter
- Add/remove/update cart items
- Quantity management
- Basic checkout form
- Price calculations
- Local storage persistence
- Category filtering
- Search functionality

**Focus:** Integration of useState, useEffect, forms, and component communication

---

## Exercise 11: Full Application Challenge 🚀

### Task: Complete Task Manager

Build a comprehensive task management application that demonstrates mastery of all React concepts.

**Requirements:**

- Multiple interconnected components
- Complex state management
- Advanced filtering and search
- Form handling with validation
- Complete CRUD operations
- Professional user interface

**Starter Code:**

```jsx
// File: TaskManager.jsx
import React, { useState, useEffect } from "react";

const TaskManager = () => {
  // Your state management here
  // Your component logic here
};

// Additional components you'll need:
const TaskForm = ({ onAddTask }) => {
  // Task creation form
};

const TaskList = ({ tasks, onUpdateTask, onDeleteTask, filter }) => {
  // Task list display
};

const TaskItem = ({ task, onUpdate, onDelete }) => {
  // Individual task component
};

const TaskFilters = ({ currentFilter, onFilterChange, taskCounts }) => {
  // Filter controls
};

const TaskStats = ({ tasks }) => {
  // Statistics display
};

export default TaskManager;
```

**Task Object Structure:**

```jsx
{
  id: Date.now(),
  title: "Task title",
  description: "Task description",
  priority: "high", // high, medium, low
  category: "work", // work, personal, shopping
  completed: false,
  createdAt: new Date().toISOString(),
  dueDate: "2024-01-20" // optional
}
```

**Features Required:**

- Add new tasks with comprehensive form
- Edit existing tasks inline
- Mark complete/incomplete
- Delete tasks with confirmation
- Filter by: All, Active, Completed, Priority, Category
- Search by title/description
- Sort by: Date, Priority, Alphabetical
- Statistics: Total, Completed, By category
- Local storage persistence
- Responsive design
- Loading states
- Error handling

**Focus:** This exercise integrates ALL React concepts and prepares you for real-world application development.

---

## 🎯 Completion Checklist

For each exercise, ensure you've implemented:

- ✅ **Functional Components**: Using modern functional syntax
- ✅ **Proper JSX**: Correct attributes, expressions, and structure
- ✅ **State Management**: useState for local component state
- ✅ **Event Handling**: onClick, onChange, onSubmit properly implemented
- ✅ **Conditional Rendering**: Ternary operators and logical operators
- ✅ **Lists & Keys**: Proper key props for dynamic lists
- ✅ **Props**: Passing and using props correctly
- ✅ **useEffect**: Side effects and cleanup where needed
- ✅ **Component Communication**: Parent-child data flow
- ✅ **Form Handling**: Controlled components and validation

## 📊 Difficulty Levels

- **Beginner**: Exercises 1-3
- **Bridge Exercises**: 4.5, 7.5, 9.5 (skill building)
- **Intermediate**: Exercises 4-7
- **Advanced**: Exercises 8-9
- **Integration**: Exercises 10-11

## 🔧 Setup Instructions

1. Create a new React app or use existing setup
2. Create component files as specified
3. Import and use components in your App.js
4. Test each exercise thoroughly
5. Style components for better user experience

## 🎨 Bonus Challenges

- Add CSS styling to make components visually appealing
- Implement responsive design
- Add animations and transitions
- Use TypeScript for type safety
- Add unit tests for components
- Implement accessibility features

**Take your time with each exercise and focus on understanding the concepts rather than rushing through them!**
