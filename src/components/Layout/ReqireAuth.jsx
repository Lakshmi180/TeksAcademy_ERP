import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext/AuthContextProvider'
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import PublicAuth from './PublicAuth';

const ReqireAuth = () => {
  const { AuthState } = useContext(AuthContext);
  console.log('ReqireAuth', AuthState);
  const location = useLocation();


  return AuthState.token?(
    <div>
      <PublicAuth>
        <Outlet/>
      </PublicAuth>
    </div>
  ) :(
      <div>
        <Navigate
          to='/login'
          state={{ from: location }}
          replace
        />
      </div>
    )


}

export default ReqireAuth