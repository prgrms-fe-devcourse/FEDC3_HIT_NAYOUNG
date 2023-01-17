import { useRecoilState } from 'recoil';

import { informLoginModalState } from '@/store/store';

import useFetchHIT from '@/hooks/api/useFetchHIT';

import { InformLoginModal } from '@/components/Modal';
import CategorySection from '@/components/Home/Category/CategorySection';
import ReviewPosterSection from '@/components/Home/ReviewPoster/ReviewPosterSection';

const Home = () => {
  const [open, setOpen] = useRecoilState(informLoginModalState);
  const { data } = useFetchHIT();
  const titleClassName =
    'text-start sm:text-base md:text-lg lg:text-xl text-TEXT_BASE_BLACK font-semibold mb-2';

  if (!data) {
    return <div>Error</div>;
  } else {
    const { category, specifiedPoster } = data;

    return (
      <>
        <h1
          className={`md:hidden absolute top-5 left-1/2 -translate-x-1/2 text-5xl text-BASE font-extrabold`}
        >
          HIT
        </h1>
        <section className="flex flex-col items-center md:items-start lg:items-start max-w-xl w-full mx-auto pt-24 lg:pt-10 md:pt-10">
          <div className="w-11/12 h-full">
            <ReviewPosterSection
              specifiedPoster={specifiedPoster}
              titleStyle={titleClassName}
            />
            <CategorySection category={category} titleStyle={titleClassName} />
          </div>
        </section>
        <InformLoginModal />
      </>
    );
  }
};

export default Home;
