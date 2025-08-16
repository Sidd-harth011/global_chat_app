import { useState } from "react"
import { useNavigate } from "react-router-dom"
export default function LoginForm() {
  const [formData, setFormData] = useState({
    name: "",
  })

  const navigate = useNavigate()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name.trim()) {
      console.log("Login attempt:", formData)
      // Handle login logic here
      navigate("/page", { state: { formData } })
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg border border-gray-200 p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Global Chat</h1>
          <p className="text-gray-500">Enter your details to join the conversation</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-50"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-4 w-full bg-green-500 text-white py-3 px-4 rounded-xl hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors font-medium"
          >
            Join Chat
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Ready to connect with the world?{" "}
            <span className="text-green-600 hover:text-green-700 cursor-pointer font-medium">Start chatting</span>
          </p>
          <p className="text-gray-500 text-[13px]">*just a dummy login*</p>
        </div>
      </div>
    </div>
  )
}
