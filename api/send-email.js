// Função serverless da Vercel: repassa o JSON recebido para a API do Resend.
// A chave fica na variável de ambiente RESEND_KEY (Vercel > Settings > Environment Variables).
module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const key = process.env.RESEND_KEY;
  if (!key) return res.status(500).json({ error: 'RESEND_KEY not configured' });

  const body = typeof req.body === 'string' ? req.body : JSON.stringify(req.body || '');
  if (!req.body || body === '""' || body === '{}') {
    return res.status(400).json({ error: 'Empty body' });
  }

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + key },
      body,
    });
    const text = await r.text();
    res.status(r.status).setHeader('Content-Type', 'application/json').send(text);
  } catch (e) {
    res.status(500).json({ error: String(e && e.message || e) });
  }
};
