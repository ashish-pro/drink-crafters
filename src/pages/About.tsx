import BlurPattern from "../Reusuable Components/BlurPattern";

type Props = {};

const ImageURL: string =
  "https://lh3.googleusercontent.com/pw/AIL4fc_u3Q5wlM6PcFyjstIed2KvGtusdr6BeDNcBgNZDxwCXmjnUnufvD3DzObILTl2njP-cO-sHxlJKMlwrJcA11Zc-0jc0ctTeAa2bt3q_UoYybIGs8gxz1hao0-NKzRaeNfFpij32_NqUnyqDPvTdmsk=w1097-h731-s-no?authuser=0";

export default function About({}: Props) {
  return (
    <main className="max-w-[1440px] mx-auto space-y-8 isolate text-left py-8 sm:py-6 lg:py-20 xl:py-24 relative px-6 sm:px-8 md:px-10 lg:px-12 xl:px-32">
      <div className="flex flex-col-reverse lg:flex-row gap-4 xl:gap-12 slide-down">
        <div className="space-y-4 sm:space-y-6 py-6 sm:py-8 flex-1">
          <h3 className="text-3xl capitalize font-bold tracking-tight text-base-content sm:text-5xl xl:text-6xl">
            Elevate your sip
          </h3>
          <p className="text-base-content text-base leading-6 max-w-[65ch]">
            Welcome to Siplore, your ultimate destination for exploring the
            captivating world of cocktails. At Siplore, we're passionate about
            mixology and the stories behind every sip.
          </p>
        </div>

        <div className="flex-1">
          <img
            className="rounded-xl shadow-sm max-h-[450px] object-cover h-full mx-auto"
            src={ImageURL}
            alt="Cocktail Image"
          />
        </div>
      </div>
      <BlurPattern
        containerClassName="-top-40 sm:-top-80"
        elementClassName="gradient-background right-[calc(50%-11rem)] bg-gradient-to-tr from-secondary to-primary sm:right-[calc(50%-30rem)] opacity-20"
        clipingPath="polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
      />

      <BlurPattern
        containerClassName="bottom-[calc(100%-13rem)] sm:bottom-[calc(100%-30rem)] hidden xl:block"
        elementClassName="gradient-background right-[calc(50%+3rem)] bg-gradient-to-tr from-primary to-secondary sm:right-[calc(50%+36rem)]"
        clipingPath="polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
      />
      <BlurPattern
        containerClassName="bottom-[calc(100%-13rem)] sm:bottom-[calc(100%-30rem)] hidden xl:block"
        elementClassName="gradient-background left-[calc(50%+3rem)] bg-gradient-to-tr from-primary to-secondary sm:left-[calc(50%+36rem)]"
        clipingPath="polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
      />
    </main>
  );
}
