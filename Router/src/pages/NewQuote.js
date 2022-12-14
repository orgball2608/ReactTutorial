import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

const NewQuote = () => {
  const history = useHistory();
  const { sendRequest, status } = useHttp(addQuote);

  useEffect(() => {
    if (status == "completed") {
      history.push("/quotes");
    }
  }, [status]);

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
