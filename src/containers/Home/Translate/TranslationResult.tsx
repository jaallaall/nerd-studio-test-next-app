import { Option } from "@/Interfaces";
import Dropdown from "@/components/Dropdown";
import SelectInput from "@/components/FormControl/SelectInput";
import { useState } from "react";
import Actions from "./Actions";
import { options } from "./data";

type Props = {
  text: string;
  setToLang: (e: Option) => void;
  handleDelete: React.MouseEventHandler<HTMLButtonElement>;
  transLangs: Option[];
  setTransLangs: (e: Option[]) => void;
  toLang: Option;
};

export default function TranslationResult({
  text,
  setToLang,
  handleDelete,
  transLangs,
  setTransLangs,
  toLang,
}: Props) {
  // const [langs, setLangs] = useState(defaultLang);
  const [active, setActive] = useState(0);

  const handleClick = (item: Option) => {
    // setActive(index);
    setToLang(item);

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
    const arr = [...transLangs];
    if (!arr.includes(e)) {
      arr.unshift(e);
      arr.pop();
      setTransLangs(arr);
    }
    setToLang(e);
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

  const index = options.findIndex((item) => item.value === toLang?.value);

  return (
    <div>
      <div className="flex space-x-1 space-x-reverse mb-3 items-center">
        {transLangs.map((item) => {
          return (
            <button
              onClick={() => handleClick(item)}
              className={`btn py-0 h-9 border border-base-content/20 hover:bg-primary hover:text-primary-content ${
                options[index]?.value === item.value
                  ? "bg-primary text-primary-content active-tranlation-result"
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
            value={toLang}
            defaultValue={transLangs[0]}
            isOptionSelected={options[index]}
            placeholder="جستجو"
            formatOptionLabel={formatOptionLabel}
          />
        </Dropdown>
      </div>
      <div className="flex relative">
        <div className="border text-sm border-base-content/20 w-full rounded-lg bg-base-200 min-h-72 p-4 text-base-content/50">
          {text ? text : <span>ترجمه</span>}
        </div>
        <Actions text={text} handleDelete={handleDelete} />
      </div>
    </div>
  );
}
