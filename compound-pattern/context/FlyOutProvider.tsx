import React from 'react';

const FlyOutContext = React.createContext(null);

function FlyOut({ children }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');
  const toggle = React.useCallback(() => setOpen(!open), []);

  return (
    <FlyOutContext.Provider value={{ open, toggle, value, setValue }}>
      {children}
    </FlyOutContext.Provider>
  );
}

function Input(props) {
  const { value, toggle, setValue } = React.useContext(FlyOutContext);

  return (
    <input
      onFocus={toggle}
      onBlur={toggle}
      value={value}
      {...props}
      className="flyout-input"
      onChange={(e) => setValue(e.target.value)}
      placeholder="Enter an address, city ,or ZIP code"
    />
  );
}

function List({ children, ...props }) {
  const { open } = React.useContext(FlyOutContext);

  return (
    open && (
      <div className="flyout-list">
        <ul {...props}>{children}</ul>
      </div>
    )
  );
}

function ListItem({ children, value, ...props }) {
  const { setValue } = React.useContext(FlyOutContext);

  return (
    <li
      onMouseDown={() => setValue(value)}
      value={value}
      className="flyout-list-item"
      {...props}
    >
      {children}
    </li>
  );
}

FlyOut.Input = Input;
FlyOut.List = List;
FlyOut.ListItem = ListItem;

export default FlyOut;
