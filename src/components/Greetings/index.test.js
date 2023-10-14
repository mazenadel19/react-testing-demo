import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greetings from ".";
import { act } from "@testing-library/react";

describe("Greeting Component", () => {
  test("render hello world to the screen", () => {
    // arrange
    render(<Greetings />);

    // act

    // assert
    //   const helloWorldElement = screen.getByText("Hello World!");
    const helloWorldElement = screen.getByText("hello world", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("render 'Good To See' You to the screen if the button was NOT clicked", () => {
    // arrange
    render(<Greetings />);

    // act

    // assert
    const goodToSeeUElement = screen.getByText("Good To See You", {
      exact: false,
    });
    expect(goodToSeeUElement).toBeInTheDocument();
  });

  test("render 'changed!' to the screen if the button was clicked", () => {
    // arrange
    render(<Greetings />);

    // act
    const buttonEl = screen.getByRole("button");

    // Use `act` here to perform the user event within a callback
    // and ensure proper handling of updates and side effects
    act(() => {
      userEvent.click(buttonEl);
    });

    // assert
    expect(screen.getByText("changed!", { exact: false })).toBeInTheDocument();
  });

  test("doesn't render 'Good To See You' from the screen if the button was clicked", () => {
    // arrange
    render(<Greetings />);

    // act
    const buttonEl = screen.getByRole("button");

    // Use `act` here to perform the user event within a callback
    // and ensure proper handling of updates and side effects
    act(() => {
      userEvent.click(buttonEl);
    });

    // assert
    expect(screen.queryByText("It`s Good To See You")).toBeNull();
  });
});


// screen.find => return a promise
// screen.get => throw an error if element not found
// screen.query => won't throw an error if element not found
