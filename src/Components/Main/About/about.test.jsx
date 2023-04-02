import '@testing-library/jest-dom/extend-expect'
import {render,screen} from '@testing-library/react';
import HiddenCon from './hiddenCon';

describe('hiddenCon',() => {
    test('button renders correctly', () => {
        render(<HiddenCon/>);


    const ReadMore = screen.getByRole('button',{
        Name:'read more',
        })
    expect(ReadMore).toBeInTheDocument();
    })

    const ReadLess = screen.getByRole('button',{
        Name:'read less',
    })
    expect (ReadLess).toBeInTheDocument();

    })