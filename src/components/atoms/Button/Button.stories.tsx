import { Button } from ".";
import { Bookmark, ArrowLeft } from "react-feather"; // Use any icon library

export default {
  title: "Atoms/Button",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  component: Button,
};

export const Primary = () => <Button variant="primary">submit</Button>;

export const Secondary = () => (
  <Button variant="secondary" iconLeft={Bookmark}>
    chip
  </Button>
);

export const White = () => (
  <Button variant="white" iconLeft={ArrowLeft}>
    back
  </Button>
);

export const Inverted = () => (
  <Button variant="inverted" iconLeft={Bookmark}>
    chip
  </Button>
);

export const Muted = () => (
  <Button variant="muted" iconLeft={Bookmark} disabled>
    chip
  </Button>
);

export const WithRightIcon = () => (
  <Button variant="primary" iconRight={Bookmark}>
    Save
  </Button>
);
