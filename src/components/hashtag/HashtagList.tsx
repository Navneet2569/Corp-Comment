import { useFeedbackItemsStore } from "../../stores/feedbackItemsStore";
import HashtagItem from "./HashtagItem";

function HashtagList() {
  const companyList = useFeedbackItemsStore((state) => state.companyList());
  const handleSelectCompany = useFeedbackItemsStore(
    (state) => state.handleSelectCompany
  );
  return (
    <ul className="hashtags">
      {companyList.map((company) => (
        <HashtagItem company={company} onSelectCompany={handleSelectCompany} />
      ))}
    </ul>
  );
}

export default HashtagList;
