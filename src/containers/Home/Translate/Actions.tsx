import { Copy, Trash, Volume } from "@/components/Icons/regular";
import { useCopyToClipboard } from "usehooks-ts";

type Props = {
  text: string;
  handleDelete?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function Actions({ text, handleDelete }: Props) {
  const [copiedText, copy] = useCopyToClipboard();

  const handleCopy = () => () => {
    copy(text)
      .then(() => {
        console.log("Copied!", { text });
      })
      .catch((error) => {
        console.error("Failed to copy!", error);
      });
  };

  return (
    <div className="absolute bottom-0 end-0 flex gap-2 p-3 z-[3]">
      <div className="tooltip" data-tip="حذف">
        <button
          className="btn btn-xs btn-circle text-base-content/40"
          onClick={handleDelete}
        >
          <Trash className="w-4 h-4" />
        </button>
      </div>

      <div className="tooltip" data-tip="کپی">
        <button
          className="btn btn-xs btn-circle text-base-content/40"
          onClick={handleCopy}
        >
          <Copy className="w-4 h-4" />
        </button>
      </div>
      <div className="tooltip" data-tip="صدا">
        <button className="btn btn-xs btn-circle text-base-content/40">
          <Volume className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
