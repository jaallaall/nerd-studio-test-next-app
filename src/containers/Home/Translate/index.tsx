"use client";

import { ArrowUpArrowDown } from "@/components/Icons/regular";
import { useState } from "react";
import TranslationPlace from "./TranslationPlace";
import TranslationResult from "./TranslationResult";
import { options } from "./data";
import { Option } from "@/Interfaces";

async function api(task: string, text: string) {
  const response = await fetch("https://api.deepseek.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer sk-2edf3225d23543e886476ededfe2d02a",
    },
    body: JSON.stringify({
      model: "deepseek-chat",
      //stream: true,
      messages: [
        {
          role: "system",
          content: task,
        },
        {
          role: "user",
          content: text,
        },
      ],
    }),
  });
  const json = await response.json();
  return json;
}

function translate(fromLang: string, toLang: string, text: string) {
  return api(`translate below text {Auto-${fromLang}} to {${toLang}}`, text);
}

function grammer(text: string) {
  return api(
    "Please rewrite below text in length {small} and format {message} in {English}",
    text
  );
}

function detectedLanguage(text: string) {
  return api(
    "Please identify the {language} of below text in one {word}",
    text
  );
}

const defaultLanguages = [options[0], options[1]];
const translateLanguages = [options[1], options[2], options[3]];

export default function Translate() {
  const [langs, setLangs] = useState(defaultLanguages);
  const [transLangs, setTransLangs] = useState(translateLanguages);
  const [message, setMessage] = useState("");
  const [fromLang, setFromLange] = useState(options[0]);
  const [toLang, setToLange] = useState(options[1]);

  const [updateLangs, setUpdateLangs] = useState<Option[]>([]);
  const [updateTransLangs, setUpdateTransLangs] = useState<Option[]>([]);
  //const [switchLang, setSwitchLang] = useState(false);

  let sendRequest = false;
  let timeOut: NodeJS.Timeout;
  const apiCallHandler = (e: React.FormEvent<HTMLTextAreaElement>) => {
    if (!sendRequest) {
      clearTimeout(timeOut);
      timeOut = setTimeout(function () {
        sendRequest = true;
        const value = (e.target as HTMLTextAreaElement).value;
        if (value != "") {
          translate(fromLang.value, toLang.value, value).then(function (
            response: any
          ) {
            setMessage(response.choices[0].message.content);
          });
        }
        sendRequest = false;
      }, 1000);
    }
  };

  const handleClickReverse = () => {
    const langsCopy = [...langs];
    const transLangsCopy = [...transLangs];

    //setSwitchLang(!switchLang);

    const dupLangs = langsCopy.some((item) => item.value === toLang.value);
    if (!dupLangs) {
      langsCopy.unshift(toLang);
      langsCopy.pop();
      setLangs(langsCopy);
    }
    setFromLange(toLang);

    const dupTrans = transLangsCopy.some(
      (item) => item.value === fromLang.value
    );
    if (!dupTrans) {
      transLangsCopy.unshift(fromLang);
      transLangsCopy.pop();
      setTransLangs(transLangsCopy);
    }
    setToLange(fromLang);
  };

  return (
    <div>
      <h3 className="mb-2">translate</h3>
      <TranslationPlace
        setFromLang={setFromLange}
        onInput={apiCallHandler}
        text={message}
        setLangs={setLangs}
        langs={langs}
        fromLang={fromLang}
      />
      <div className="flex justify-center pt-6">
        <button
          className="btn btn-circle text-base-content/40"
          onClick={handleClickReverse}
          disabled={fromLang.value === "Auto detect"}
        >
          <ArrowUpArrowDown className="w-5 h-5" />
        </button>
      </div>
      <TranslationResult
        text={message}
        setToLang={setToLange}
        handleDelete={() => setMessage("")}
        setTransLangs={setTransLangs}
        transLangs={transLangs}
        toLang={toLang}
      />
    </div>
  );
}
