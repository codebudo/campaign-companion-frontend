import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CampaignEditCard from '../../components/layout/campaigns/CampaignEditCard';
import { getCampaignById } from '../../services/routes/routes';
import { useCampaign } from '../../contexts/CampaignProvider';

const CampaignDetail = () => {
  const { campaign, setCampaign } = useCampaign();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getCampaignById(id);
      setCampaign(res);
    };
    fetchData();
  }, [id]);

  // const { name, image, description, gameMaster } = campaign;
  return (
    <>
      <div>
        <CampaignEditCard />
      </div>
    </>
  );
};

export default CampaignDetail

const styles =
`
  flex 
  flex-col
  items-center 
  border-2 
  border-solid 
  rounded 
  max-w-sm 
  m-3
`
