/* eslint-disable react/no-unescaped-entities */
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { BannerNotFound, ButtonNotFound, ContainerNotFound, ContentNotFound, DescriptNotFound, SubTitleNotFound, TitleNotFound } from './styled';

const NotFound = () => {
  const navigate = useNavigate();

  const goHome = useCallback(() => {
    navigate('/');
  }, []);


  return (
    <ContainerNotFound>
      <ContentNotFound>
        <BannerNotFound>
          <TitleNotFound>404</TitleNotFound>
          <SubTitleNotFound>Opps! Page not found</SubTitleNotFound>
          <DescriptNotFound>The page you were looking for doesn't exist. You may have mistyped the address or the page may have moved.</DescriptNotFound>
          <ButtonNotFound onClick={goHome}>
            Back To Home
          </ButtonNotFound>
        </BannerNotFound>
      </ContentNotFound>
    </ContainerNotFound>
  );
};

export default memo(NotFound);