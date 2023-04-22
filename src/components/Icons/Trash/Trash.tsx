import { SVGProps } from "react";

const TrashIcon = ({ ...props }: SVGProps<SVGSVGElement>) => {
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
        d="M20.25 4.5H15.75V3.375C15.75 2.87772 15.5525 2.40081 15.2008 2.04917C14.8492 1.69754 14.3723 1.5 13.875 1.5H10.125C9.62772 1.5 9.15081 1.69754 8.79917 2.04917C8.44754 2.40081 8.25 2.87772 8.25 3.375V4.5H3.75C3.55109 4.5 3.36032 4.57902 3.21967 4.71967C3.07902 4.86032 3 5.05109 3 5.25C3 5.44891 3.07902 5.63968 3.21967 5.78033C3.36032 5.92098 3.55109 6 3.75 6H4.54688L5.4375 20.2931C5.50406 21.5517 6.46875 22.5 7.6875 22.5H16.3125C17.5373 22.5 18.4828 21.5728 18.5625 20.2969L19.4531 6H20.25C20.4489 6 20.6397 5.92098 20.7803 5.78033C20.921 5.63968 21 5.44891 21 5.25C21 5.05109 20.921 4.86032 20.7803 4.71967C20.6397 4.57902 20.4489 4.5 20.25 4.5ZM9.02672 19.5H9C8.80563 19.5001 8.61881 19.4248 8.4789 19.2899C8.33899 19.1549 8.25692 18.971 8.25 18.7767L7.875 8.27672C7.86791 8.07781 7.94014 7.88423 8.07578 7.73856C8.21142 7.5929 8.39937 7.50709 8.59828 7.5C8.79719 7.49291 8.99077 7.56514 9.13644 7.70078C9.2821 7.83642 9.36791 8.02437 9.375 8.22328L9.75 18.7233C9.75357 18.8218 9.73769 18.92 9.70326 19.0124C9.66884 19.1048 9.61654 19.1894 9.54937 19.2616C9.48219 19.3337 9.40146 19.3919 9.31178 19.4328C9.2221 19.4737 9.12523 19.4966 9.02672 19.5ZM12.75 18.75C12.75 18.9489 12.671 19.1397 12.5303 19.2803C12.3897 19.421 12.1989 19.5 12 19.5C11.8011 19.5 11.6103 19.421 11.4697 19.2803C11.329 19.1397 11.25 18.9489 11.25 18.75V8.25C11.25 8.05109 11.329 7.86032 11.4697 7.71967C11.6103 7.57902 11.8011 7.5 12 7.5C12.1989 7.5 12.3897 7.57902 12.5303 7.71967C12.671 7.86032 12.75 8.05109 12.75 8.25V18.75ZM14.25 4.5H9.75V3.375C9.74943 3.3256 9.75875 3.27658 9.77739 3.23083C9.79604 3.18507 9.82364 3.14351 9.85857 3.10858C9.89351 3.07364 9.93507 3.04604 9.98083 3.02739C10.0266 3.00875 10.0756 2.99943 10.125 3H13.875C13.9244 2.99943 13.9734 3.00875 14.0192 3.02739C14.0649 3.04604 14.1065 3.07364 14.1414 3.10858C14.1764 3.14351 14.204 3.18507 14.2226 3.23083C14.2413 3.27658 14.2506 3.3256 14.25 3.375V4.5ZM15.75 18.7767C15.7431 18.971 15.661 19.1549 15.5211 19.2899C15.3812 19.4248 15.1944 19.5001 15 19.5H14.9728C14.8743 19.4965 14.7775 19.4736 14.6879 19.4327C14.5983 19.3917 14.5176 19.3335 14.4505 19.2614C14.3833 19.1893 14.3311 19.1046 14.2967 19.0123C14.2623 18.92 14.2464 18.8217 14.25 18.7233L14.625 8.22328C14.6285 8.12479 14.6514 8.02795 14.6923 7.9383C14.7332 7.84865 14.7914 7.76794 14.8636 7.70078C14.9357 7.63361 15.0203 7.58132 15.1127 7.54687C15.205 7.51242 15.3032 7.49649 15.4017 7.5C15.5002 7.50351 15.597 7.52638 15.6867 7.56732C15.7763 7.60825 15.8571 7.66644 15.9242 7.73856C15.9914 7.81069 16.0437 7.89534 16.0781 7.98767C16.1126 8.08001 16.1285 8.17823 16.125 8.27672L15.75 18.7767Z"
        fill={props.color ?? "#E1E1E6"}
      />
    </svg>
  );
};

export { TrashIcon };
