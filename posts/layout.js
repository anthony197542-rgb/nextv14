import React from 'react'

function RootLayout({children}) {
  retutn (
    <div>
     <h1 className="font-bold text-4xl text-center">Posts</h1>
   {children}
    </div>
  );
}

export default RootLayout;