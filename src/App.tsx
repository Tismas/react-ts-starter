import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Foo } from './Foo';
import { Base } from './Base';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Base />}>
          <Route path="/foo" element={<Foo />} />
          <Route
            path="*"
            element={
              <div>
                <p>404: There's nothing here!</p>
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
