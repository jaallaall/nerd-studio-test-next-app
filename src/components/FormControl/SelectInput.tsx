import clsx from "clsx";
import Select, {
  components,
  DropdownIndicatorProps,
  GroupBase,
  Props,
} from "react-select";
import { MagnifyingGlass } from "../Icons/regular";

const controlStyles = {
  base: "select select-bordered w-full ps-0 pe-8 leading-[normal]",
};
const containerStyle = "w-full ";
const placeholderStyles = "text-base-content pl-1 py-0.5";
const selectInputStyles = "pl-1 py-0.5";
const valueContainerStyles = "ps-3 pe-1 gap-1 !flex-nowrap";
const singleValueStyles = "leading-7 ml-1 [&_span:last-child]:hidden";
const multiValueStyles =
  "bg-base-200 rounded-lg items-center py-0.5 pl-2 pr-1 gap-1.5 !min-w-min";
const multiValueLabelStyles = "leading-6 py-0.5";
const multiValueRemoveStyles =
  "bg-base-conetnt/10 hover:border-base-conetnt/10 rounded-md";
// const indicatorsContainerStyles = "p-1 gap-1";
const clearIndicatorStyles = "text-base-conetnt/10 p-1 rounded-md";
const indicatorSeparatorStyles = "bg-base-content/20";
const dropdownIndicatorStyles =
  "p-1 text-base-conetnt/10 rounded-md hover:text-base-content/50";
const menuStyles = "mt-2 text-sm !relative";
const groupHeadingStyles = "ml-3 mt-2 mb-1 text-base-conetnt/10";
const optionStyles = {
  base: "hover:cursor-pointer px-3 py-2 rounded flex items-center",
  focus: "bg-base-200 active:bg-base-300",
  selected:
    "selectedOption [&_.selected]:after:content-['✔'] [&_.selected]:after:inline-block [&_.selected]:after:ms-1 [&_.selected]:after:ml-2 [&_.selected]:after:text-green-500 text-base-conetnt/10",
};
const menuListStyles =
  "[&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-base-200 [&::-webkit-scrollbar-thumb]:bg-base-300";
const noOptionsMessageStyles =
  "text-base-conetnt/30 p-2 bg-base-200 rounded-sm";
const loadingMessageStyle = "text-base-conetnt/30 p-2 bg-base-200 rounded-sm";

const DropdownIndicator = (props: DropdownIndicatorProps) => {
  return (
    <components.DropdownIndicator {...props}>
      <MagnifyingGlass className="w-4 h-4" />
    </components.DropdownIndicator>
  );
};

export default function SelectInput<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(props: Props<Option, IsMulti, Group>) {
  return (
    <div className="w-full relative">
      <Select
        {...props}
        menuIsOpen
        // components={{ DropdownIndicator }}
        closeMenuOnSelect={props.isMulti ? false : true}
        noOptionsMessage={() => "موردی وجود ندارد"}
        unstyled
        styles={{
          control: (base, state) => ({
            ...base,
            outlineOffset: 2,
            outline: state.isFocused
              ? "2px solid var(--fallback-bc,oklch(var(--bc)/0.2))"
              : "",
          }),
        }}
        classNames={{
          control: () => controlStyles.base,
          container: () => containerStyle,
          placeholder: () => placeholderStyles,
          input: () => selectInputStyles,
          valueContainer: () => valueContainerStyles,
          singleValue: () => singleValueStyles,
          multiValue: () => multiValueStyles,
          multiValueLabel: () => multiValueLabelStyles,
          multiValueRemove: () => multiValueRemoveStyles,
          indicatorsContainer: () => "!hidden",
          clearIndicator: () => clearIndicatorStyles,
          indicatorSeparator: () => indicatorSeparatorStyles,
          dropdownIndicator: () => dropdownIndicatorStyles,
          menu: () => menuStyles,
          groupHeading: () => groupHeadingStyles,
          option: ({ isFocused, isSelected }) =>
            clsx(
              isFocused && optionStyles.focus,
              isSelected && !props.getOptionLabel && optionStyles.selected,
              optionStyles.base
            ),
          noOptionsMessage: () => noOptionsMessageStyles,
          loadingMessage: () => loadingMessageStyle,
          menuList: () => menuListStyles,
        }}
      />
    </div>
  );
}
