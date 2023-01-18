import { useNavigate } from 'react-router-dom';
import useFetchHIT from '@/hooks/api/useFetchHIT';

import { InformLoginModal, InformLogOutModal } from '@/components/Modal';
import CategorySection from '@/components/Home/Category/CategorySection';
import ReviewPosterSection from '@/components/Home/ReviewPoster/ReviewPosterSection';

const Home = () => {
  const { data } = useFetchHIT();
  const titleClassName =
    'text-start sm:text-base md:text-lg lg:text-xl text-TEXT_BASE_BLACK font-semibold mb-2';

  if (!data) {
    return <div>Error</div>;
  } else {
    const { category, specifiedPoster } = data;

    const navigate = useNavigate();
    const useLocationTest = () => {
      // const userId = '63bf90f26c5dd32fa29e42d3';
      const userId = '63c651e0eec0e34ad830a161';
      // 유저 클릭 시,
      navigate('/userpage', {
        state: {
          userId,
        },
      });
    };

    return (
      <>
        <button onClick={useLocationTest} className="btn">
          uselocation
        </button>
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
        <InformLogOutModal />
      </>
    );
  }
};

export default Home;
