import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Approutes from './routes/Approutes'
import { Toaster } from 'react-hot-toast'

function App() {
 

  return (
    <>
        <BrowserRouter>
        <Toaster
						position='top-right'
						toastOptions={{
							duration: 4000,
							style: {
								background: '#363636',
								color: '#fff',
							},
							success: {
								duration: 3000,
								style: {
                  background: '#10B981',
									color: '#fff',
								},
							},
							error: {
                duration: 4000,
								style: {
                  background: '#EF4444',
									color: '#fff',
								},
							},
						}}
            />
            <Approutes/>
        </BrowserRouter>
    </>
  )
}

export default App
