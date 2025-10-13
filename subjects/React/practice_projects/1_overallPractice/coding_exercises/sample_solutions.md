# 💡 React Coding Exercises - Sample Solutions

> **Note:** These are example solutions. There are many valid ways to implement each exercise. Focus on understanding the concepts rather than copying code exactly.

## Exercise 1: User Profile Card - Sample Solution

```jsx
// File: UserProfile.jsx
import React from "react";
import "./UserProfile.css";

const UserProfile = ({ user }) => {
  const { id, name, email, avatar, bio, isOnline } = user;

  const handleContact = () => {
    alert(`Contacting ${name} at ${email}`);
  };

  return (
    <div className="user-profile-card">
      <div className="profile-header">
        <div className="avatar-container">
          <img src={avatar} alt={`${name}'s avatar`} className="avatar" />
          {isOnline && <div className="online-indicator"></div>}
        </div>
        <div className="user-info">
          <h2 className="user-name">{name}</h2>
          <p className="user-email">{email}</p>
          <div className="status">
            <span className={`status-text ${isOnline ? "online" : "offline"}`}>
              {isOnline ? "Online" : "Offline"}
            </span>
          </div>
        </div>
      </div>

      {bio && (
        <div className="bio-section">
          <p className="bio">{bio}</p>
        </div>
      )}

      <button className="contact-button" onClick={handleContact}>
        Contact {name}
      </button>
    </div>
  );
};

export default UserProfile;
```

```css
/* UserProfile.css */
.user-profile-card {
  max-width: 300px;
  border: 1px solid #e1e5e9;
  border-radius: 8px;
  padding: 20px;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.profile-header {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.avatar-container {
  position: relative;
  margin-right: 12px;
}

.avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
}

.online-indicator {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 16px;
  height: 16px;
  background: #10b981;
  border: 2px solid white;
  border-radius: 50%;
}

.user-name {
  margin: 0 0 4px 0;
  font-size: 18px;
  color: #1f2937;
}

.user-email {
  margin: 0 0 8px 0;
  color: #6b7280;
  font-size: 14px;
}

.status-text {
  font-size: 12px;
  font-weight: 500;
}

.online {
  color: #10b981;
}
.offline {
  color: #ef4444;
}

.bio-section {
  margin: 16px 0;
  padding: 12px;
  background: #f9fafb;
  border-radius: 6px;
}

.bio {
  margin: 0;
  font-size: 14px;
  color: #4b5563;
  line-height: 1.5;
}

.contact-button {
  width: 100%;
  padding: 10px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
}

.contact-button:hover {
  background: #2563eb;
}
```

---

## Exercise 2: Interactive Counter - Sample Solution

```jsx
// File: Counter.jsx
import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => Math.max(0, prev - 1));
  const incrementBig = () => setCount((prev) => prev + 5);
  const decrementBig = () => setCount((prev) => Math.max(0, prev - 5));
  const reset = () => setCount(0);

  const isHighScore = count > 20;

  return (
    <div className="counter-container">
      <div className="counter-display">
        <h2>Counter: {count}</h2>
        {isHighScore && (
          <div className="high-score-message">🎉 High Score! 🎉</div>
        )}
      </div>

      <div className="counter-controls">
        <div className="button-row">
          <button
            onClick={decrement}
            className="counter-btn decrement"
            disabled={count === 0}
          >
            -1
          </button>
          <button onClick={increment} className="counter-btn increment">
            +1
          </button>
        </div>

        <div className="button-row">
          <button
            onClick={decrementBig}
            className="counter-btn decrement-big"
            disabled={count < 5}
          >
            -5
          </button>
          <button onClick={incrementBig} className="counter-btn increment-big">
            +5
          </button>
        </div>

        <button
          onClick={reset}
          className="counter-btn reset"
          disabled={count === 0}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
```

---

## Exercise 3: Registration Form - Sample Solution

```jsx
// File: RegistrationForm.jsx
import React, { useState } from "react";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateField = (name, value) => {
    switch (name) {
      case "username":
        return value.length < 3 ? "Username must be at least 3 characters" : "";
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? "Please enter a valid email" : "";
      case "password":
        return value.length < 6 ? "Password must be at least 6 characters" : "";
      case "confirmPassword":
        return value !== formData.password ? "Passwords do not match" : "";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Real-time validation
    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);

    // Submit if no errors
    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
      setIsSubmitted(true);

      // Clear form
      setTimeout(() => {
        setFormData({
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        setIsSubmitted(false);
      }, 2000);
    }
  };

  const isFormValid =
    Object.values(formData).every((value) => value.trim()) &&
    Object.values(errors).every((error) => !error);

  if (isSubmitted) {
    return (
      <div className="success-message">
        <h2>✅ Registration Successful!</h2>
        <p>Welcome, {formData.username}!</p>
      </div>
    );
  }

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <h2>Create Account</h2>

      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className={errors.username ? "error" : ""}
        />
        {errors.username && (
          <span className="error-text">{errors.username}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? "error" : ""}
        />
        {errors.email && <span className="error-text">{errors.email}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className={errors.password ? "error" : ""}
        />
        {errors.password && (
          <span className="error-text">{errors.password}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          className={errors.confirmPassword ? "error" : ""}
        />
        {errors.confirmPassword && (
          <span className="error-text">{errors.confirmPassword}</span>
        )}
      </div>

      <button type="submit" className="submit-btn" disabled={!isFormValid}>
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
```

---

## Exercise 4: Dynamic Todo List - Sample Solution

```jsx
// File: TodoList.jsx
import React, { useState } from "react";
import "./TodoList.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState("all"); // 'all', 'active', 'completed'

  const addTodo = () => {
    if (newTodo.trim()) {
      const todo = {
        id: Date.now(),
        text: newTodo.trim(),
        completed: false,
      };
      setTodos((prev) => [...prev, todo]);
      setNewTodo("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    switch (filter) {
      case "active":
        return !todo.completed;
      case "completed":
        return todo.completed;
      default:
        return true;
    }
  });

  const activeTodos = todos.filter((todo) => !todo.completed).length;
  const completedTodos = todos.filter((todo) => todo.completed).length;

  return (
    <div className="todo-container">
      <h1>Todo List</h1>

      <div className="todo-input">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="What needs to be done?"
          className="todo-field"
        />
        <button onClick={addTodo} className="add-btn">
          Add
        </button>
      </div>

      <div className="todo-filters">
        <button
          onClick={() => setFilter("all")}
          className={filter === "all" ? "active" : ""}
        >
          All ({todos.length})
        </button>
        <button
          onClick={() => setFilter("active")}
          className={filter === "active" ? "active" : ""}
        >
          Active ({activeTodos})
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={filter === "completed" ? "active" : ""}
        >
          Completed ({completedTodos})
        </button>
      </div>

      <div className="todo-list">
        {filteredTodos.length === 0 ? (
          <div className="empty-state">
            {filter === "all" ? "No todos yet" : `No ${filter} todos`}
          </div>
        ) : (
          filteredTodos.map((todo) => (
            <div
              key={todo.id}
              className={`todo-item ${todo.completed ? "completed" : ""}`}
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="todo-checkbox"
              />
              <span className="todo-text">{todo.text}</span>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="delete-btn"
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TodoList;
```

---

## Exercise 5: Weather Widget - Sample Solution

```jsx
// File: WeatherWidget.jsx
import React, { useState, useEffect } from "react";
import "./WeatherWidget.css";

// Mock weather API
const fetchWeather = (city) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.2) {
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

const WeatherWidget = ({ city = "London" }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadWeather = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchWeather(city);
      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadWeather();

    // Cleanup function
    return () => {
      // Any cleanup if needed
    };
  }, [city]);

  const getWeatherEmoji = (condition) => {
    switch (condition) {
      case "Sunny":
        return "☀️";
      case "Cloudy":
        return "☁️";
      case "Rainy":
        return "🌧️";
      case "Snowy":
        return "❄️";
      default:
        return "🌤️";
    }
  };

  if (loading) {
    return (
      <div className="weather-widget loading">
        <div className="spinner"></div>
        <p>Loading weather for {city}...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="weather-widget error">
        <h3>❌ Error</h3>
        <p>{error}</p>
        <button onClick={loadWeather} className="refresh-btn">
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="weather-widget">
      <div className="weather-header">
        <h3>📍 {weather.city}</h3>
        <button onClick={loadWeather} className="refresh-btn">
          🔄 Refresh
        </button>
      </div>

      <div className="weather-main">
        <div className="weather-icon">{getWeatherEmoji(weather.condition)}</div>
        <div className="weather-temp">{weather.temperature}°C</div>
        <div className="weather-condition">{weather.condition}</div>
      </div>

      <div className="weather-details">
        <div className="detail-item">
          <span>💧 Humidity</span>
          <span>{weather.humidity}%</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
```

---

## Key Learning Points from Solutions

### 1. **State Management Patterns**

- Use functional updates for state that depends on previous state
- Destructure props for cleaner code
- Initialize state with appropriate default values

### 2. **Event Handling Best Practices**

- Always prevent default for form submissions
- Use controlled components for form inputs
- Handle edge cases (empty inputs, etc.)

### 3. **Conditional Rendering**

- Use logical AND (&&) for simple show/hide
- Use ternary operators for either/or scenarios
- Handle loading and error states explicitly

### 4. **useEffect Patterns**

- Include dependency arrays
- Add cleanup functions when needed
- Handle async operations properly

### 5. **Component Organization**

- Extract helper functions
- Use meaningful variable names
- Keep components focused on single responsibility

### 6. **User Experience**

- Provide loading states
- Handle error conditions gracefully
- Give visual feedback for user actions
- Disable buttons when appropriate

Remember: These solutions focus on React concepts. In real applications, you'd also want to add:

- PropTypes or TypeScript for type safety
- Better error boundaries
- More comprehensive testing
- Accessibility features
- Performance optimizations
