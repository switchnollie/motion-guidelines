import React, { FormEvent } from "react";

interface Props {
  value: any;
  onChange: (e: FormEvent, value: any) => void;
  children: JSX.Element | JSX.Element[];
  disabled?: boolean;
}

export default function SelectionDecorator({
  value,
  onChange,
  disabled,
  children: childrenProp,
  ...props
}: Props) {
  let childIndex = 0;
  const children = React.Children.map(
    childrenProp,
    (child: React.ReactNode) => {
      if (!React.isValidElement(child)) {
        return null;
      }
      const childValue =
        child.props.value === undefined ? childIndex : child.props.value;
      const selected = childValue === value;
      childIndex += 1;
      return React.cloneElement(child, {
        selected,
        onChange,
        disabled,
        value: childValue
      });
    }
  );

  return <>{children}</>;
}
