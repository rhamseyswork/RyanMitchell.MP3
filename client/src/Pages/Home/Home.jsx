import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import styles from './Home.module.css'
import Loader from '../../components/Loader/Loader.jsx'
import Message from '../../components/Message/Message.jsx'
import NavLink from '../../components/Button Link/ButtonLink'
import Meta from '../../components/Meta/Meta.jsx'
import Button from 'react-bootstrap/Button'
import { useGetLinksQuery } from '../../slices/linksApiSlice.js'
import SignupForm from '../../components/Signup Form/SignupForm.jsx'
import Links from '../../components/Links/Links.jsx'
import LazyLoad from 'react-lazyload';
import PlayButton from '../../components/Music Player/PlayButton.jsx'
import YTvideos  from "../../components/ytvideos/ytvideos.jsx";
import DisplayAlbum from "../../components/Display Album/DisplayAlbum.jsx";
import Tickets from "../../components/Tickets/Tickets.jsx";
import Merch from "../../components/Merch/Merch.jsx";
import DisplayTikTok from "../../components/Display TikTok/DisplayTikTok.jsx";



function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth)
    })
  }, []);

  const handlePlay = () => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };

  const showAllLinks = windowWidth > 1045 || windowWidth < 768;

  const { keyword } = useParams();

  const { data, isLoading, error } = useGetLinksQuery({ keyword });

  if (isLoading) return <Loader />
  if (error) return (
      <Message variant="danger">
        {error?.data?.message || 'Unknown error occurred'}
      </Message>
    )

    const audioFile = "/I-Am-Death-(Destroyer-of-Worlds).mp3";

  return (
    <>
      <Meta title="Ryan Mitch Link Tree" />
      {!keyword ? (
        ''
      ) : (
        <Button as={Link} to="/" className="btn btn-dark mb-4">
          Go Back
        </Button>
      )}

      <div className={styles.container} style={{ overflow: 'hidden' }}>
        <div className={styles.imgContainer}>
        <LazyLoad height="100%" once>
        <div className={styles.shadowBottomBox} />
          <img
            className={styles.img}
            src="/Hero.webp"
            alt="Hero Image"
            width="100%"
            height="100%"
            style={{objectFit: "cover"}}
          />
          </LazyLoad>
          <PlayButton audioSrc={audioFile} />
        </div>
        <div>
          <h2 className={styles.mainTitle}>Ryan Mitchell - I AM DEATH. DESTROYER OF WORLDS</h2>
          <Links />
          <div>1 | 2 | 3</div>
          <p>Choose your preferred music service</p>
          <div
            className={styles.containerBtn}
            style={{
              overflowY: showAllLinks? 'visible' : 'auto',
              maxHeight: showAllLinks ? 'none' : '127px',
            }}
          >
            {data.links.map((link) => (
              <NavLink
                key={link._id}
                img={link.img}
                to={link.url}
                alt={link.title}
                colorBG={link.color}
              >
                {link.title}
              </NavLink>
            ))}
          </div>
          {!showAllLinks && data.links.length > 4 && (
            <div
              style={{
                fontSize: '12px',
                color: 'gray',
                padding: '0',
                margin: '0',
              }}
              className={styles.moreImages}
            >
              + {data.links.length - 5} more links
            </div>
          )}
        </div>
      </div>
        <DisplayAlbum />
        <DisplayTikTok />
        <YTvideos />
        <Tickets />
        {/* <Merch /> */}
        <SignupForm/>
    </>
  )
}

export default Home
