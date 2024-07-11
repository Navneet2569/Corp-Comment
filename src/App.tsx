import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";
import HashtagList from "./components/hashtag/HashtagList";
import { useEffect } from "react";
import { useFeedbackItemsStore } from "./stores/feedbackItemsStore";

function App() {
  const fetchfeedbackItems = useFeedbackItemsStore(
    (state) => state.fetchFeedbackItems
  );
  useEffect(() => {
    fetchfeedbackItems();
  }, [fetchfeedbackItems]);
  return (
    <div className="app">
      <Footer />
      <Container />
      <HashtagList />
    </div>
  );
}

export default App;
