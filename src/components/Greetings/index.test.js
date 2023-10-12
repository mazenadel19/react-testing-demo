import { render, screen } from "@testing-library/react";
import Greetings from ".";

describe('Greeting Component',()=>{
    test("render hello world to the screen", () => {
        // arrange
        render(<Greetings />);
      
        // act
      
        // assert
        //   const helloWorldElement = screen.getByText("Hello World!");
        const helloWorldElement = screen.getByText("hello world", { exact: false });
        expect(helloWorldElement).toBeInTheDocument();
      });
})



// screen.find => return a promise
// screen.get => throw an error if element not found
// screen.query => won't throw an error if element not found
