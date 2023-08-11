import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AppHeader from "./AppHeader/AppHeader";
import Loading from "./Loading/Loading";

const Layout = () => {
  return (
    <>
      <AppHeader/>
      <main>
        <Suspense fallback={<Loading/>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  )
}
export default Layout;
