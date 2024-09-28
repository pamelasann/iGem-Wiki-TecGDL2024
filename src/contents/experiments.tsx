import { Inspirations, InspirationLink } from "../components";

export function Experiments() {
  return (
    <>
      <header
        className="team-header"
        style={{
          backgroundImage: `url('https://nsf-gov-resources.nsf.gov/styles/hero_small/s3/2023-04/Andromeda_galaxy_h.jpg.webp?VersionId=ax62fO1jAP93s16R6H_jPKVhTfvwH9X4&itok=WSHuusB5')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1 style={{ color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>Experiments</h1>
      </header>

      {/* Table Section */}
      <div className="table">
        <table>
          <caption>Table 2 Fitting constants</caption>
          <thead>
            <tr>
              <th>Times</th>
              <th>$C_1$ origin</th>
              <th>$\gamma$ origin</th>
              <th>$r$ origin</th>
              <th>$C_1$ converge</th>
              <th>$\gamma$ converge</th>
              <th>$r$ converge</th>
            </tr>
          </thead>
          <tbody>
            {/* Your table rows here */}
          </tbody>
        </table>
      </div>
    </>
  );
}
