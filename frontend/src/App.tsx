import { useState } from 'react'

function App() {
  const [message, setMessage] = useState<string>('')
  const [loading, setLoading] = useState(false)

  const fetchMessage = async () => {
    try {
      setLoading(true)
      const base = import.meta.env.VITE_API_BASE_URL || ''  // <-- read from Vite env
      const res = await fetch(`${base}/api/hello`)
      const data = await res.json()
      setMessage(data.message)
    } catch (err) {
      console.error('Error fetching message:', err)
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
