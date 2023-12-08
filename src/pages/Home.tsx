import Alert from "../Reusuable Components/Alert";
import CocktailGrid from "../components/Cocktail/CocktailGrid";
import SearchBar from "../components/Form/SearchBar";
import { useGlobalContext } from "../context/Context";
import Hero from "../components/Hero";

type Props = {};

export default function Home({}: Props) {
  const { showAlert } = useGlobalContext();
  return (
    <main className="max-w-[1440px] mx-auto grid place-content-center space-y-16 lg:space-y-24 py-8 sm:py-6 lg:py-20 xl:py-24">
      <Hero />
      <SearchBar />
      <CocktailGrid />
      {showAlert && <Alert />}
    </main>
  );
}
