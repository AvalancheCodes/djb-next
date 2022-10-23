import { FC } from "react";

interface IProps {
  classList: string;
}

const DottedRectangle: FC<IProps> = ({ classList }) => {
  return (
    // Original classList: "d-none d-lg-block mb-7"
    <figure className={classList}>
      <svg
        width="211"
        height="102"
        viewBox="0 0 172 83"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="stroke-primary stroke-10 fill-none"
          d="m162.84 76.66c0-1.85 1.5-3.34 3.34-3.34 1.85 0 3.34 1.5 3.34 3.34s-1.5 3.34-3.34 3.34-3.34-1.5-3.34-3.34z"
        />
        <path
          className="stroke-primary stroke-10 fill-none"
          d="m145.05 76.66c0-1.85 1.5-3.34 3.34-3.34s3.34 1.5 3.34 3.34-1.49 3.34-3.33 3.34-3.35-1.5-3.35-3.34z"
        />
        <path
          className="stroke-primary stroke-10 fill-none"
          d="m127.26 76.66c0-1.85 1.5-3.34 3.34-3.34s3.34 1.5 3.34 3.34-1.5 3.34-3.34 3.34-3.34-1.5-3.34-3.34z"
        />
        <path
          className="stroke-primary stroke-10 fill-none"
          d="m109.47 76.66c0-1.85 1.5-3.34 3.34-3.34s3.34 1.5 3.34 3.34-1.5 3.34-3.34 3.34-3.34-1.5-3.34-3.34z"
        />
        <circle
          className="stroke-primary stroke-10 fill-none"
          cx="95.03"
          cy="76.66"
          r="3.34"
        />
        <path
          className="stroke-primary stroke-10 fill-none"
          d="m73.89 76.66c0-1.85 1.5-3.34 3.34-3.34s3.34 1.5 3.34 3.34-1.49 3.34-3.33 3.34-3.35-1.5-3.35-3.34z"
        />
        <path
          className="stroke-primary stroke-10 fill-none"
          d="m56.1 76.66c0-1.85 1.5-3.34 3.34-3.34s3.34 1.5 3.34 3.34-1.49 3.34-3.33 3.34-3.35-1.5-3.35-3.34z"
        />
        <path
          className="stroke-primary stroke-10 fill-none"
          d="m38.31 76.66c0-1.85 1.5-3.34 3.34-3.34s3.35 1.49 3.35 3.34-1.5 3.34-3.34 3.34-3.35-1.5-3.35-3.34z"
        />
        <circle
          className="stroke-primary stroke-10 fill-none"
          cx="23.87"
          cy="76.66"
          r="3.34"
        />
        <circle
          className="stroke-primary stroke-10 fill-none"
          cx="6.08"
          cy="76.66"
          r="3.34"
        />
        <path
          className="stroke-primary stroke-10 fill-none"
          d="m162.84 58.92c0-1.85 1.5-3.34 3.34-3.34 1.85 0 3.34 1.5 3.34 3.34s-1.5 3.34-3.34 3.34-3.34-1.5-3.34-3.34z"
        />
        <path
          className="stroke-primary stroke-10 fill-none"
          d="m145.05 58.92c0-1.85 1.5-3.34 3.34-3.34s3.34 1.5 3.34 3.34-1.5 3.34-3.34 3.34-3.34-1.5-3.34-3.34z"
        />
        <path
          className="stroke-primary stroke-10 fill-none"
          d="m127.26 58.92c0-1.85 1.5-3.34 3.34-3.34s3.34 1.5 3.34 3.34-1.5 3.34-3.34 3.34-3.34-1.5-3.34-3.34z"
        />
        <path
          className="stroke-primary stroke-10 fill-none"
          d="m109.47 58.92c0-1.85 1.5-3.34 3.34-3.34s3.34 1.5 3.34 3.34-1.5 3.34-3.34 3.34-3.34-1.5-3.34-3.34z"
        />
        <circle
          className="stroke-primary stroke-10 fill-none"
          cx="95.03"
          cy="58.92"
          r="3.34"
        />
        <path
          className="stroke-primary stroke-10 fill-none"
          d="m73.89 58.92c0-1.85 1.5-3.34 3.34-3.34s3.34 1.5 3.34 3.34-1.5 3.34-3.34 3.34-3.34-1.5-3.34-3.34z"
        />
        <path
          className="stroke-primary stroke-10 fill-none"
          d="m56.1 58.92c0-1.85 1.5-3.34 3.34-3.34s3.34 1.5 3.34 3.34-1.5 3.34-3.34 3.34-3.34-1.5-3.34-3.34z"
        />
        <path
          className="stroke-primary stroke-10 fill-none"
          d="m38.31 58.92c0-1.85 1.5-3.34 3.34-3.34s3.35 1.49 3.35 3.34-1.5 3.34-3.34 3.34-3.35-1.5-3.35-3.34z"
        />
        <circle
          className="stroke-primary stroke-10 fill-none"
          cx="23.87"
          cy="58.92"
          r="3.34"
        />
        <circle
          className="stroke-primary stroke-10 fill-none"
          cx="6.08"
          cy="58.92"
          r="3.34"
        />
        <path
          className="stroke-primary stroke-10 fill-none"
          d="m162.84 41.18c0-1.85 1.5-3.34 3.34-3.34 1.85 0 3.34 1.5 3.34 3.34s-1.5 3.34-3.34 3.34-3.34-1.5-3.34-3.34z"
        />
        <path
          className="stroke-primary stroke-10 fill-none"
          d="m145.05 41.18c0-1.85 1.5-3.34 3.34-3.34s3.34 1.5 3.34 3.34-1.5 3.34-3.34 3.34-3.34-1.5-3.34-3.34z"
        />
        <path
          className="stroke-primary stroke-10 fill-none"
          d="m127.26 41.18c0-1.85 1.5-3.34 3.34-3.34s3.34 1.5 3.34 3.34-1.5 3.34-3.34 3.34-3.34-1.5-3.34-3.34z"
        />
        <path
          className="stroke-primary stroke-10 fill-none"
          d="m109.47 41.18c0-1.85 1.5-3.34 3.34-3.34s3.34 1.5 3.34 3.34-1.5 3.34-3.34 3.34-3.34-1.5-3.34-3.34z"
        />
        <circle
          className="stroke-primary stroke-10 fill-none"
          cx="95.03"
          cy="41.18"
          r="3.34"
        />
        <path
          className="stroke-primary stroke-10 fill-none"
          d="m73.89 41.18c0-1.85 1.5-3.34 3.34-3.34s3.34 1.5 3.34 3.34-1.5 3.34-3.34 3.34-3.34-1.5-3.34-3.34z"
        />
        <path
          className="stroke-primary stroke-10 fill-none"
          d="m56.1 41.18c0-1.85 1.5-3.34 3.34-3.34s3.34 1.5 3.34 3.34-1.5 3.34-3.34 3.34-3.34-1.5-3.34-3.34z"
        />
        <path
          className="stroke-primary stroke-10 fill-none"
          d="m38.31 41.18c0-1.85 1.5-3.34 3.34-3.34s3.35 1.49 3.35 3.34-1.5 3.34-3.34 3.34-3.35-1.5-3.35-3.34z"
        />
        <circle
          className="stroke-primary stroke-10 fill-none"
          cx="23.87"
          cy="41.18"
          r="3.34"
        />
        <circle
          className="stroke-primary stroke-10 fill-none"
          cx="6.08"
          cy="41.18"
          r="3.34"
        />
        <path
          className="stroke-primary stroke-10 fill-none"
          d="m162.84 23.44c0-1.85 1.5-3.34 3.34-3.34 1.85 0 3.34 1.5 3.34 3.34 0 1.85-1.5 3.34-3.34 3.34s-3.34-1.49-3.34-3.34z"
        />
        <path
          className="stroke-primary stroke-10 fill-none"
          d="m145.05 23.44c0-1.85 1.5-3.34 3.34-3.34s3.34 1.5 3.34 3.34c0 1.85-1.5 3.34-3.34 3.34s-3.34-1.49-3.34-3.34z"
        />
        <path
          className="stroke-primary stroke-10 fill-none"
          d="m127.26 23.44c0-1.85 1.5-3.34 3.34-3.34s3.34 1.5 3.34 3.34c0 1.85-1.5 3.34-3.34 3.34s-3.34-1.49-3.34-3.34z"
        />
        <path
          className="stroke-primary stroke-10 fill-none"
          d="m109.47 23.44c0-1.85 1.5-3.34 3.34-3.34s3.34 1.5 3.34 3.34c0 1.85-1.5 3.34-3.34 3.34s-3.34-1.49-3.34-3.34z"
        />
        <path
          className="stroke-primary stroke-10 fill-none"
          d="m91.68 23.44c0-1.85 1.5-3.34 3.34-3.34s3.34 1.5 3.34 3.34c0 1.85-1.5 3.34-3.34 3.34s-3.34-1.49-3.34-3.34z"
        />
        <path
          className="stroke-primary stroke-10 fill-none"
          d="m73.89 23.44c0-1.85 1.5-3.34 3.34-3.34s3.34 1.5 3.34 3.34c0 1.85-1.5 3.34-3.34 3.34s-3.34-1.49-3.34-3.34z"
        />
        <path
          className="stroke-primary stroke-10 fill-none"
          d="m56.1 23.44c0-1.85 1.5-3.34 3.34-3.34s3.34 1.5 3.34 3.34c0 1.85-1.5 3.34-3.34 3.34s-3.34-1.49-3.34-3.34z"
        />
        <path
          className="stroke-primary stroke-10 fill-none"
          d="m38.31 23.44c0-1.85 1.5-3.34 3.34-3.34s3.35 1.49 3.35 3.34-1.5 3.34-3.34 3.34-3.35-1.49-3.35-3.34z"
        />
        <path
          className="stroke-primary stroke-10 fill-none"
          d="m20.52 23.44c0-1.85 1.5-3.34 3.34-3.34 1.85 0 3.34 1.5 3.34 3.34 0 1.85-1.5 3.34-3.34 3.34s-3.34-1.49-3.34-3.34z"
        />
        <path
          className="stroke-primary stroke-10 fill-none"
          d="m2.73 23.44c0-1.85 1.5-3.34 3.34-3.34s3.34 1.5 3.34 3.34c0 1.85-1.5 3.34-3.34 3.34s-3.34-1.49-3.34-3.34z"
        />
        <path
          className="stroke-primary stroke-10 fill-none"
          d="m162.84 5.7c0-1.85 1.5-3.34 3.34-3.34 1.85 0 3.34 1.5 3.34 3.34s-1.5 3.34-3.34 3.34-3.34-1.49-3.34-3.34z"
        />
        <path
          className="stroke-primary stroke-10 fill-none"
          d="m145.05 5.7c0-1.85 1.5-3.34 3.34-3.34s3.34 1.5 3.34 3.34-1.5 3.34-3.34 3.34-3.34-1.49-3.34-3.34z"
        />
        <path
          className="stroke-primary stroke-10 fill-none"
          d="m127.26 5.7c0-1.85 1.5-3.34 3.34-3.34s3.34 1.5 3.34 3.34-1.5 3.34-3.34 3.34-3.34-1.49-3.34-3.34z"
        />
        <path
          className="stroke-primary stroke-10 fill-none"
          d="m109.47 5.7c0-1.85 1.5-3.34 3.34-3.34s3.34 1.5 3.34 3.34-1.5 3.34-3.34 3.34-3.34-1.49-3.34-3.34z"
        />
        <ellipse
          className="stroke-primary stroke-10 fill-none"
          transform="matrix(.036 -.9994 .9994 .036 85.908 100.46)"
          cx="95.03"
          cy="5.7"
          rx="3.34"
          ry="3.34"
        />
        <path
          className="stroke-primary stroke-10 fill-none"
          d="m73.89 5.7c0-1.85 1.5-3.34 3.34-3.34s3.34 1.5 3.34 3.34-1.5 3.34-3.34 3.34-3.34-1.49-3.34-3.34z"
        />
        <path
          className="stroke-primary stroke-10 fill-none"
          d="m56.1 5.7c0-1.85 1.5-3.34 3.34-3.34s3.34 1.5 3.34 3.34-1.5 3.34-3.34 3.34-3.34-1.49-3.34-3.34z"
        />
        <path
          className="stroke-primary stroke-10 fill-none"
          d="M38.31,5.7c0-1.85,1.5-3.34,3.34-3.34S45,3.85,45,5.7s-1.5,3.34-3.34,3.34S38.31,7.55,38.31,5.7z"
        />
        <ellipse
          className="stroke-primary stroke-10 fill-none"
          transform="matrix(.0333 -.9994 .9994 .0333 17.374 29.364)"
          cx="23.87"
          cy="5.7"
          rx="3.34"
          ry="3.34"
        />
        <ellipse
          className="stroke-primary stroke-10 fill-none"
          transform="matrix(.0333 -.9994 .9994 .0333 .1775 11.584)"
          cx="6.08"
          cy="5.7"
          rx="3.34"
          ry="3.34"
        />
      </svg>
    </figure>
  );
};

export default DottedRectangle;
