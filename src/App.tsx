import { FC, Fragment, ReactNode, createContext, useContext, } from "react";

const colors = ["pink", "red", "blue", "violet", "yellow"] as const;

const ChangeColorContext = createContext<{
  changeColor: (color: typeof colors[number]) => void;
}>({
  changeColor: () => { },
});

const Wrapper: FC<{ children: ReactNode }> = ({ children }) => {
  const changeColor = (color: typeof colors[number]) => {
    document.documentElement.setAttribute("data-theme", color);
  };

  return (
    <Fragment>
      <ChangeColorContext.Provider value={{ changeColor }}>
        {children}
      </ChangeColorContext.Provider>
    </Fragment>
  );
}

const App: FC = () => {

  const { changeColor } = useContext(ChangeColorContext);

  return (
    <Fragment>
      <div id="main-div">
        <h1 className="text-3xl mb-4 tracking-wide text-primary-100">Hello World 100</h1>
        <h1 className="text-3xl mb-4 tracking-wide text-primary-200">Hello World 200</h1>
        <h1 className="text-3xl mb-4 tracking-wide text-primary-300">Hello World 300</h1>
        <h1 className="text-3xl mb-4 tracking-wide text-primary-400">Hello World 400</h1>
        <h1 className="text-3xl mb-4 tracking-wide text-primary-500">Hello World 500</h1>
        <h1 className="text-3xl mb-4 tracking-wide text-primary-600">Hello World 600</h1>
        <h1 className="text-3xl mb-4 tracking-wide text-primary-700">Hello World 700</h1>
        <h1 className="text-3xl mb-4 tracking-wide text-primary-800">Hello World 800</h1>
        <h1 className="text-3xl mb-4 tracking-wide text-primary-900">Hello World 900</h1>

        {
          colors.map(color => (
            <button
              className={`px-5 py-2 border text-red rounded-md m-3 text-primary-900 hover:text-xl display`}
              key={color}
              onClick={() => changeColor(color)}
            >change to {color}</button>
          ))
        }
      </div>
    </Fragment>
  );
};

export const WrappedApp: FC = () => {

  return (
    <Fragment>
      <Wrapper>
        <App />
      </Wrapper>
    </Fragment>
  );
};