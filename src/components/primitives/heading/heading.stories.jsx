import React from "react"
import Heading from "./heading"

export default {
  title: "Components/Heading",
  component: Heading,
  argTypes: {
    weight: {
      weight: [1, 2, 3],
      control: { type: "radio" },
    },
    color: {
      color: ["black", "red"],
      control: { type: "radio" },
    },
  },
}

export function Heading1(args) {
  return <Heading {...args}>Heading1</Heading>
}

Heading1.args = {
  weight: 1,
}

export function Heading2(args) {
  return <Heading {...args}>Heading2</Heading>
}

Heading2.args = {
  weight: 2,
}

export function Heading3(args) {
  return <Heading {...args}>Heading3</Heading>
}

Heading3.args = {
  weight: 3,
}

export function Description() {
  return (
    <div>
      <h2>Heading component</h2>
      <p>
        Generates the H tag with a &quot;weight&quot; parameter from 1 to 3.
      </p>
      <p>
        {" "}
        If another value of &quot;weight&quot; parameter is set generates the
        nearest value in the range from 1 to 3
      </p>
      <p>
        {" "}
        If &quot;plain&quot; parameter is set generates a div tag with the
        headingX class instead of the H tag
      </p>
      <p>
        {" "}
        &quot;Color&quot; parameter sets text color with one of values:
        &quot;black&quot;, &quot;red&quot;.
      </p>
    </div>
  )
}
