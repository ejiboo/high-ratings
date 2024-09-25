import React from 'react'

const Sidebar: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-gray-900 text-white p-6 rounded-xl">
        <h2 className="text-xl font-semibold mb-4">Advertisement</h2>
        <div className="border-2 border-dashed border-gray-700 h-40 flex items-center justify-center rounded-lg">
          <span className="text-gray-500">Ad Placeholder</span>
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-semibold mb-4">User Dashboard</h2>
        <button className="w-full bg-gray-900 text-white py-2.5 rounded-full text-sm font-medium hover-effect">
          Sign In / Register
        </button>
      </div>
    </div>
  )
}

export default Sidebar