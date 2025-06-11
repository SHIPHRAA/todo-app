# Todo Masterpiece

##  Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine (version 14 or higher).

### Clone the Project
Clone this repository to your local machine using Git:

```bash
git clone https://github.com/SHIPHRAA/todo-app.git
cd todo-masterpiece
```

## 🛠️ Development Guide

1. **Install dependencies**<br/>
   Run the following command to install all required dependencies:
   ```bash
   npm install
   ```

2. **Run the development server**<br/>
   Start the project by running:
   ```bash
   npm run dev
   ```

3. **Open your browser**<br/>
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application running.

4. **Start creating todos**<br/>
   - Use the "Add Todo" tab to create new tasks
   - Attach files by clicking or dragging them to the upload area
   - Switch to "View Todos" to see your tasks organized by status

## 📁 Project Structure

```
src/
├── app/
│   ├── page.js          # Main page component
│   ├── layout.js        # Root layout with metadata
│   └── app.css          # Global styles and Tailwind CSS
├── components/
│   ├── TodoApp.jsx      # Main application component
│   ├── AddTodoForm.jsx  # Todo creation form
│   ├── TodoDashboard.jsx # Todo list and management
│   └── ui/              # Reusable UI components
│       ├── Card.jsx
│       ├── Button.jsx
│       ├── Input.jsx
│       ├── Badge.jsx
│       └── Avatar.jsx
```

