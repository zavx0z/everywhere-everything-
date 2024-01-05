const css = String.raw
export default css`
  :host {
    font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 1rem;
    line-height: 1.5rem;
    --primary-50: rgb(var(--color-primary-50, 237 248 252)); /* ⬅ #edf8fc */
    --primary-100: rgb(var(--color-primary-100, 231 245 251)); /* ⬅ #e7f5fb */
    --primary-200: rgb(var(--color-primary-200, 225 243 250)); /* ⬅ #e1f3fa */
    --primary-300: rgb(var(--color-primary-300, 207 235 247)); /* ⬅ #cfebf7 */
    --primary-400: rgb(var(--color-primary-400, 171 221 241)); /* ⬅ #abddf1 */
    --primary-500: rgb(var(--color-primary-500, 135 206 235)); /* ⬅ #87ceeb */
    --primary-600: rgb(var(--color-primary-600, 122 185 212)); /* ⬅ #7ab9d4 */
    --primary-700: rgb(var(--color-primary-700, 101 155 176)); /* ⬅ #659bb0 */
    --primary-800: rgb(var(--color-primary-800, 81 124 141)); /* ⬅ #517c8d */
    --primary-900: rgb(var(--color-primary-900, 66 101 115)); /* ⬅ #426573 */

    --secondary-900: rgb(var(--color-secondary-900, 35 93 57) / 1);

    --surface-400: rgb(var(--color-surface-400, 116 130 151) / 1);
    --surface-500: rgb(var(--color-surface-500, 56 77 107) / 1);
    --surface-600: rgb(var(--color-surface-600, 50 69 96) / 1);
    --surface-700: rgb(var(--color-surface-700, 42 58 80) / 1);
    --surface-800: rgb(var(--color-surface-800, 34 46 64) / 1);
    --surface-900: rgb(var(--color-surface-900, 27 38 52) / 1);

    --box-shadow-lg-slate-900: 0 10px 15px -3px rgb(15, 23, 42), 0 4px 6px -2px rgb(15, 23, 42);
    --drop-shadow-lg: drop-shadow(0 10px 8px rgba(0, 0, 0, 0.04)) drop-shadow(0 4px 3px rgba(0, 0, 0, 0.1));
  }
  @layer utils {
    .no-select {
      /* prevent-select */
      -webkit-user-select: none; /* Safari */
      -ms-user-select: none; /* IE 10 and IE 11 */
      user-select: none; /* Standard syntax */
      cursor: default;
    }
  }
  .node {
    display: grid;
    width: 22rem;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    grid-template-rows: 2rem max-content;
    border-radius: 0.375rem;
    background-color: var(--surface-700);
    box-shadow: 0px 3px 5px 4px rgba(15, 23, 42, 0.8);
  }
  .header {
    display: grid;
    grid-template-columns: max-content max-content;
    grid-template-rows: 1fr;
    justify-content: space-between;
    align-items: center;
    border-top-left-radius: 0.375rem;
    border-top-right-radius: 0.375rem;
    padding: 0 0.5rem;
    background-color: var(--secondary-900);
    & h1 {
      display: inline;
      font-size: 16px;
      font-weight: 500;
      line-height: 1.5;
      letter-spacing: 0px;
      color: white;
      filter: var(--drop-shadow-lg);
      margin: 0;
    }
    .description {
      display: none;
    }
  }

  .node-body {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    grid-template-rows: max-content max-content;
    gap: 0.25rem;
    border-bottom-right-radius: 0.375rem;
    border-bottom-left-radius: 0.375rem;
    padding: 0.5rem 0.75rem;
    & > div {
      display: grid;
      grid-template-columns: repeat(1, minmax(0, 1fr));
      gap: 0.5rem;
      padding: 0.25rem 0;
    }
  }
  .param {
    display: flex;
    position: relative;
    justify-content: space-between;
    gap: 0.5rem;
    .port {
      position: absolute;
      height: 0.75rem;
      width: 0.75rem;
      border-radius: 9999px;
      background-color: rgb(14 165 223);
      outline-style: solid;
      outline-width: 1px;
      outline-color: #020617;
      &.input {
        left: -1.125rem;
        top: 0.5rem;
      }
      &.output {
        right: -1.125rem;
        top: 0.5rem;
      }
    }
    & label {
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5;
      letter-spacing: 0px;
      filter: var(--drop-shadow-lg);
      white-space: nowrap; /* Запретить перенос текста на новую строку */
      overflow: hidden; /* Скрыть содержимое, выходящее за границы элемента */
      text-overflow: ellipsis; /* Добавить многоточие, если текст не влезает */
      display: block; /* или inline-block, в зависимости от контекста */
      width: 100px; /* Задать фиксированную ширину или другое ограничение по ширине */
    }
    & input {
      caret-color: aqua;
      color: aqua;
      display: flex;
      min-height: 28px;
      flex-grow: 1;
      resize: both;
      appearance: none;
      white-space: pre-wrap;
      border-radius: 4px;
      background-color: var(--surface-600);
      padding: 0 0.5rem;
      border: none;
      transition: background-color 0.2s ease-in-out;
      &:hover {
        background-color: var(--surface-500);
      }
      &:focus {
        background-color: var(--surface-600);
        outline: 2px solid transparent;
        outline-offset: 2px;
      }
    }
  }
`
