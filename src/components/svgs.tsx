export const Triangle = (props) => {
  const { id, style, className } = props;
  return (
    <>
      {id === 0 ? (
        <svg
          width="118"
          height="102"
          viewBox="0 0 120 102"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          style={style}
          className={`${className} customIcon`}
        >
          <path d="M59 0L117.89 101.25H0.110271L59 0Z" />
        </svg>
      ) : id === 1 ? (
        <svg
          width="242"
          height="105"
          viewBox="0 0 242 105"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          style={style}
          className={`${className} customIcon`}
        >
          <path d="M59.5 0H179.5L242 105H0L59.5 0Z" />
        </svg>
      ) : //   : id === 2 ? (
      //     <svg
      //       width="242"
      //       height="105"
      //       viewBox="0 0 242 105"
      //       fill="currentColor"
      //       xmlns="http://www.w3.org/2000/svg"
      //       style={style}
      //       className={`${className} customIcon`}
      //     >
      //       <path d="M59.5 0H179.5L242 105H0L59.5 0Z" />
      //     </svg>
      //   )
      id === 2 ? (
        <svg
          width="362"
          height="105"
          viewBox="0 0 362 105"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          style={style}
          className={`${className} customIcon`}
        >
          <path d="M61 0H302.5L362 105H0L61 0Z" />
        </svg>
      ) : id === 3 ? (
        <svg
          width="484"
          height="105"
          viewBox="0 0 484 105"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          style={style}
          className={`${className} customIcon`}
        >
          <path d="M61.5 0H424L484 105H0.5L61.5 0Z" />
        </svg>
      ) : id === 4 ? (
        <svg
          width="607"
          height="105"
          viewBox="0 0 607 105"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          style={style}
          className={`${className} customIcon`}
        >
          <path d="M61.5 0H545.5L606.5 105H0L61.5 0Z" />
        </svg>
      ) : (
        <div></div>
      )}
    </>
  );
};
