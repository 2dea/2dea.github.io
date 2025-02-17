/**
 * @description 진입 컴포넌트
 */

// dependency
import React from "react";
import GlobalRoutes from "@routes/GlobalRoutes";

function App() {
  return (
    <React.Suspense>
      <GlobalRoutes />
    </React.Suspense>
  );
}

export default App;
