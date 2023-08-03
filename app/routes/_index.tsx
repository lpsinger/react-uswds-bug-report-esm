import type { V2_MetaFunction } from "@remix-run/node";
import { Button } from "@trussworks/react-uswds";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return <Button type="button">Hello, world</Button>;
}
