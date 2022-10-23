import React, { useState } from "react";

// Create current Year and populate it in getStaticProps
const getStaticProps = async () => {
  const currentYear = new Date().getFullYear();
  return {
    props: {
      currentYear
    }
  };
};

const Calendar = () => {
  const [value, onChange] = useState(new Date());
  return (
        <div>
        </div>
  );
};

export default Calendar;