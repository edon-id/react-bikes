type appTitleProps = {
  title: string;
};

const AppTitle = ({ title }: appTitleProps) => {
  return (
    <div className="row bg-color">
      <div className="col-10 pt-4 offset-1 bg-white">
        <h1 className="mb-0 pb-3 border-bottom">{title}</h1>
      </div>
    </div>
  );
};

export default AppTitle;
