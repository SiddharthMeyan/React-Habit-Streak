import React, { useEffect, useState } from "react";
import data from "./data.json";
const Quotes = () => {
  const [genQuote, setGenQuote] = useState("");
  const key = "42127fa423c5bb465f69f156c91c998310fcc6a9";
  const myQuote = async () => {
    // ************************IF YOU NEED TO GET QUOTES FROM API CALLS*****************************************
    // const quote = await fetch(
    //   "https://api.paperquotes.com/quotes?tags=drive&language=en",
    //   {
    //     method: "GET",
    //     headers: {
    //       authorization: `Token ${key}`,
    //     },
    //   }
    // ).then((res) => res.json());
    // setGenQuote(quote.results[0].quote);

    // *********************************************************************************************************

    // ************QUOTES FROM LOCAL FILE****************

    const newArray = newdata.map((value) => value);
    let randNum = Math.floor(Math.random() * 100);
    console.log(newArray[1].quote);
    setGenQuote(newArray[randNum].quote);
  };

  const newdata = data.quotes;

  useEffect(() => {
    myQuote();
  }, []);

  return <p>"{genQuote}"</p>;
};

export default Quotes;
