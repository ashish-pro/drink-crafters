import { FormEvent, ChangeEvent, useState } from "react";
import { useGlobalContext } from "../../context/Context";
import Button from "../../Reusuable Components/Button";

type SearchBarProps = {};

export default function SearchBar({}: SearchBarProps) {
  const { setSearchTerm, setShowAlert, showAlert } = useGlobalContext();
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    inputValue ? setSearchTerm(inputValue) : setShowAlert(true);
  };

  return (
    <div
      id="SearchBar"
      className="slide-top mx-auto w-full lg:w-[35rem] max-w-lg px-4"
    >
      <form onSubmit={handleSubmit}>
        <div
          className={`${
            showAlert
              ? "shake relative border-error"
              : "inputBox border-primary-focus border-opacity-25"
          }  flex bg-base-100 border-2 shadow-md gap-2 py-2 px-2 transition-all rounded-full items-center justify-between`}
        >
          <input
            type="text"
            value={inputValue}
            placeholder="Search By First Letter"
            className="input font-medium text-base capitalize input-ghost focus-visible:outline-none w-full"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setInputValue(e.target.value)
            }
          />
          <Button className="max-[400px]:indent-[-9999px] max-[400px]:gap-0 max-[400px]:py-2 max-[400px]:px-3 rounded-3xl bg-base-200 active:bg-neutral-focus active:text-neutral-content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            Search
          </Button>
        </div>
      </form>
    </div>
  );
}
