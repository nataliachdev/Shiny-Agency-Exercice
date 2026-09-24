import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from '../../components/Card';
import colors from '../../utils/style/color.js';
import { Loader } from '../../utils/style/Atoms.jsx';

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
`;

const PageTitle = styled.h1`
  font-size: 30px;
  color: black;
  text-align: center;
  padding-bottom: 30px;
`;

const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

function Freelances() {
  const [freelancersList, setFreelancesData] = useState([]);
  const [isDataLoading, setDataLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchFreelances() {
      setDataLoading(true);
      try {
        const response = await fetch(`http://localhost:8000/freelances`);
        const { freelancersList } = await response.json();
        setFreelancesData(freelancersList);
      } catch (err) {
        console.log('===== error =====', err);
        setError(true);
      } finally {
        setDataLoading(false);
      }
    }
    fetchFreelances();
  }, []);

  if (error) {
    return <span>Oups, il y a eu un problème.</span>;
  }

  return (
    <div>
      <PageTitle>Trouvez votre prestataire</PageTitle>
      <PageSubtitle>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </PageSubtitle>
      {isDataLoading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <CardsContainer>
          {freelancersList.map((profile) => (
            <Card
              key={profile.id}
              label={profile.job}
              picture={profile.picture}
              title={profile.name}
            />
          ))}
        </CardsContainer>
      )}
    </div>
  );
}

export default Freelances;
