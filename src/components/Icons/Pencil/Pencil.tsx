import React from "react";
import { SVGProps } from "react";

const PencilIcon = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={props.width ?? "24"}
      height={props.height ?? "24"}
      viewBox={props.viewBox ?? "0 0 24 24"}
      {...props}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.8091 5.02852C17.0828 5.02835 17.3454 5.13701 17.5389 5.33056L18.6686 6.46025C18.8621 6.6538 18.9708 6.91637 18.9706 7.19009C18.9705 7.46381 18.8615 7.72624 18.6677 7.91955L5.8802 20.6756C5.78438 20.7712 5.67069 20.847 5.54561 20.8987L3.67436 21.6717C3.28919 21.8308 2.84611 21.7424 2.55144 21.4477C2.25676 21.153 2.1684 20.71 2.32751 20.3248L3.10047 18.4536C3.15214 18.3285 3.22793 18.2148 3.32351 18.119L16.0796 5.33146C16.2729 5.13767 16.5353 5.02869 16.8091 5.02852Z"
        fill={props.color ?? "#E1E1E6"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.2185 2.38737C19.4375 2.29664 19.6722 2.24994 19.9093 2.24994C20.1464 2.24994 20.3811 2.29664 20.6002 2.38737C20.8192 2.47809 21.0182 2.61106 21.1858 2.77869L21.1858 2.77873L21.2212 2.81412C21.5595 3.15261 21.7495 3.61156 21.7495 4.09008C21.7495 4.5686 21.5595 5.02755 21.2212 5.36604L20.6683 5.91897C20.2656 6.3217 19.6126 6.3217 19.2099 5.91897L18.0802 4.78928C17.8867 4.59583 17.7781 4.33344 17.7781 4.05986C17.7782 3.78628 17.887 3.52394 18.0805 3.33057L18.6328 2.77873C18.6329 2.77866 18.6329 2.77858 18.633 2.77851L18.6332 2.77838C18.8007 2.6109 18.9996 2.47804 19.2185 2.38737Z"
        fill={props.color ?? "#E1E1E6"}
      />
    </svg>
  );
};

export { PencilIcon };
