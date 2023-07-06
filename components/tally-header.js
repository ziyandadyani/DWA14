/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
import { html, css, LitElement } from '../Libs/lit-html.js';

class TallyHeader extends LitElement {
  static styles = css`
    header {
      display: flex;
      margin: 10px;
      justify-content: space-between;
    }
    h1 {
      font-size: 2rem;
      color: green;
    }
  `;

  render() {
    return html`
      <header>
        <h1>Tally Counter</h1>
      </header>
    `;
  }
}

customElements.define('tally-header', TallyHeader);