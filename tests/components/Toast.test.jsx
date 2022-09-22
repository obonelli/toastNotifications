import { fireEvent, render, screen } from '@testing-library/react';
import { notify as Notify } from '../../src/components/Toast';
import '../../matchMedia';

describe('tests on <Notify />', () => {

    test('The notification should appear according to the blue button', () => {

        render(<Notify />);
        fireEvent.click(screen.getByTestId('blue'))
        expect(screen.getByTestId('testing_blue')).toBeTruthy();

    });

    test('The notification should appear according to the pink button', () => {

        render(<Notify />);
        fireEvent.click(screen.getByTestId('pink'))
        expect(screen.getByTestId('testing_pink')).toBeTruthy();

    });


    test('The notification should appear according to the yellow button', () => {

        render(<Notify />);
        fireEvent.click(screen.getByTestId('yellow'))
        expect(screen.getByTestId('testing_yellow')).toBeTruthy();

    });

    test('The notification should appear according to the green button', () => {

        render(<Notify />);
        fireEvent.click(screen.getByTestId('green'))
        expect(screen.getByTestId('testing_green')).toBeTruthy();

    });

});