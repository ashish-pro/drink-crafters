import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Reusuable Components/Loader";
import Tooltip from "../Reusuable Components/Tooltip";
import CustomLink from "../Reusuable Components/CustomLink";

type Props = {};

type Cocktail = {
  Name: string;
  Tags: string;
  Glass: string;
  Category: string;
  Alcoholic: string;
  Instructions: string[];
  DrinkImage: string;
  Ingredients: string[];
};

const SortByIdURL: string =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export default function CocktailPage({}: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [cocktail, setCocktail] = useState<Cocktail[]>([]);

  const { id } = useParams();

  const FetchCocktailsById = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${SortByIdURL}${id}`);
      const {
        data: { drinks },
      } = response;

      const {
        strTags,
        strDrink,
        strCategory,
        strAlcoholic,
        strGlass,
        strInstructions,
        strDrinkThumb,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
        strIngredient6,
        strIngredient7,
        strIngredient8,
        strIngredient9,
        strIngredient10,
        strIngredient11,
        strIngredient12,
        strIngredient13,
        strIngredient14,
        strIngredient15,
      } = drinks[0];

      // Spliting Plain Instructions String into a Array of String
      const newInstruction: string[] = strInstructions
        .split(".")
        .map((point: string) => point.trim())
        .filter((points: string) => points !== "");

      // Renaming and Assigning all the destructed value to simple name and a object
      const FilteredCocktail: Cocktail = {
        Name: strDrink,
        Tags: strTags,
        Glass: strGlass,
        Category: strCategory,
        Alcoholic: strAlcoholic,
        Instructions: newInstruction,
        DrinkImage: strDrinkThumb,
        Ingredients: [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
          strIngredient6,
          strIngredient7,
          strIngredient8,
          strIngredient9,
          strIngredient10,
          strIngredient11,
          strIngredient12,
          strIngredient13,
          strIngredient14,
          strIngredient15,
        ],
      };

      setCocktail([FilteredCocktail]);
      document.title = `Siplore - ${FilteredCocktail.Name}`;
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error Fetching Cocktail: ", error);
    }
  };

  useEffect(() => {
    FetchCocktailsById();
  }, [id]);

  if (isLoading)
    return (
      <Loader
        className="place-content-center min-h-[88dvh]"
        LoaderType="loading-spinner"
      />
    );

  return (
    <main className="max-w-[1440px] mx-auto px-4 py-10 sm:px-6 lg:px-12 space-y-8 xl:px-20">
      <div className="slide-top">
        <CustomLink
          onClick={() => (document.title = "Siplore")}
          RippleColor="hsl(var(--n) / 0.2)"
          pathTo="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          Go Back
        </CustomLink>
      </div>
      <div className="slide-top flex flex-col-reverse sm:flex-col md:flex-row gap-6 sm:gap-10 md:gap-4 lg:gap-10">
        <div className="flex-1 bg-base-200 shadow-sm px-4 py-6 sm:p-6 lg:p-8 xl:p-10 rounded-lg space-y-8">
          {/* Header  */}
          <div className="">
            <div className="mr-3">
              <span className="text-lg rounded-full bg-base-300 text-base-content font-normal px-3 pb-1 pt-0.5 capitalize">
                {cocktail[0].Category}
              </span>
            </div>
            <h1 className="mt-4 mb-3 text-2xl font-bold tracking-tight text-base-content sm:text-4xl">
              {cocktail[0].Name}
            </h1>
            <div className="flex items-center">
              <p className="text-lg text-base-content text-opacity-60 capitalize border-r border-base-content border-opacity-20 pr-3.5">
                {cocktail[0].Glass}
              </p>
              <Tooltip
                className="tooltip-right"
                toolTipText={cocktail[0].Alcoholic}
              >
                <div
                  className={`border-2 w-fit p-1 ml-3.5 ${
                    cocktail[0].Alcoholic === "Alcoholic"
                      ? "border-error"
                      : "border-success"
                  }`}
                >
                  <div
                    className={`w-2 h-2  rounded-full ${
                      cocktail[0].Alcoholic === "Alcoholic"
                        ? "bg-error"
                        : "bg-success"
                    }`}
                  ></div>
                </div>
              </Tooltip>
            </div>
          </div>
          {/* Instruction  */}
          <div>
            <h2 className="mb-3 text-xl font-medium tracking-tight text-base-content sm:text-2xl">
              Instructions
            </h2>
            <ul className="list-disc px-6">
              {cocktail[0].Instructions.map((order, index) => {
                return (
                  <li key={index} className="text-base text-base-content">
                    {order}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Ingredients Badges  */}
          <div>
            <h2 className="mb-3 text-xl font-medium tracking-tight text-base-content sm:text-2xl">
              Ingredients
            </h2>
            <div className="flex items-center gap-3 gap-y-4 flex-wrap pl-2">
              {cocktail[0].Ingredients.map((item, index) => {
                return (
                  <span
                    className={`${
                      item !== null
                        ? "bg-primary text-primary-content rounded-full px-3 py-1 font-medium text-sm"
                        : "hidden"
                    } `}
                    key={index}
                  >
                    {item}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        {/* Image  */}
        <div className="relative flex-1">
          <img
            className="rounded-xl shadow-sm h-full max-h-[540px] object-cover"
            src={cocktail[0].DrinkImage}
            alt={cocktail[0].Name + " Image"}
          />
        </div>
      </div>
    </main>
  );
}
