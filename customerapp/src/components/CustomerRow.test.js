import { render, screen, fireEvent } from '@testing-library/react';

import CustomerRow from './CustomerRow';

describe("testing customer row", () => {
    let c = null;

    let callback = null;
    
    beforeEach(() => {
        jest.fn(); // mock function
        c = {
            id: 123,
            firstName : "Gavin",
            lastName : "King"
        };
    });

    afterEach(() => {
        c = null;
        callback = null;
    });

    it("create customer row component", () => {
        render(<CustomerRow 
            delEvent = {(id) => callback(id)}
            key={c.id} 
            customer={c} />);
            // screen.debug();
            let elem = screen.getByText(/Gavin/i);
            expect(elem).toBeInTheDocument();
    });

    it("customer row component delete delgate", () => {
        render(<CustomerRow 
            delEvent = {(id) => callback(id)}
            key={c.id} 
            customer={c} />);
            
            let btn = screen.getByRole('button');
            fireEvent.click(btn);
            expect(callback).toBeCalledTimes(1);
            expect(callback).toBeCalledWith(123);
    });
});