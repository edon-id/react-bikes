export type SingleListProps = {
  title: string;
  value: string | number;
  activeBG: string;
  active: string;
  handleFiltering: React.MouseEventHandler<HTMLLIElement>;
};

const SingleListItem = (props: SingleListProps) => {
  return (
    <li
      onClick={props.handleFiltering}
      key={props.title}
      className={`links mb-3 d-flex justify-content-between ${props.active} list-elements align-items-start`}
    >
      <div className="ms-2 me-auto">
        <div className="link-text">{props.title}</div>
      </div>
      <span
        className={`badge badges text-dark ${props.activeBG} rounded-pill male-num`}
      >
        {props.value}
      </span>
    </li>
  );
};

export default SingleListItem;
