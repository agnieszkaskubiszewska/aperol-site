import './App.css';
import React, { Component } from 'react';
import './Footer.css';
import './More.css';

class More extends Component {
  render() {
    return (
      <div className='more-section'>
        <h1 className="more-title">More about Aperol</h1>
        <div className="more-articles">
          <article className="more-article">
            <h1 className="more-article-title">Aperol history</h1>
            <p className="more-article-text1">
              Aperol is a brand of bitter orange liqueur, which was created in 1919 by the Italian company Campari.<br></br> 
              The name Aperol is derived from the Italian words <strong>"aperire"</strong> (to open) and <strong>"oro"</strong> (gold), 
              referring to the golden color of the liqueur. Aperol is known for its unique taste and vibrant orange color, 
              and it has become a popular choice for cocktails and as a digestif. The brand has expanded beyond Italy and is now 
              available in many countries around the world. People love Aperol because it's a refreshing and<br></br> 
              easy-to-drink drink that can be enjoyed on its own or as a mixer for cocktails. It's also a great way to start 
              a meal or to enjoy after dinner.
            </p>
            <div className="spotify-wrapper">
              <iframe 
                style={{borderRadius: "12px"}} 
                src="https://open.spotify.com/embed/playlist/6YLSs2CDkiwctCUshPnv5b?utm_source=generator" 
                width="100%" 
                height="352" 
                frameBorder="0" 
                allowFullScreen="" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                title="Aperol Spotify Playlist"
              ></iframe>
            </div>
          </article>
          
          <article className="more-article">
            <h2>Global Phenomenon</h2>
            <img 
              src={`${process.env.PUBLIC_URL}/gallery-images/people.jpg`}
              alt="Aperol Spritz" 
              className="more-article-image" 
            />
            <p>In recent years, the Aperol Spritz has exploded in popularity beyond Italy. From rooftop bars in New York to beach clubs in Bali, the drink has become synonymous with summer and relaxation. Social media has played a significant role in its rise, with millions of posts showcasing the drink's photogenic appeal. The hashtag<strong> #AperolSpritz</strong> has become a global phenomenon, with influencers and everyday drinkers alike sharing their love for the cocktail.</p>
          </article>

          <article className="more-article">
            <h2>Modern Culture</h2>
            <img 
              src={`${process.env.PUBLIC_URL}/gallery-images/happy.jpg`}
              alt="Aperol Spritz" 
              className="more-article-image" 
            />
            <p>The Aperol Spritz is more than just a trend—it's a reflection of modern culture's desire for beauty, connection, and balance. It encapsulates the joy of living in the moment, the importance of social bonds, and the celebration of individuality. As we navigate the complexities of the 21st century, the Aperol Spritz reminds us to pause, savor, and enjoy the vibrant flavors of life. Salute! 🍊.</p>
          </article>

          <article className="more-article variations-article">
            <h2 className="variations-title">Aperol Variations</h2>
            <div className="variations-grid">
              <div className="variation-card">
                <h3>Aperol Veneziano</h3>
                <img 
                  src={`${process.env.PUBLIC_URL}/gallery-images/1.jpg`}
                  alt="Aperol Veneziano" 
                  className="variation-image"
                />
                <p>The classic recipe with a Venetian twist - using local prosecco and a splash of soda water.</p>
              </div>
              
              <div className="variation-card">
                <h3>Aperol Negroni</h3>
                <img 
                  src={`${process.env.PUBLIC_URL}/gallery-images/2.jpg`}
                  alt="Aperol Negroni" 
                  className="variation-image"
                />
                <p>A lighter take on the classic Negroni, replacing Campari with Aperol for a sweeter profile.</p>
              </div>
              
              <div className="variation-card">
                <h3>Aperol Sour</h3>
                <img 
                  src={`${process.env.PUBLIC_URL}/gallery-images/3.jpg`}
                  alt="Aperol Sour" 
                  className="variation-image"
                />
                <p>A citrusy blend featuring Aperol, fresh lemon juice, and a touch of simple syrup.</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default More;
