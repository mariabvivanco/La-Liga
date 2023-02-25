import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clubsRequest } from '../store/clubs/clubsSlicer';


const ClubsPage = () => {
  
  const dispatch = useDispatch();

  const loadClubs = () => {
    dispatch(clubsRequest());
  }

  useEffect(() => {
    console.log('mando a llamara  aloadClubs')
    loadClubs()
  
    
  }, [])
  
  return (
    <div>
      <h1>Catálogo</h1>
    </div>
  );
};

export default ClubsPage;
