import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import FooterEventRegistrationScheduleItems from "./FooterEventRegistrationScheduleItems";
import FooterSocialShareItems from "./FooterSocialShareItems";

const Footer = () => {
  return (
    <div className="row bg-color">
      <div className="col-10 offset-1 pt-5 pb-5 bg-grey">
        <div className="row">
          <FooterSocialShareItems
            listSocialProp="Social share"
            listSocialDataProp={[
              faFacebookF,
              faInstagram,
              faTwitter,
              faLinkedin,
            ]}
          />
          <FooterEventRegistrationScheduleItems
            listTitleProp="Event info"
            listDataProp={[
              "Enter Now",
              "Event Info",
              "Course Maps",
              "Race Pack",
              "Results",
              "FAQs",
              "Am I Registered?",
            ]}
          />
          <FooterEventRegistrationScheduleItems
            listTitleProp="Registration"
            listDataProp={[
              "Volunteers",
              "Gallery",
              "Press",
              "Results",
              "Privacy Policy",
              "Service Plus",
              "Contacts",
            ]}
          />
          <FooterEventRegistrationScheduleItems
            listTitleProp="Schedule"
            listDataProp={[
              "Gallery",
              "About",
              "Videos",
              "Results",
              "FAQs",
              "Volunteers",
              "Contacts",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
