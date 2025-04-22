import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ContentWrapper from "./components/ContentWrapper/ContentWrapper";
import { TransferProvider } from "./context/TransferContext";

function App() {
  const queryClient = new QueryClient();

  return (
    <TransferProvider>
      <MainLayout>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<Navigate to="/scheduled" />} />
            <Route path="/scheduled" element={<Dashboard />} />
            <Route
              path="/live-view"
              element={
                <ContentWrapper>
                  <></>
                </ContentWrapper>
              }
            />
            <Route
              path="/statistics"
              element={
                <ContentWrapper>
                  <></>
                </ContentWrapper>
              }
            />
            <Route
              path="/revenue"
              element={
                <ContentWrapper>
                  <></>
                </ContentWrapper>
              }
            />
            <Route
              path="/settings"
              element={
                <ContentWrapper>
                  <></>
                </ContentWrapper>
              }
            />
            <Route
              path="/support"
              element={
                <ContentWrapper>
                  <></>
                </ContentWrapper>
              }
            />
            <Route path="*" element={<Navigate to="/scheduled" replace />} />
          </Routes>
        </QueryClientProvider>
      </MainLayout>
    </TransferProvider>
  );
}

export default App;
