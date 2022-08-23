import { Provider } from 'react-redux';
import store from '../../state';
import { AirportSelect, AirportSelectProps } from "../../components/AirportSelect";
import { AirportType } from '../../utils/types';
import { render, fireEvent, prettyDOM } from "@testing-library/react";
import { act } from 'react-dom/test-utils';

const makeSut = (props: Partial<AirportSelectProps>) => {
  return render(
    <Provider store={store}>
      <AirportSelect
        type={AirportType.Start}
        {...props}
      />
    </Provider>
  );
};

describe('AirportSelect', () => {
  jest.setTimeout(10000);
  it('airportselect should work properly', async () => {
    
    const { container } = makeSut({})

    const input = container.querySelector("input")
    
    act(() => {
      // click into the component
      input.focus()
      // type "asd"
      fireEvent.change(document.activeElement, { target: { value: 'asd' } })
    })
    
    await act(async () => {
      // wait to fetch data from rapid api
      await new Promise((r) => setTimeout(r, 5000));
    })
   
    act(() => {
      // arrow down to first option
      fireEvent.keyDown(document.activeElement, { key: 'ArrowDown' })
      // select element
      fireEvent.keyDown(document.activeElement, { key: 'Enter' })
    })
    
    // expect().toBe(true)
    expect(input.value).toEqual('Andros Town Airport');

    // await waitFor(() => {
    //   expect(input.value).toEqual('Andros Town Airport');
    // });

  });
});