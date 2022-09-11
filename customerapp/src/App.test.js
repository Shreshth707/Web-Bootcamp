import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe("testing app", () => {
  // test spec
  test('renders title', () => {
    render(<App />);// in memory HTML DOM
    // screen.debug();
    const h1Element = screen.getByText(/customer application/i);
    expect(h1Element).toBeInTheDocument();
  });

  it('renders customers', () => {
    render(<App />);
    let btns = screen.getAllByRole('button');
    expect(btns.length).toBe(6);
  });

  it("delete a customer", () => {
    render(<App />);
    let btns = screen.getAllByRole('button');
    fireEvent.click(btns[3]);
    btns = screen.getAllByRole('button');
    expect(btns.length).toBe(5);
  });
  
  it("filter customers", () => {
    render(<App />);
    let txtElem = screen.getByPlaceholderText('search by name');
    //filterEvent(evt.target.value)
    fireEvent.change(txtElem, {"target":{"value":"Geller"}});
    screen.debug();
    let btns = screen.getAllByRole('button');
    expect(btns.length).toBe(2);
  })
});

