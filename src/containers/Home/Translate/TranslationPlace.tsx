import { Option } from "@/Interfaces";
import Dropdown from "@/components/Dropdown";
import SelectInput from "@/components/FormControl/SelectInput";
import { useRef, useState } from "react";
import Actions from "./Actions";
import { options } from "./data";

type Props = {
  setFromLang: (e: Option) => void;
  onInput: React.FormEventHandler<HTMLTextAreaElement>;
  text: string;
  langs: Option[];
  fromLang?: Option;
  setLangs: (e: Option[]) => void;
};

export default function TranslationPlace({
  setFromLang,
  onInput,
  text,
  langs,
  setLangs,
  fromLang,
}: Props) {
  const autoDetect = { value: "Auto detect", label: "Auto-detect" };
  const ref = useRef<HTMLTextAreaElement>(null);

  const [active, setActive] = useState(1);

  const handleClick = (item: Option) => {
    // setActive(index);
    setFromLang(item);

    setTimeout(() => {
      const selectedEl = document.querySelector(".selectedOption");
      if (selectedEl) {
        selectedEl.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "start",
        });
      }
    }, 15);
  };

  const handleChange = (e: any) => {
    const arr = [...langs];

    if (!arr.includes(e)) {
      arr.unshift(e);
      arr.pop();
      setLangs(arr);
    }

    setFromLang(e);
  };

  const handleEmpty = () => {
    (ref.current as HTMLTextAreaElement).value = "";
  };

  const formatOptionLabel = ({
    value,
    label,
  }: {
    value: string;
    label: string;
  }) => (
    <>
      <span className="selected">{value}</span>
      <span className="block text-base-content/50">{label}</span>
    </>
  );

  const index = options.findIndex((item) => item.value === fromLang?.value);

  return (
    <div>
      <div className="flex space-x-1 space-x-reverse mb-3 items-center">
        <button
          onClick={() => handleClick(autoDetect)}
          className={`btn py-0 h-9 border border-base-content/20 hover:bg-primary hover:text-primary-content ${
            !options[index]?.value
              ? "bg-primary text-primary-content active-tranlation"
              : ""
          }`}
        >
          {autoDetect.value}
        </button>
        {langs.map((item, i) => {
          return (
            <button
              onClick={() => handleClick(item)}
              className={`btn py-0 h-9 border border-base-content/20 hover:bg-primary hover:text-primary-content ${
                options[index]?.value === item.value
                  ? "bg-primary text-primary-content active-tranlation"
                  : ""
              }`}
              key={item.value}
            >
              {item.value}
            </button>
          );
        })}
        <Dropdown>
          <SelectInput
            options={options}
            onChange={handleChange}
            value={fromLang}
            defaultValue={langs[0]}
            isOptionSelected={options[index]}
            placeholder="جستجو"
            formatOptionLabel={formatOptionLabel}
          />
        </Dropdown>
      </div>
      <div className="flex relative">
        <textarea
          onInput={onInput}
          className="textarea textarea-bordered w-full rounded-lg bg-base-200"
          placeholder="متن را وارد کنید"
          rows={8}
          ref={ref}
        ></textarea>
        <Actions text={text} handleDelete={handleEmpty} />
      </div>
    </div>
  );
}
