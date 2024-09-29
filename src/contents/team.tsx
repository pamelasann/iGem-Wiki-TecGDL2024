export function Team() {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        {/* Team Header Quote */}
        <div style={{ padding: '2em 0', fontStyle: 'italic', marginTop: '1em' }}>
          <p>
            <i>"Sometimes in life I think I'm too competitive"</i> - LeBron James
          </p>
        </div>
      </div>

      {/* Team Members */}
      <div style={{ padding: '2em 0' }}>
        <div className="container">
          <div className="layout">
            <div className="row d-flex justify-content-center">
              {[
                {
                  name: 'Juan Carlos Bodoque',
                  role: 'Team manager',
                  quote: 'I like jazz',
                  imgSrc: 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84c855027c41fd27ae641a9bac',
                  linkedIn: 'https://www.linkedin.com/in/antelis/',
                },
                {
                  name: 'Juan Carlos Bodoque',
                  role: 'Team manager',
                  quote: 'I like jazz',
                  imgSrc: 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84c855027c41fd27ae641a9bac',
                  linkedIn: 'https://www.linkedin.com/in/antelis/',
                },                    {
                  name: 'Juan Carlos Bodoque',
                  role: 'Team manager',
                  quote: 'I like jazz',
                  imgSrc: 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84c855027c41fd27ae641a9bac',
                  linkedIn: 'https://www.linkedin.com/in/antelis/',
                },                    {
                  name: 'Juan Carlos Bodoque',
                  role: 'Team manager',
                  quote: 'I like jazz',
                  imgSrc: 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84c855027c41fd27ae641a9bac',
                  linkedIn: 'https://www.linkedin.com/in/antelis/',
                },                    
                // Repeat member objects as needed...
              ].map((member, index) => (
                <div className="col-lg-4 col-md-6 col-8" key={index}>
                  <div style={{
                    backgroundColor: 'white',
                    borderRadius: '1em',
                    overflow: 'hidden',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Enhanced shadow
                    margin: '1.5em',
                    transition: 'transform 0.3s', // Smooth transition for hover effect
                  }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                  >
                    <div style={{ textAlign: 'center', padding: '2em' }}>
                      <img
                        style={{
                          borderRadius: '50%',
                          width: '120px', // Adjusted size
                          height: '120px',
                          objectFit: 'cover',
                          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                        }}
                        src={member.imgSrc}
                        alt={member.name}
                      />
                      <h5 style={{ marginTop: '1em', fontWeight: 'bold', fontSize: '1.2em' }}>{member.name}</h5>
                      <div style={{ fontStyle: 'italic', color: '#555' }}>{member.role}</div>
                      <div style={{ marginTop: '0.5em', color: '#777' }}>{member.quote}</div>
                    </div>
                    <hr style={{ margin: '0', borderColor: '#ccc' }} /> {/* Add this line */}
                    <div style={{
                      backgroundColor: '#f8f8f8', // LinkedIn Blue#0077b5
                      textAlign: 'center',
                      padding: '1em'
                    }}>
                      <a href={member.linkedIn} target="_blank" rel="noopener noreferrer">
                        <img
                          src="https://www.shareicon.net/data/2015/09/28/108616_media_512x512.png"
                          alt="LinkedIn"
                          style={{ width: '50px', height: '50px' }}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{ paddingTop: '3em' }}></div>
    </>
  );
}
