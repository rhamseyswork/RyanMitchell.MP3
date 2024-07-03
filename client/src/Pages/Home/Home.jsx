import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './Home.module.css'; 
import Loader from '../../components/Loader/Loader.jsx';
import { FaSpotify } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { SiApplemusic, SiAmazonmusic, SiTidal } from "react-icons/si";
import Message from '../../components/Message/Message.jsx'; 
import NavLink from '../../components/Button Link/ButtonLink';
import Meta from '../../components/Meta/Meta.jsx';
import { useGetLinksQuery, linksApiSlice } from '../../slices/linksApiSlice.js';
import Button from 'react-bootstrap/Button';

function Home() {
  const dispatch = useDispatch();
  const { keyword } = useParams('');

  const { data, error, isLoading } = useGetLinksQuery({keyword});

  useEffect(() => {
    dispatch(linksApiSlice.endpoints.getLinks.initiate({keyword}));
  }, [dispatch, keyword, data]);


  if (isLoading) return <Loader />;
  if (error) return <Message variant="danger">{error?.data?.message || error.error}</Message>;
  // if (error) return <Message variant="danger">{error?.data?.message || 'Unknown error occurred'}</Message>;

  return (
    <>
      <Meta title="Ryan Mitch Link Tree"/>
      {!keyword ? '' : <Button as={Link} to="/" className='btn btn-dark mb-4'>Go Back</Button> }

      <div className={styles.container} style={{overflow: "hidden"}}>
        <div>
          <img src="/Hero.webp" alt="Hero Image" width="500px" height="500px"/>
        </div>
        <div>
          <h2>Ryan Mitchell - I AM DEATH. DESTROYER OF WORLDS</h2>
          <p>Choose your preferred music service</p>
          <div className={styles.containerBtn}>
            {data.links.map((link, index) => (
              <NavLink key={link._id} img={link.img} to={link.url} alt={link.title}>
              {link.label} {/* Assuming link.label exists in your data structure */}
            </NavLink>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
