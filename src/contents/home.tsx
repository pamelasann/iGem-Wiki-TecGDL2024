export function Home() {
  const teamHeaderStyle = {
    backgroundImage: "url('https://nsf-gov-resources.nsf.gov/styles/hero_small/s3/2023-04/Andromeda_galaxy_h.jpg.webp?VersionId=ax62fO1jAP93s16R6H_jPKVhTfvwH9X4&itok=WSHuusB5')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  return (
    <header style={teamHeaderStyle}>
      <h1>Home</h1>
    </header>
  );
}