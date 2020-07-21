import React from 'react';

import Feed from '../Feed'; 

import {
  Container,
   Banner, 
   Avatar, 
   ProfileData, 
   LocationIcon, 
   CakeIcon, 
   Followage,
   EditButton 
  } from './style';

const ProfilePage: React.FC = () => {
  return (
    <Container> 
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
         <EditButton outlined>Editar perfil</EditButton>

        <h1>Madu Freitas</h1>
        <h2>@madu_freitas</h2>

        <p>
          Programadora in <a href="https://rocketseat.com.br">@Rocketseat</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascida(o) em 21 de Novembro de 2000
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>89</strong>
          </span>
          <span>
            <strong>900 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>
      
      <Feed />
    </Container>
  );
};

export default ProfilePage;