// import React from "react";
// import Header from "./Header";
// import Footer from "./Footer";
// // import Body from "./Body";
// import LandingPage from "./LandingPage";
// function App() {
//   return (
//     <div>
//       {/* <Header /> */}
//       <LandingPage />
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage.jsx';
import CreateCampaign from './CreateCampaign';
import ViewCampaigns from './ViewCampaigns.jsx';
import MicroinsurancePolicyPage from './MicroinsurancePolicyPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create-campaign" element={<CreateCampaign />} />
        <Route path="/view-campaigns" element={<ViewCampaigns />} />
        <Route path="/microinsurance" element={<MicroinsurancePolicyPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;

