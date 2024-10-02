import React, { useState, useEffect } from 'react';

export function Team() {
  const [loading, setLoading] = useState(false);

  const handleNavigate = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {}, []);

  const teamSections = [
    {
      title: 'Leaders',
      members: [
        {
          name: 'Enia Verónica Montaño Del Muro',
          role: 'NeoTech-e President',
          quote: '',
          imgSrc: 'https://static.igem.wiki/teams/5439/images/team-d/eniamonta-o.jpeg',
          linkedIn: 'https://www.linkedin.com/in//',
        },
        {
          name: 'Faith Guadalupe Rodríguez Sánchez',
          role: 'NeoTech-e Vice-president',
          quote: '',
          imgSrc: 'https://static.igem.wiki/teams/5439/images/team-d/faithrodriguez.jpeg',
          linkedIn: 'https://www.linkedin.com/in//',
        },
      ],
    },
    {
      title: 'Wet Lab',
      members: [
        {
          name: 'Diego Cota Barocio',
          role: 'Wet Lab Student Leader',
          quote: '',
          imgSrc: 'https://static.igem.wiki/teams/5439/images/team-d/diegocota.jpeg',
          linkedIn: 'https://www.linkedin.com/in//',
        },
        {
          name: 'Adhara Renata Cruz Tenorio',
          role: 'Wet Lab',
          quote: '',
          imgSrc: 'https://static.igem.wiki/teams/5439/images/team-d/renatacruz.jpeg',
          linkedIn: 'https://www.linkedin.com/in//',
        },

        {
          name: 'Rubén Valenzuela Sánchez',
          role: 'Wet Lab',
          quote: '',
          imgSrc: 'https://static.igem.wiki/teams/5439/images/team-d/rub-nvalenzuela.jpeg',
          linkedIn: 'https://www.linkedin.com/in//',
        },
        {
          name: 'Ana Paula Valle Arce',
          role: 'Wet Lab',
          quote: '',
          imgSrc: 'https://static.igem.wiki/teams/5439/images/team-d/anapaulavalle.jpeg',
          linkedIn: 'https://www.linkedin.com/in//',
        },
        {
          name: 'Liliana Karely Aguilar Sánchez',
          role: 'Wet Lab',
          quote: '',
          imgSrc: 'https://static.igem.wiki/teams/5439/images/team-d/lilianaaguilar.jpeg',
          linkedIn: 'https://www.linkedin.com/in//',
        },
      ],
    },
    {
      title: 'Dry Lab',
      members: [
        {
          name: 'Juan Osvaldo Sánchez Valdivia',
          role: 'Dry Lab Student Leader',
          quote: '',
          imgSrc: 'https://static.igem.wiki/teams/5439/images/team-d/osvaldosanchez.jpeg',
          linkedIn: 'https://www.linkedin.com/in//',
        },
        {
          name: 'Cecilia Gabriela Cruz Pérez',
          role: 'Dry Lab',
          quote: '',
          imgSrc: 'https://static.igem.wiki/teams/5439/images/team-d/ceciliacruz.jpeg',
          linkedIn: 'https://www.linkedin.com/in//',
        },
        {
          name: 'Jesus Alexis Ruiz Zavala',
          role: 'Dry Lab',
          quote: '',
          imgSrc: 'https://static.igem.wiki/teams/5439/images/team-d/jesusalexis.jpeg',
          linkedIn: 'https://www.linkedin.com/in//',
        },
      ],
    },
    {
      title: 'Finances',
      members: [
        {
          name: 'Jorge Armando Soto Sandoval',
          role: 'Finances Student Leader',
          quote: '',
          imgSrc: 'https://static.igem.wiki/teams/5439/images/team-d/jorgesoto.jpeg',
          linkedIn: 'https://www.linkedin.com/in//',
        },
        {
          name: 'Kathia Paulina Pedroza González',
          role: 'Finances',
          quote: '',
          imgSrc: 'https://static.igem.wiki/teams/5439/images/team-d/kathiapedroza.jpeg',
          linkedIn: 'https://www.linkedin.com/in//',
        },
        {
          name: 'Fernanda Valdez Lozada',
          role: 'Finances',
          quote: '',
          imgSrc: 'https://static.igem.wiki/teams/5439/images/team-d/fernandavaldez.jpeg',
          linkedIn: 'https://www.linkedin.com/in//',
        },
      ],
    },
    {
      title: 'Human Practices',
      members: [
        {
          name: 'María José Gómez Carrillo',
          role: 'Human Practices Student Leader',
          quote: '',
          imgSrc: 'https://static.igem.wiki/teams/5439/images/team-d/majogomez.jpeg',
          linkedIn: 'https://www.linkedin.com/in//',
        },
        {
          name: 'Clarissa Lizbeth Duarte Araque',
          role: 'Human Practices',
          quote: '',
          imgSrc: 'https://static.igem.wiki/teams/5439/images/team-d/clarissaduarte.jpeg',
          linkedIn: 'https://www.linkedin.com/in//',
        },
      ],
    },    {
      title: 'Entrepeneurship',
      members: [
        {
          name: 'Juan Pablo Muñoz Villaseñor',
          role: 'Entrepreneurship Student Leader',
          quote: '',
          imgSrc: 'https://static.igem.wiki/teams/5439/images/team-d/jpmu-oz.jpeg',
          linkedIn: 'https://www.linkedin.com/in//',
        },
      ],
    },
    
    {
      title: 'Hardware & Software',
      members: [
        {
          name: 'Isaías Arturo Murillo Martínez',
          role: 'Hardware & Software Student Leader',
          quote: '',
          imgSrc: 'https://static.igem.wiki/teams/5439/images/team-d/mysteryman.png',
          linkedIn: 'https://www.linkedin.com/in//',
        },
        {
          name: 'Regina González Pérez',
          role: 'Hardware & Software',
          quote: '',
          imgSrc: 'https://static.igem.wiki/teams/5439/images/team-d/mysteryman.png',
          linkedIn: 'https://www.linkedin.com/in//',
        },
        {
          name: 'Jimena Arguello Valadez',
          role: 'Hardware & Software',
          quote: '',
          imgSrc: 'https://static.igem.wiki/teams/5439/images/team-d/mysteryman.png',
          linkedIn: 'https://www.linkedin.com/in//',
        },
        {
          name: 'Ana Benavente Zermeño',
          role: 'Hardware & Software',
          quote: '',
          imgSrc: 'https://static.igem.wiki/teams/5439/images/team-d/mysteryman.png',
          linkedIn: 'https://www.linkedin.com/in//',
        },
        {
          name: 'Karen Dayana Delgadillo Piña',
          role: 'Hardware & Software',
          quote: '',
          imgSrc: 'https://static.igem.wiki/teams/5439/images/team-d/karendelgadillo.jpeg',
          linkedIn: 'https://www.linkedin.com/in//',
        },
        {
          name: 'Valeria Mata Silva',
          role: 'Hardware & Software',
          quote: '',
          imgSrc: 'https://static.igem.wiki/teams/5439/images/team-d/valeriamata.jpeg',
          linkedIn: 'https://www.linkedin.com/in/',
        },
      ],
    },
    {
      title: 'Social Media Student Leader',
      members: [
        {
          name: 'Alesandra Almada Puig',
          role: 'Social Media Student Leader',
          quote: '',
          imgSrc: 'https://static.igem.wiki/teams/5439/images/team-d/alesandraalmada.jpeg',
          linkedIn: 'https://www.linkedin.com/in//',
        },
      ],
    },
    {
      title: 'Wiki',
      members: [
        {
          name: 'Pamela Sánchez Arellano',
          role: 'Wiki Coding Student Leader',
          quote: '',
          imgSrc: 'https://static.igem.wiki/teams/5439/images/team-d/pamelasanchez.jpeg',
          linkedIn: 'https://www.linkedin.com/in/pamelasan/',
        },
        {
          name: 'Andrés Benjamín Antelis Moreno',
          role: 'Wiki Coding',
          quote: '',
          imgSrc: 'https://static.igem.wiki/teams/5439/images/team-d/andresantelis.jpg',
          linkedIn: 'https://www.linkedin.com/in/antelis/',
        },
      ],
    },
    {
      title: 'Advisors & Supervisors',
      members: [
        {
          name: 'Julio César López Velázquez',
          role: 'Primary PI',
          quote: '',
          imgSrc: 'https://static.igem.wiki/teams/5439/images/team-d/juliolopez.jpeg',
          linkedIn: 'https://www.linkedin.com/in//',
        },
        {
          name: 'Jorge Donato García García',
          role: 'Secondary PI',
          quote: '',
          imgSrc: 'https://static.igem.wiki/teams/5439/images/team-d/mysteryman.png',
          linkedIn: 'https://www.linkedin.com/in//',
        },
      ],
    },
  ];
  

  return (
    <>
    <div className="container-fluid p-4"></div>
      {loading && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
        }}>
          <img src="https://example.com/loading-icon.gif" alt="Loading..." />
        </div>
      )}



      {teamSections.map((section, index) => (
        <div key={index} style={{ padding: '2em 0' }}>
          <h2
              style={{
                  fontFamily: "'Montserrat-black', Verdana, Arial, sans-serif",
                  fontSize: '2.5em',
                  paddingLeft: '0.1em',
                  color: '#7975d0',
                  animation: 'glow 3s infinite alternate',
                  transition: 'font-size 3s ease, padding-left 0.3s ease',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  marginBottom: '1.5em'
              }}
          >
              {section.title}
          </h2>

          <div className="container">
            <div className="layout">
              <div className="row d-flex justify-content-center">
                {section.members.map((member, memberIndex) => (
                  <div className="col-lg-4 col-md-6 col-8" key={memberIndex}>
                    <div style={{
                      backgroundColor: 'white',
                      borderRadius: '1em',
                      overflow: 'hidden',
                      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                      margin: '1.5em',
                      transition: 'transform 0.3s',
                    }}
                      onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                      onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                    >
                      <div style={{ textAlign: 'center', padding: '2em' }}>
                        <img
                          style={{
                            borderRadius: '50%',
                            width: '120px',
                            height: '120px',
                            objectFit: 'cover',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                          }}
                          src={member.imgSrc}
                          alt={member.name}
                        />
                        <h5 style={{ marginTop: '1em', fontWeight: 'bold', fontSize: '1.2em' }}>{member.name}</h5>
                        <div style={{ fontStyle: 'italic', color: '#555' }}>{member.role}</div>
                        <div style={{ marginTop: '0.5em', color: '#777' }}>{member.quote}</div>
                      </div>
                      <hr style={{ margin: '0', borderColor: '#ccc' }} />
                      <div style={{
                        backgroundColor: '#f8f8f8',
                        textAlign: 'center',
                        padding: '1em',
                      }}>
                        <a href={member.linkedIn} target="_blank" rel="noopener noreferrer">
                          <img
                            src="https://static.igem.wiki/teams/5439/images/ln.png"
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
      ))}

      <div style={{ paddingTop: '3em' }}></div>
    </>
  );
}
