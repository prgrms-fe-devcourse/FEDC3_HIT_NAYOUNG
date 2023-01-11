import CategoryList from '@/components/Home/Category/CategoryList';

const Home = () => {
  // TODO: div style 지워야함(내 배경색 흰색아니라 임의로 해둔 것)
  return (
    <div style={{ backgroundColor: 'white', height: '100vh', color: '#000000' }}>
      <h1>Home</h1>
      <CategoryList />
    </div>
  );
};

export default Home;
