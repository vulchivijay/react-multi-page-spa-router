import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/UI/Header";

export default function RootLayout() {
  const navigation = useNavigation();
  return (
    <>
      <Header />
      <main>
        {navigation.state === 'loading' && <p>Loading...</p>}
        <Outlet />
      </main>
    </>
  );
}