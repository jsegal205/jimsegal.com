import * as React from "react";
import { cleanup, render } from "@testing-library/react";

import ExternalLink from "../ExternalLink";

afterEach(cleanup);

test("renders correct structure with text children", () => {
  const { container } = render(
    <ExternalLink link="#" title="title-prop">
      Link text
    </ExternalLink>
  );
  expect(container).toMatchSnapshot();
});

test("renders correct structure with HTML children", () => {
  const { container } = render(
    <ExternalLink link="#" title="title-prop">
      <div>inner div</div>
    </ExternalLink>
  );
  expect(container).toMatchSnapshot();
});
