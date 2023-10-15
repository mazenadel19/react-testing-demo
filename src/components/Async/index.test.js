import { render, screen } from "@testing-library/react";
import Async from ".";

describe("Async Component", () => {
  test("render list items if request succeed", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "1", title: "title1" }],
    });

    // arrange
    render(<Async />);

    // act

    // assert
    const listItems = await screen.findAllByRole("listitem");
    expect(listItems).not.toHaveLength(0);
    // expect(await screen.findAllByRole("listitem")).not.toHaveLength(0);
  });
});

// get by role fail if i have more than one item by that role
// findAllByRole returns a promise
