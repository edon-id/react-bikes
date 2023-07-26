interface FooterListProps {
  listTitleProp: string;
  listDataProp: string[];
}

const FooterEventRegistrationScheduleItems = ({
  listTitleProp,
  listDataProp,
}: FooterListProps) => {
  return (
    <div className="col-3 border-left">
      <h3 className="fw-bold h5 mb-4">{listTitleProp}</h3>
      <ul className="footerEvents">
        {listDataProp.map((data, index) => (
          <li key={index}>
            <a href="#">{data}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterEventRegistrationScheduleItems;
