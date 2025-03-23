# CountDown Component

This React component, `CountDown`, displays a countdown timer to a specified deadline.

## Features

-   Displays the remaining days, hours, minutes, and seconds until the deadline.
-   Uses `useEffect` and `setInterval` for real-time updates.
-   Formats the time values with leading zeros (e.g., "09" instead of "9").
-   Uses Tailwind CSS for styling.

## Installation

1.  Make sure you have Node.js and npm (or yarn) installed.
2.  Install the necessary dependencies:

    ```bash
    npm install react tailwindcss
    ```

    or

    ```bash
    yarn add react tailwindcss
    ```

3. Configure tailwind css.
    ```bash
    npx tailwindcss init -p
    ```
4. Configure your `tailwind.config.js` file. Add the following to content section.
    ```javascript
    /** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        "./src/**/*.{js,jsx,ts,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```
5. Add the tailwind directives to your `index.css` file.
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

## Usage

1.  Import the `CountDown` component into your React application:

    ```javascript
    import CountDown from './CountDown'; // Adjust the path as needed
    ```

2.  Use the component in your JSX:

    ```javascript
    function App() {
      return (
        <div>
          <CountDown />
        </div>
      );
    }

    export default App;
    ```

## Component Structure

-   **`CountDown` Component:**
    -   Defines the deadline date.
    -   Uses `useState` to manage the days, hours, minutes, and seconds.
    -   `getTimeRemaining()` function calculates the remaining time.
    -   `useEffect` sets up an interval to update the timer every second.
    -   Cleans up the interval when the component unmounts.
    -   Renders the countdown display using Tailwind CSS for styling.

## Deadline

The deadline is defined as:

```javascript
const deadline = "December 31, 2025 23:59:59";
