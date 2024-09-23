import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { AboutPage } from './AboutPage';
import { Navbar } from './Navbar';
import { UserProvider } from './context/UserProvider';
// import { NotFound } from './NotFound';


export const MainApp = () => {
  return (
    <UserProvider>
      <h1>MainApp</h1>
      <Navbar />
      <hr />

      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* <Route path='*' element={ <NotFound /> } /> */}
        <Route path='*' element={<Navigate to={'./about'} />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='about' element={<AboutPage />} />
      </Routes>
    </UserProvider>
  )
}
