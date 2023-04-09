import PageContent from '../components/PageContent';
import tokenFinder from '../utilize/auth';

function HomePage() {

  const token= tokenFinder()
  return (
    <PageContent title="Welcome!">
      <p>Browse all our amazing events!</p>
      <p>{token}</p>
    </PageContent>
  );
}

export default HomePage;
