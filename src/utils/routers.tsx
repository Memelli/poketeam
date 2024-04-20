import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '@/pages/HomePage'
import MyPokeTeam from '@/pages/MyPokeTeams'
import MyTeamDetail from '@/pages/MyTeamDetail'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/my-teams" element={<MyPokeTeam />} />
        <Route path="/my-teams/:id" element={<MyTeamDetail />} />
      </Routes>
    </BrowserRouter>
  )
}
