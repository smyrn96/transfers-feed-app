import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainContent from "./components/MainContent/MainContent";

function App() {
  const queryClient = new QueryClient();

  return (
    <MainLayout>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Navigate to="/scheduled" />} />
          <Route path="/scheduled" element={<Dashboard />} />
          <Route path="/live-view" element={<MainContent />} />
          <Route path="/statistics" element={<MainContent />} />
          <Route path="/revenue" element={<MainContent />} />
          <Route path="/settings" element={<MainContent />} />
          <Route path="/support" element={<MainContent />} />
          <Route path="*" element={<Navigate to="/scheduled" replace />} />
        </Routes>
      </QueryClientProvider>
    </MainLayout>
  );
}

export default App;
