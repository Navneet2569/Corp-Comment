import FeedbackItem from "../feedback/FeedbackItem";
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";
import { useFeedbackItemsStore } from "../../stores/feedbackItemsStore";

function FeedbackList() {
  const isLoading = useFeedbackItemsStore((state) => state.isLoading);
  const filteredFeedbackItems = useFeedbackItemsStore((state) =>
    state.filteredFeedbackItems()
  );
  const errorMessage = useFeedbackItemsStore((state) => state.errorMessage);

  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}
      {errorMessage && <ErrorMessage message={errorMessage} />}
      {filteredFeedbackItems.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}

export default FeedbackList;
