import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Landing, Register, Error, ProtectedRoute } from './pages'
import { AddJob, AllJobs, Profile, Stats, SharedLayout } from './pages/dashboard'
import { Marketplace, MarketplaceLayout, BathBody, SingleProduct } from './pages/marketplace'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <MarketplaceLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Marketplace />} />
          <Route path='bath-body' element={<BathBody />} />
          <Route path='product/:id' element={<SingleProduct />} />
        </Route>
        <Route
          path='/dashboard'
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path='all-jobs' element={<AllJobs />} />
          <Route path='add-job' element={<AddJob />} />
          <Route path='profile' element={<Profile />} />
        </Route>
        <Route path='/register' element={<Register />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
