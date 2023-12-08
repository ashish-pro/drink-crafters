import Tooltip from "../../Reusuable Components/Tooltip";
import { Link } from "react-router-dom";
import useRipple from "use-ripple-hook";

type CocktailCardProps = {
  id: number;
  DrinkName: string;
  Alcoholic: string;
  DrinkImage: string;
  Category: string;
};

export default function CocktailCard({
  id,
  DrinkImage,
  DrinkName,
  Alcoholic,
  Category,
}: CocktailCardProps) {
  const [ripple, event] = useRipple({ color: "hsl(var(--n) / 0.2)" });
  return (
    <Link
      to={`/cocktail/${id}`}
      className="hover:-translate-y-2 hover:scale-[101%] transition-all duration-300 ease-in-out"
    >
      <article
        ref={ripple}
        onMouseDown={event}
        className="slide-top card w-full bg-base-200 shadow-xl rounded-[2rem] active:rounded-[2.5rem] active:scale-[99%] active:-translate-y-1 transition-all group hover:bg-base-300"
      >
        <figure className="p-2">
          <img
            src={DrinkImage}
            className="aspect-video object-cover rounded-3xl transition-all duration-300 ease-in-out group-active:rounded-[2rem]"
            alt={DrinkName + " Image"}
          />
        </figure>
        <div className="card-body gap-2 max-[350px]:p-3">
          <div className="flex justify-between items-center gap-4">
            <div className="space-y-2">
              <h2 className="card-title text-2xl xl:text-3xl ">{DrinkName}</h2>
              <p className="text-sm rounded-full bg-base-300 px-2 tracking-wide font-medium w-fit -ml-0.5">
                {Category}
              </p>
            </div>
            <Tooltip
              className="tooltip-left sm:tooltip-top"
              toolTipText={Alcoholic}
            >
              <div
                className={`border-2 w-fit p-1 ${
                  Alcoholic === "Alcoholic" ? "border-error" : "border-success"
                }`}
              >
                <div
                  className={`w-2 h-2  rounded-full ${
                    Alcoholic === "Alcoholic" ? "bg-error" : "bg-success"
                  }`}
                ></div>
              </div>
            </Tooltip>
          </div>
        </div>
      </article>
    </Link>
  );
}
