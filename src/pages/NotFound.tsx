import CustomLink from "../Reusuable Components/CustomLink";
import BlurPattern from "../Reusuable Components/BlurPattern";
type Props = {};

export default function NotFound({}: Props) {
  return (
    <>
      <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8 relative isolate">
        <div className="text-center slide-down">
          <p className="text-base font-semibold text-error">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-base-content sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base text-base-content leading-7 text-opacity-60">
            Sorry, we couldn’t find the page you’re looking for.
          </p>

          <CustomLink
            pathTo="/"
            className="mt-10 btn-error bg-error h-auto min-h-fit px-3.5 py-2.5 normal-case text-sm font-semibold text-error-content shadow-sm hover:bg-error-focus"
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
            Back to home
          </CustomLink>
        </div>

        <BlurPattern
          containerClassName="-top-40 sm:-top-80"
          elementClassName="gradient-background right-[calc(50%-11rem)] bg-gradient-to-tr from-secondary to-error sm:right-[calc(50%-30rem)] opacity-20"
          clipingPath="polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        />

        <BlurPattern
          containerClassName="bottom-[calc(100%-13rem)] sm:bottom-[calc(100%-30rem)] hidden xl:block"
          elementClassName="gradient-background right-[calc(50%+3rem)] bg-gradient-to-tr from-error to-secondary sm:right-[calc(50%+36rem)]"
          clipingPath="polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        />
        <BlurPattern
          containerClassName="bottom-[calc(100%-13rem)] sm:bottom-[calc(100%-30rem)] hidden xl:block"
          elementClassName="gradient-background left-[calc(50%+3rem)] bg-gradient-to-tr from-accent to-error sm:left-[calc(50%+36rem)]"
          clipingPath="polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        />
      </main>
    </>
  );
}
