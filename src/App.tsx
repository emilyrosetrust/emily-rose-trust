import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import EmilysStory from "./pages/EmilysStory";
import TheTrust from "./pages/TheTrust";
import SupportEmilyRose from "./pages/SupportEmilyRose";
import Updates from "./pages/Updates";
import UpdateDetail from "./pages/UpdateDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/emilys-story" element={<EmilysStory />} />
            <Route path="/the-trust" element={<TheTrust />} />
            <Route path="/support-emily-rose" element={<SupportEmilyRose />} />
            <Route path="/updates" element={<Updates />} />
            <Route path="/updates/:slug" element={<UpdateDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
