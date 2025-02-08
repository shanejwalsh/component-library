import { MyFirstComponent } from "./my-first-component";

const meta = {
  component: MyFirstComponent,
};

export default meta;

export const Default = {
  args: {
    title: "Eva is great!",
  },
};

export const ComponentWithALongTitle = {
  args: {
    title: "Eva is great and she is the best at loads of things!",
  },
};
