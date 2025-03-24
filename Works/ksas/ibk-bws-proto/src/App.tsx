// import logo from './logo.svg';
// import './App.css';

import { Suspense } from "react";
import ProtoRoutes from "app/routes/ProtoRoutes";

function App() {
  const routes = ProtoRoutes();
  return (
    <Suspense>{routes}</Suspense>
  );
}

export default App;
