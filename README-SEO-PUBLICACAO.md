# MARANATA — PUBLIC_HTML SEO COMPLETO

Versão preparada em 2026-09-03.

## Posicionamento adotado
A Maranata foi estruturada como **agência de marketing digital completa para diferentes segmentos**, não como agência exclusiva de Google Ads, guinchos ou psicologia. Psicologia e guinchos aparecem como verticais com experiência prática documentada, enquanto serviços e páginas amplas atendem outros modelos de negócio.

## Arquitetura
- 16 páginas de serviços + hub.
- 7 páginas de segmentos + hub.
- 2 cases documentados + hub.
- 30 artigos de blog + hub.
- Método MK4 e página Sobre.
- 404, robots.txt, sitemap.xml e feed.xml.

## SEO técnico aplicado
- Canonicals no domínio `https://maranatamarketing.com/`.
- Titles, descriptions e H1 únicos nas páginas SEO.
- Organization, Service, Article, BreadcrumbList, CollectionPage e WebSite em JSON-LD conforme contexto.
- Sitemap apenas com páginas indexáveis.
- `noindex` nas áreas auxiliares/clientes que não devem disputar o SEO institucional.
- Redirecionamento de `/servicos/engenharia-digital/` para `/servicos/criacao-de-sites/`.
- HTTPS + host canônico sem `www` via `.htaccess`.
- Brotli/gzip e cache de assets quando os módulos do servidor estiverem disponíveis.
- Imagem Open Graph 1200×630.
- Links internos entre serviços, segmentos, cases e blog.

## Resend
**NÃO ALTERADO.** `send-email.php`, `formulario/send-email.php` e `resend/default.php` permanecem byte a byte iguais ao pacote original, conforme solicitação.

## O que não existe
- Garantia de posição 1 ou de volume de tráfego.
- Centenas de páginas artificiais por cidade/nicho.
- FAQ schema usado para prometer rich result; em 2026 o Google descontinuou esse recurso na Pesquisa.
- `llms.txt` tratado como fator de ranking. O Google esclareceu em 2026 que ele não melhora nem piora a visibilidade na Pesquisa.

## Depois de publicar
1. Faça backup da versão atual.
2. Suba o conteúdo deste pacote em `public_html`.
3. Teste home, formulário, WhatsApp, páginas de serviço e 404.
4. Envie `https://maranatamarketing.com/sitemap.xml` no Search Console.
5. Solicite indexação primeiro de Home, Serviços, Segmentos, Cases e páginas comerciais principais.
6. Acompanhe Desempenho e Indexação no Search Console por consultas/páginas.
7. Envie também os relatórios de Core Web Vitals para a próxima etapa de performance da home.
8. Ao obter novas métricas e cases, atualize páginas existentes antes de criar dezenas de novas URLs.
