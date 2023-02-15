'use strict';

function tykkaysButton() {
  const [tykatty, setTykatty] = React.useState(false);

  if (tykatty) {
    return "tykkäsit tästä";
  }

  return React.createElement(
    "button",
    {
      onClick: () => setTykatty(true),
    },
    "Tykkää"
  );
}

const rootNode = document.getElementById('app-root');
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(tykkaysButton));
