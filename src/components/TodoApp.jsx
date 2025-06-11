"use client"

import { useState } from "react"
import TodoDashboard from "./TodoDashboard"
import AddTodoForm from "./AddTodoForm"

export default function TodoApp() {
  const [activeTab, setActiveTab] = useState("add")
  const [todos, setTodos] = useState([
    {
      id: "1",
      title: "Design new landing page",
      status: "pending",
      created: "Jun 8, 2024, 03:00 AM",
      updated: "Jun 8, 2024, 03:00 AM",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "2",
      title: "Review project documentation",
      status: "completed",
      created: "Jun 7, 2024, 03:00 AM",
      updated: "Jun 9, 2024, 03:00 AM",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "3",
      title: "Fix authentication bug",
      status: "failed",
      created: "Jun 6, 2024, 03:00 AM",
      updated: "Jun 8, 2024, 03:00 AM",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ])

  const stats = {
    total: todos.length,
    pending: todos.filter((t) => t.status === "pending").length,
    completed: todos.filter((t) => t.status === "completed").length,
    failed: todos.filter((t) => t.status === "failed").length,
  }

  const handleAddTodo = (title, file) => {
    const newTodo = {
      id: Date.now().toString(),
      title,
      status: "pending",
      created: new Date().toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
      updated: new Date().toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
      avatar: "/placeholder.svg?height=40&width=40",
    }

    setTodos([...todos, newTodo])
    setActiveTab("view")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-600 mb-2">Todo Masterpiece</h1>
          <p className="text-gray-600">Organize your tasks with style and efficiency</p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-4 gap-6">
          <div className="text-center bg-white rounded-lg p-4 shadow-sm">
            <div className="text-3xl font-bold text-purple-600 mb-1">{stats.total}</div>
            <div className="text-sm text-gray-600">Total</div>
          </div>
          <div className="text-center bg-white rounded-lg p-4 shadow-sm">
            <div className="text-3xl font-bold text-orange-500 mb-1">{stats.pending}</div>
            <div className="text-sm text-gray-600">Pending</div>
          </div>
          <div className="text-center bg-white rounded-lg p-4 shadow-sm">
            <div className="text-3xl font-bold text-green-600 mb-1">{stats.completed}</div>
            <div className="text-sm text-gray-600">Completed</div>
          </div>
          <div className="text-center bg-white rounded-lg p-4 shadow-sm">
            <div className="text-3xl font-bold text-red-500 mb-1">{stats.failed}</div>
            <div className="text-sm text-gray-600">Failed</div>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="flex gap-4 bg-white rounded-lg shadow-sm p-1">
          <button
            onClick={() => setActiveTab("add")}
            className={`flex-1 py-3 px-4 rounded-md transition-all ${
              activeTab === "add"
                ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            Add Todo
          </button>
          <button
            onClick={() => setActiveTab("view")}
            className={`flex-1 py-3 px-4 rounded-md transition-all ${
              activeTab === "view"
                ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            View Todos
          </button>
        </div>

        {/* Content */}
        {activeTab === "add" ? <AddTodoForm onAddTodo={handleAddTodo} /> : <TodoDashboard todos={todos} />}
      </div>
    </div>
  )
}
