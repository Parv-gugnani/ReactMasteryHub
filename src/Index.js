/*
//////////////////
Setting up a React Environment
If you have npx and Node.js installed, you can create a React application by using create-react-app.

If you've previously installed create-react-app globally, it is recommended that you uninstall the package to ensure npx always uses the latest version of create-react-app.

To uninstall, run this command: npm uninstall -g create-react-app.

Run this command to create a React application named my-react-app:

npx create-react-app my-react-app
The create-react-app will set up everything you need to run a React application.

Run the React Application
Now you are ready to run your first real React application!

Run this command to move to the my-react-app directory:

cd my-react-app
Run this command to run the React application my-react-app:

npm start
A new browser window will pop up with your newly created React App! If not, open your browser and type localhost:3000 in the address bar.
///////////////////
 */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const Index = () => {
  return (
    <div>
      <App />
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
