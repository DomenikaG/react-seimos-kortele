import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";

const AllDiscountsPage = lazy(() =>
  import("./pages/AllDiscounts/AllDiscountsPage")
);
const DiscountDetailedPage = lazy(() =>
  import("./pages/DiscountDetailedPage/DiscountDetailedPage")
);

function App() {
  return (
    <div style={{ margin: "40px" }}>
      <Header text="PRIVILEGIJŲ IR LENGVATŲ PAIEŠKA" />
      <hr />

      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route index element={<AllDiscountsPage />} />
          <Route path="/discount/:id" element={<DiscountDetailedPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
