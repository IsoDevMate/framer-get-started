
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import { motion } from "framer-motion";
import ErrorBoundary from "./errorboundary";
import { LoginXL } from "./components/loginxl";

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.3 }}
      >
        <ErrorBoundary>
          <BrowserRouter>
          <Routes>
         <Route path="/" element={<LoginXL />} />  
            </Routes>
          </BrowserRouter>
        </ErrorBoundary>
      </motion.div>
    </Suspense>
  );
};

export default App;