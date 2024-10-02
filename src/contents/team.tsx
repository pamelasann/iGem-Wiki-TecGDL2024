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
      title: 'PI',
      members: [
        {
          name: 'Julio César López Velázquez',
          role: 'Primary PI',
          quote: '',
          imgSrc: 'https://static.igem.wiki/teams/5439/images/team-d/juliolopez.jpeg',
          linkedIn: 'https://www.linkedin.com/in/juliocesarlopez/',
        },
        {
          name: 'Jorge Donato García García',
          role: 'Secondary PI',
          quote: '',
          imgSrc: 'https://static.igem.wiki/teams/5439/images/team-d/obamagaming.jpg',
          linkedIn: 'https://www.linkedin.com/in/jorgedonatogarcia/',
        },
      ],
    },
    {
      title: 'NeoTech-e Staff',
      members: [
        {
          name: 'Enia Verónica Montaño Del Muro',
          role: 'NeoTech-e President',
          quote: '',
          imgSrc: 'https://static.igem.wiki/teams/5439/images/team-d/eniamonta-o.jpeg',
          linkedIn: 'https://www.linkedin.com/in/eniamontano/',
        },
        {
          name: 'Faith Guadalupe Rodríguez Sánchez',
          role: 'NeoTech-e Vice-president',
          quote: '',
          imgSrc: 'https://static.igem.wiki/teams/5439/images/team-d/faithrodriguez.jpeg',
          linkedIn: 'https://www.linkedin.com/in/faithrodriguez/',
        },
      ],
    },
    {
      title: 'Wet Lab',
      members: [
        {
          name: 'Adhara Renata Cruz Tenorio',
          role: 'Wet Lab',
          quote: '',
          imgSrc: 'https://static.igem.wiki/teams/5439/images/team-d/renatacruz.jpeg',
          linkedIn: 'https://www.linkedin.com/in/adharacruz/',
        },
        {
          name: 'Diego Cota Barocio',
          role: 'Wet Lab Student Leader',
          quote: '',
          imgSrc: 'https://static.igem.wiki/teams/5439/images/team-d/diegocota.jpeg',
          linkedIn: 'https://www.linkedin.com/in/diegocota/',
        },
        {
          name: 'Rubén Valenzuela Sánchez',
          role: 'Wet Lab',
          quote: '',
          imgSrc: 'https://static.igem.wiki/teams/5439/images/team-d/rub-nvalenzuela.jpeg',
          linkedIn: 'https://www.linkedin.com/in/rubenvalenzuela/',
        },
        {
          name: 'Ana Paula Valle Arce',
          role: 'Wet Lab',
          quote: '',
          imgSrc: 'https://static.igem.wiki/teams/5439/images/team-d/anapaulavalle.jpeg',
          linkedIn: 'https://www.linkedin.com/in/anapaulavalle/',
        },
        {
          name: 'Liliana Karely Aguilar Sánchez',
          role: 'Wet Lab',
          quote: '',
          imgSrc: 'https://static.igem.wiki/teams/5439/images/team-d/lilianaaguilar.jpeg',
          linkedIn: 'https://www.linkedin.com/in/lilianakarely/',
        },
      ],
    },
    {
      title: 'Dry Lab',
      members: [
        {
          name: 'Juan Osvaldo Sánchez Valdivia',
          role: 'Dry Lab Student Leader',
          quote: 'La tecnología impulsa el futuro.',
          imgSrc: 'https://example.com/juan.jpg',
          linkedIn: 'https://www.linkedin.com/in/juanosvaldo/',
        },
        {
          name: 'Cecilia Gabriela Cruz Pérez',
          role: 'Dry Lab',
          quote: 'Los datos nos guían hacia soluciones.',
          imgSrc: 'https://example.com/cecilia.jpg',
          linkedIn: 'https://www.linkedin.com/in/ceciliacruz/',
        },
        {
          name: 'Jesus Alexis Ruiz Zavala',
          role: 'Dry Lab',
          quote: 'El análisis es la clave del éxito.',
          imgSrc: 'https://example.com/jesus.jpg',
          linkedIn: 'https://www.linkedin.com/in/jesusalexis/',
        },
      ],
    },
    {
      title: 'Finances',
      members: [
        {
          name: 'Jorge Armando Soto Sandoval',
          role: 'Finances Student Leader',
          quote: 'La planificación es la base de cualquier éxito.',
          imgSrc: 'https://example.com/jorge.jpg',
          linkedIn: 'https://www.linkedin.com/in/jorgesoto/',
        },
        {
          name: 'Kathia Paulina Pedroza González',
          role: 'Finances',
          quote: 'Manteniendo las finanzas en orden.',
          imgSrc: 'https://example.com/kathia.jpg',
          linkedIn: 'https://www.linkedin.com/in/kathiapaulina/',
        },
        {
          name: 'Fernanda Valdez Lozada',
          role: 'Finances',
          quote: 'La precisión es la clave del éxito financiero.',
          imgSrc: 'https://example.com/fernanda.jpg',
          linkedIn: 'https://www.linkedin.com/in/fernandavaldez/',
        },
      ],
    },
    {
      title: 'Human Practices',
      members: [
        {
          name: 'María José Gómez Carrillo',
          role: 'Human Practices Student Leader',
          quote: 'Impactando positivamente a la sociedad.',
          imgSrc: 'https://example.com/mariajose.jpg',
          linkedIn: 'https://www.linkedin.com/in/mariajosegomez/',
        },
        {
          name: 'Clarissa Lizbeth Duarte Araque',
          role: 'Human Practices',
          quote: 'La ética guía nuestra investigación.',
          imgSrc: 'https://example.com/clarissa.jpg',
          linkedIn: 'https://www.linkedin.com/in/clarissaduarte/',
        },
      ],
    },
    {
      title: 'Hardware & Software',
      members: [
        {
          name: 'Isaías Arturo Murillo Martínez',
          role: 'Hardware & Software Student Leader',
          quote: 'La innovación tecnológica es nuestro motor.',
          imgSrc: 'https://example.com/isaias.jpg',
          linkedIn: 'https://www.linkedin.com/in/isaiasarturo/',
        },
        {
          name: 'Regina González Pérez',
          role: 'Hardware & Software',
          quote: 'Programar para cambiar el mundo.',
          imgSrc: 'https://example.com/regina.jpg',
          linkedIn: 'https://www.linkedin.com/in/reginagonzalez/',
        },
        {
          name: 'Jimena Arguello Valadez',
          role: 'Hardware & Software',
          quote: 'Resolviendo problemas con código.',
          imgSrc: 'https://example.com/jimena.jpg',
          linkedIn: 'https://www.linkedin.com/in/jimenaarguello/',
        },
        {
          name: 'Ana Benavente Zermeño',
          role: 'Hardware & Software',
          quote: 'La ingeniería es mi pasión.',
          imgSrc: 'https://example.com/ana.jpg',
          linkedIn: 'https://www.linkedin.com/in/anabenavente/',
        },
        {
          name: 'Karen Dayana Delgadillo Piña',
          role: 'Hardware & Software',
          quote: 'Tecnología para el bien común.',
          imgSrc: 'https://example.com/karen.jpg',
          linkedIn: 'https://www.linkedin.com/in/karendayanaa/',
        },
        {
          name: 'Valeria Mata Silva',
          role: 'Hardware & Software',
          quote: 'Transformando ideas en realidad.',
          imgSrc: 'https://example.com/valeria.jpg',
          linkedIn: 'https://www.linkedin.com/in/valeriamata/',
        },
      ],
    },
    {
      title: 'Social Media Student Leader',
      members: [
        {
          name: 'Alesandra Almada Puig',
          role: 'Social Media Student Leader',
          quote: 'Conectando a través de las redes.',
          imgSrc: 'https://example.com/alesandra.jpg',
          linkedIn: 'https://www.linkedin.com/in/alesandraalmada/',
        },
      ],
    },
    {
      title: 'Wiki',
      members: [
        {
          name: 'Pamela Sánchez Arellano',
          role: 'Wiki Coding Student Leader',
          quote: 'Scrum master',
          imgSrc: 'https://example.com/pamela.jpg',
          linkedIn: 'https://www.linkedin.com/in/pamelasanchez/',
        },
        {
          name: 'Andrés Benjamín Antelis Moreno',
          role: 'Wiki Coding',
          quote: 'Pain',
          imgSrc: 'https://example.com/andres.jpg',
          linkedIn: 'https://www.linkedin.com/in/andresantelis/',
        },
      ],
    },
  ];
  

  return (
    <>
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

      <div style={{ textAlign: 'center' }}>
        <div style={{ padding: '2em 0', fontStyle: 'italic', marginTop: '1em' }}>
          <p>
            <i>"Sometimes in life I think I'm too competitive"</i> - LeBron James
          </p>
        </div>
      </div>

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
