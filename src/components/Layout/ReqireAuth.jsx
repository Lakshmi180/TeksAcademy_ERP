import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext/AuthContextProvider'
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import PublicAuth from './PublicAuth';

const ReqireAuth = () => {
  const { AuthState } = useContext(AuthContext);
  const location = useLocation();

  return AuthState.user ?(
    <div>
      <PublicAuth>
        <Outlet/>
      </PublicAuth>
    </div>
  ) :(
      <div>
         {/* <Navigate
      to='/login'
      state={{ from: location }}
      replace
    /> */}
      </div>
    )


}

export default ReqireAuth