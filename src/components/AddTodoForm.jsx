"use client"

import { useState, useRef } from "react"
import Card from "./ui/Card"
import Button from "./ui/Button"
import Input from "./ui/Input"

export default function AddTodoForm({ onAddTodo }) {
  const [title, setTitle] = useState("")
  const [file, setFile] = useState(null)
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title.trim()) {
      onAddTodo(title, file)
      setTitle("")
      setFile(null)
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0])
    }
  }

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0])
    }
  }

  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <Card className="bg-white shadow-md">
      <div className="p-8">
        <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">Create New Todo</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
              Title
            </label>
            <Input
              id="title"
              placeholder="What needs to be done?"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Attach Media</label>
            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                isDragging ? "border-purple-500 bg-purple-50" : "border-purple-200"
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={handleUploadClick}
            >
              <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" />
              <div className="flex flex-col items-center justify-center gap-2">
                <svg className="h-10 w-10 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <div>
                  <span className="text-purple-600 font-medium">Click to upload</span>
                  <span className="text-gray-600"> or drag and drop</span>
                </div>
                <p className="text-xs text-gray-500">Images, documents, or any file type</p>
              </div>
              {file && <div className="mt-4 text-sm text-gray-700">Selected file: {file.name}</div>}
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
          >
            Add Todo
          </Button>
        </form>
      </div>
    </Card>
  )
}
