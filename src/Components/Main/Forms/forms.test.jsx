import '@testing-library/jest-dom/extend-expect'
import {render,screen} from '@testing-library/react';
import Forms from './forms';

describe('Forms',() => {
    test('renders correctly', () => {
        render(<Forms/>);
        
        const FirstnameElement =screen.getByRole("textbox",{
            Name:"First Name:",
        })
        
    expect(FirstnameElement).toBeInTheDocument();

    const LastnameElement = screen.getByRole("textbox", {
        Name:"Last Name:",
    })
    expect(LastnameElement).toBeInTheDocument();

    const EmailAddress = screen.getByRole("textbox", {
        Name:"Email address:",
    })
    expect(EmailAddress).toBeInTheDocument();

    const Message = screen.getByRole("textbox",{
        Name:"Message:",
    })
    expect(Message).toBeInTheDocument();

    })
    const submitButtonElement = screen.getByRole('button');

    expect (submitButtonElement).toBeInTheDocument();
})