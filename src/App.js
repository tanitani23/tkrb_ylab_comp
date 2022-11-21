
import './App.css';
// react-router-domのインポートを追加
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./page/Home";
import { Page1 } from "./page/Page1";
import { Page2 } from "./page/Page2";
import { Page3 } from "./page/Page3";
import { Page4 } from "./page/Page4";

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Routes>
          {/* exactをつけると完全一致になります。Homeはexactをつけてあげます */}
          <Route path="/" element={<Home />} />
          <Route path="page1" element={<Page1 />} />
          <Route path="page2" element={<Page2 />} />
          <Route path="page3" element={<Page3 />} />
          <Route path="page4" element={<Page4 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;