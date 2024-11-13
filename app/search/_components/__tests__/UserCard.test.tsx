import UserCard from "@/app/search/_components/UserCard";
import { users } from "@/app/search/dummyUsers";
import { render, screen } from "@testing-library/react";

describe("UserCard unit tests", () => {
  it("should render a user card when passed a user object", () => {
    const { container } = render(<UserCard user={users[0]} />);

    /** Should render the correct user email */
    expect(screen.getByTestId("email")).toHaveTextContent(users[0].email);
    expect(container).toMatchSnapshot();
  });

  it("should render another user card correctly when passed another user object", () => {
    const { container } = render(<UserCard user={users[8]} />);

    /** Should render the correct user email */
    expect(screen.getByTestId("email")).toHaveTextContent(users[8].email);
    expect(container).toMatchSnapshot();
  });
});
