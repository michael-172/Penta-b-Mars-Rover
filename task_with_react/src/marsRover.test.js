import MarsRover from "./MarsRover";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./store";

test("testing mars rover component", () => {
  render(
    <Provider store={store}>
      <MarsRover />
    </Provider>
  );
  const element = screen.getByTestId("marsRover");
  expect(element).toBeInTheDocument();
});

test("testing command input to be rendered", () => {
  render(
    <Provider store={store}>
      <MarsRover />
    </Provider>
  );
  const commandInput = screen.getByPlaceholderText(/Enter command value/);
  expect(commandInput).toBeInTheDocument();
});

test("testing command input - it accepts only f or b or l or r", () => {
  render(
    <Provider store={store}>
      <MarsRover />
    </Provider>
  );
  const commanInput = screen.getByPlaceholderText(/Enter command value/);
  fireEvent.change(commanInput, { target: { value: "" } });
  expect(commanInput.value).toBe("");

  fireEvent.change(commanInput, { target: { value: "FBFFFLRFB" } });
  expect(commanInput.value).toBe("FBFFFLRFB");
});
