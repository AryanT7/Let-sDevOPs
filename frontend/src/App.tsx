import { useState } from 'react'

function App() {
  const [message, setMessage] = useState<string>('')
  const [loading, setLoading] = useState(false)

  const fetchMessage = async () => {
    try {
      setLoading(true)
      const response = await fetch('http://localhost:8000/api/hello')
      const data = await response.json()
      setMessage(data.message)
    } catch (error) {
      console.error('Error fetching message:', error)
      setMessage('Error fetching message')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '2rem',
      textAlign: 'center' 
    }}>
      <h1>React + FastAPI Demo</h1>
      <button 
        onClick={fetchMessage}
        disabled={loading}
        style={{
          padding: '0.5rem 1rem',
          fontSize: '1rem',
          cursor: loading ? 'not-allowed' : 'pointer',
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          marginBottom: '1rem'
        }}
      >
        {loading ? 'Loading...' : 'Fetch Message'}
      </button>
      {message && (
        <p style={{
          padding: '1rem',
          backgroundColor: '#f0f0f0',
          borderRadius: '4px'
        }}>
          {message}
        </p>
      )}
    </div>
  )
}

export default App
