import Card from "./ui/Card"
import Badge from "./ui/Badge"
import Button from "./ui/Button"
import Avatar from "./ui/Avatar"

export default function TodoDashboard({ todos }) {
  const pendingTodos = todos.filter((t) => t.status === "pending")
  const completedTodos = todos.filter((t) => t.status === "completed")
  const failedTodos = todos.filter((t) => t.status === "failed")

  return (
    <div className="space-y-6">
      {/* Pending Section */}
      <Card className="bg-white">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <h2 className="text-lg font-semibold text-gray-900">Pending ({pendingTodos.length})</h2>
          </div>

          {pendingTodos.map((todo) => (
            <div key={todo.id} className="border-b border-gray-100 last:border-b-0 pb-6 last:pb-0">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Avatar src={todo.avatar} alt="User" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">{todo.title}</h3>
                    <div className="flex gap-4 text-sm text-gray-500">
                      <span>Created: {todo.created}</span>
                      <span>Updated: {todo.updated}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                    Pending
                  </Badge>
                  <Button variant="outline" size="sm" className="w-8 h-8 p-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                  </Button>
                  <Button variant="outline" size="sm" className="w-8 h-8 p-0 text-red-500 hover:text-red-600">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </Button>
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                  <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Complete
                </Button>
                <Button size="sm" variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">
                  <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Mark Failed
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Completed Section */}
      <Card className="bg-white">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-6">
            <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <h2 className="text-lg font-semibold text-gray-900">Completed ({completedTodos.length})</h2>
          </div>

          {completedTodos.map((todo) => (
            <div key={todo.id} className="border-b border-gray-100 last:border-b-0 pb-6 last:pb-0">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-medium text-gray-600 mb-1 line-through">{todo.title}</h3>
                  <div className="flex gap-4 text-sm text-gray-500">
                    <span>Created: {todo.created}</span>
                    <span>Updated: {todo.updated}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-green-100 text-green-800">Complete</Badge>
                  <Button variant="outline" size="sm" className="w-8 h-8 p-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                  </Button>
                  <Button variant="outline" size="sm" className="w-8 h-8 p-0 text-red-500 hover:text-red-600">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </Button>
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                  <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Completed
                </Button>
                <Button size="sm" variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">
                  <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Mark Failed
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Failed Section */}
      <Card className="bg-white">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-6">
            <svg className="w-4 h-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            <h2 className="text-lg font-semibold text-gray-900">Failed ({failedTodos.length})</h2>
          </div>

          {failedTodos.map((todo) => (
            <div key={todo.id} className="border-b border-gray-100 last:border-b-0 pb-6 last:pb-0">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">{todo.title}</h3>
                  <div className="flex gap-4 text-sm text-gray-500">
                    <span>Created: {todo.created}</span>
                    <span>Updated: {todo.updated}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="destructive" className="bg-red-100 text-red-800">
                    Failed
                  </Badge>
                  <Button variant="outline" size="sm" className="w-8 h-8 p-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                  </Button>
                  <Button variant="outline" size="sm" className="w-8 h-8 p-0 text-red-500 hover:text-red-600">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </Button>
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                  <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Complete
                </Button>
                <Button size="sm" className="bg-red-600 hover:bg-red-700">
                  <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Failed
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
