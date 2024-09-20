type TitleProps = {
  title: string;
  subtitle: string;
  inverse?: boolean;
};

function Title(props: TitleProps) {
  return (
    <>
      <h6
        className={`py-3 lg:py-5 text-lg font-bold uppercase ${
          props.inverse ? "text-white" : "text-primary"
        }`}
      >
        {props.subtitle}
      </h6>
      <h1
        className={`max-w-xs lg:max-w-2xl mx-auto font-extrabold text-center text-3xl lg:text-5xl ${
          props.inverse ? "text-white" : "text-black"
        }`}
      >
        {props.title}
      </h1>
    </>
  );
}

export default Title;
