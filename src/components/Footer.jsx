import React from 'react'

function Footer() {
  return (
    <footer className="bg-black/90 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="text-center text-gray-400">
          <p>© {new Date().getFullYear()} ECE BOIS. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Designed and Developed by Department of Electronics and Communication Engineering
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer