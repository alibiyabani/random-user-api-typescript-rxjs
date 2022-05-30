import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { useObservableState } from 'observable-hooks'
import { userState } from '../../src/services/store';

import HomePage from '../pages/HomePage';
import NoMatchPage from '../pages/NoMatchPage';
import LoginPage from "../pages/LoginPage";
import PrivateRouter from "./PrivateRouter";


const AppRouter: FC = () => {
  const userIsLogin = useObservableState(userState)

  return (
    <Routes>
      <Route element={<PrivateRouter isUser={userIsLogin || false} />} >
        <Route path="/" element={<HomePage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<NoMatchPage />} />
    </Routes>
  )
}

export default AppRouter