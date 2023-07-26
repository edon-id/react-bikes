import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface FooterSocialListProps {
  listSocialProp: string;
  listSocialDataProp: IconDefinition[];
}

const FooterSocialShareItems = ({
  listSocialProp,
  listSocialDataProp,
}: FooterSocialListProps) => {
  return (
    <div className="col-3">
      <h3 className="fw-bold h5 mb-4">{listSocialProp}</h3>
      <ul className="social-share">
        {listSocialDataProp.map((icon, index) => (
          <li key={index}>
            <a href="#">
              <FontAwesomeIcon size="1x" className="icons" icon={icon} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterSocialShareItems;
