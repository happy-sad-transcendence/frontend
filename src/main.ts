import './index.css';

const app = document.getElementById('app')!;

export function renderHome(): HTMLElement {
  const container = document.createElement('div');
  container.className = 'p-4';

  const title = document.createElement('h1');
  title.className = 'text-3xl font-bold mb-2';
  title.textContent = '🏓 42 Pong';

  const desc = document.createElement('p');
  desc.textContent = 'main page';

  container.append(title, desc);
  return container;
}

app.appendChild(renderHome());
