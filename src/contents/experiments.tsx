import { useEffect } from 'react';
import katex from 'katex';
//import 'katex/dist/katex.min.css'; // Import KaTeX CSS

export function Experiments() {
  useEffect(() => {
    // Render KaTeX equations after the component mounts
    const elements = document.querySelectorAll('.katex-render');
    elements.forEach((element) => {
      const latex = element.getAttribute('data-latex');
      if (latex) {
        // Type assertion to treat the element as an HTMLElement
        katex.render(latex, element as HTMLElement, {
          throwOnError: false,
        });
      }
    });
  }, []);

  return (
    <>
      {/* Table Section */}
      <div className="table">
        <table>
          <caption>Table 2 Fitting constants</caption>
          <thead>
            <tr>
              <th>Times</th>
              <th>
                <span className="katex-render" data-latex="C_1 \text{ origin}"></span>
              </th>
              <th>
                <span className="katex-render" data-latex="\gamma \text{ origin}"></span>
              </th>
              <th>
                <span className="katex-render" data-latex="r \text{ origin}"></span>
              </th>
              <th>
                <span className="katex-render" data-latex="C_1 \text{ converge}"></span>
              </th>
              <th>
                <span className="katex-render" data-latex="\gamma \text{ converge}"></span>
              </th>
              <th>
                <span className="katex-render" data-latex="r \text{ converge}"></span>
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Sample data rows */}
            {Array.from({ length: 6 }).map((_, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>0.221747</td>
                <td>0.117418</td>
                <td>0.296676</td>
                <td>0.007803174</td>
                <td>0.049709744</td>
                <td>0.140243978</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Equations Section */}
      <div className="equations" style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h2>Test Equations</h2>
        
        <div className="katex-render" data-latex="E=mc^2" style={{ fontSize: '2rem' }}></div>
        <p>Einstein's Equations</p>

        <div className="katex-render" data-latex="F=ma" style={{ fontSize: '2rem' }}></div>
        <p>Newton's Equations</p>

        <div className="katex-render" data-latex="\nabla \cdot \vec{E} = \frac{\rho}{\epsilon_0}" style={{ fontSize: '2rem' }}></div>
        <p>Maxwell's Equations</p>

        <div className="katex-render" data-latex="\frac{\partial u}{\partial t} + c^2 \frac{\partial^2 u}{\partial x^2} = 0" style={{ fontSize: '2rem' }}></div>
        <p>Navier-Stokes Equations</p>

        <div className="katex-render" data-latex="i\hbar\frac{\partial}{\partial t}|\psi\rangle = \hat{H}|\psi\rangle" style={{ fontSize: '2rem' }}></div>
        <p>Schrödinger Equation</p>

        <div className="katex-render" data-latex="c^2 = a^2 + b^2" style={{ fontSize: '2rem' }}></div>
        <p>Pythagorean Theorem</p>

        <div className="katex-render" data-latex="C = S_0 e^{-\frac{(r-K)^2}{2\sigma^2}}" style={{ fontSize: '2rem' }}></div>
        <p>Black-Scholes Equation</p>

        <div className="katex-render" data-latex="\frac{\partial^2 u}{\partial t^2} = c^2 \frac{\partial^2 u}{\partial x^2}" style={{ fontSize: '2rem' }}></div>
        <p>The Wave Equation</p>

        <div className="katex-render" data-latex="e^{i\pi} + 1 = 0" style={{ fontSize: '2rem' }}></div>
        <p>Euler's Formula</p>

        <div className="katex-render" data-latex="u_t = \alpha u_{xx}" style={{ fontSize: '2rem' }}></div>
        <p>The Heat Equation</p>
      </div>
    </>
  );
}
