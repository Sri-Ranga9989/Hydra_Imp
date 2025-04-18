import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import OrganisationStructure from './pages/OrganisationStructure'
import Services from './pages/Services'
import AssetProtection from './pages/AssetProtection'
import DisasterResponse from './pages/DisasterResponse'
import TrafficManagement from './pages/TrafficManagement'
import Advertisement from './pages/Advertisement'
import FireNOC from './pages/FireNOC'
import Contact from './pages/Contact'
import News from './pages/News'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="organisation-structure" element={<OrganisationStructure />} />
          <Route path="services" element={<Services />} />
          <Route path="services/fire-noc" element={<FireNOC />} />
          <Route path="asset-protection" element={<AssetProtection />} />
          <Route path="disaster-response" element={<DisasterResponse />} />
          <Route path="traffic-management" element={<TrafficManagement />} />
          <Route path="advertisement" element={<Advertisement />} />
          <Route path="news" element={<News />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App 