import './Team.css';

export function Team() {
  return (
    <>
      <header className="team-header">
        <h1 style={{ color: 'white', textShadow: '2px 2px 4px  rgba(0, 0, 0, 0.7)' }}>Our Team</h1>
      </header>

      <div className="lead_div">


        {/* Team Header Image */}


        <div className="blueblock quote">
          <p>
            <i>"Sometimes in the life i think im too competitive"</i> - LeBron James
          </p>
        </div>
      </div>

      {/* Team Members */}
      <div className="blueblock">
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
                },                {
                  name: 'Juan Carlos Bodoque',
                  role: 'Team manager',
                  quote: 'I like jazz',
                  imgSrc: 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84c855027c41fd27ae641a9bac',
                  linkedIn: 'https://www.linkedin.com/in/antelis/',
                },                {
                  name: 'Juan Carlos Bodoque',
                  role: 'Team manager',
                  quote: 'I like jazz',
                  imgSrc: 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84c855027c41fd27ae641a9bac',
                  linkedIn: 'https://www.linkedin.com/in/antelis/',
                },                {
                  name: 'Juan Carlos Bodoque',
                  role: 'Team manager',
                  quote: 'I like jazz',
                  imgSrc: 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84c855027c41fd27ae641a9bac',
                  linkedIn: 'https://www.linkedin.com/in/antelis/',
                },
                // Add other members here...
              ].map((member, index) => (
                <div className="col-lg-4 col-md-6 col-8" key={index}>
                  <div className="card border-0 shadow-lg my-5">
                    <div className="card-body d-flex flex-column align-items-center">
                      <img
                        className="rounded-circle mx-auto shadow-sm member-profile"
                        src={member.imgSrc}
                        alt={member.name}
                      />
                      <h5 className="member-name mt-3 text-center font-weight-bold">{member.name}</h5>
                      <div className="mb-2 text-center">{member.role}</div>
                      <div className="text-center">{member.quote}</div>
                    </div>
                    <div className="card-footer theme-bg-primary text-center">
                      <ul className="social-list list-inline mb-0 mx-auto">
                        <li>
                          <a href={member.linkedIn} target="_blank" rel="noopener noreferrer">
                            <img
                              className="linkedIn-image"
                              src="https://www.shareicon.net/data/2015/09/28/108616_media_512x512.png"
                              alt="LinkedIn"
                              style={{ width: '50px', height: '50px' }}
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="blueblock" style={{ paddingTop: '3em' }}></div>
    </>
  );
}
