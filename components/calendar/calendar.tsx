import { FC, useState } from "react";

// Create current Year and populate it in getStaticProps
const getStaticProps = async (): Promise<any> => {
  const currentYear = new Date().getFullYear();
  return {
    props: {
      currentYear,
    },
  };
};

const Calendar: FC = () => {
  const [value, onChange] = useState(new Date());
  return <div></div>;
};

export default Calendar;
