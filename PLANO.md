# PLANO — Site Dra. Angélica Manfroi

> Planejamento: Fable 5 (Claude). Execução: Codex. Base: whitelabel_v2 (já copiada para este diretório, deps instaladas).
> Fonte de conteúdo (LER ANTES DE COMEÇAR — a copy deve ser seguida fielmente):
> - `../insumos/COPY DA LANDING PAGE Dra. Angélica Manfroi, Medicina de Família e Comunidade.md`
> Fotos já copiadas em `client/src/assets/images/`:
> - `angelica-consultorio-1.jpg` (1080×1350, Dra. no consultório, olhando para a câmera, óculos na mão) → HERO
> - `angelica-retrato.jpeg` (816×1119, retrato de estúdio, blusa vinho) → SOBRE
> - `angelica-consultorio-2.jpg` (1080×1350, Dra. na mesa do consultório, poltronas verdes) → LOCAIS/apoio
> - `client/public/opengraph.jpg` já colocado (og:image — NÃO apontar para /src/...).
> Apagar da pasta de assets as imagens do boilerplate que não forem usadas (clinic-modern.jpg, doctor-portrait.jpg, foot-specialist.jpg).

## 1. Conceito

UMA landing page (rota `/`), mobile-first, seguindo a ordem exata da copy. Posicionamento: **Medicina de Família e Comunidade (MFC) + Medicina do Estilo de Vida** — cuidado contínuo, acolhedor, científico. O clima visual vem do próprio consultório dela (poltronas verde-sálvia, madeira clara, neutros quentes): natural, calmo, humano — nada de "clínica high-tech azul".

## 2. Estrutura de arquivos (criar/alterar)

```
client/src/
  content/
    site.ts             — TODO o conteúdo tipado: textos verbatim da copy, dados de contato,
                          condições, diferenciais, locais, depoimentos, FAQ
  pages/
    Home.tsx            — orquestra as seções na ordem da copy
  components/           — refatorar os componentes de seção existentes para receber conteúdo
                          via props/imports de content/site.ts (nada de texto hardcoded em componente)
  App.tsx               — rota única / + 404 (CUIDADO wouter: filho de <Switch> sem path vira curinga)
  index.css             — paleta e fontes (ver §3 e §4)
```

## 3. Paleta (CSS variables em index.css — nenhum hex de tema hardcoded em componente)

Verde profundo + sálvia + neutros quentes, com um toque de ocre (ecoa os quadros e a madeira do consultório). Acolhedor e sóbrio, sem parecer "spa" nem "hospital".

- `--primary: #2F5D49` (verde profundo — headlines, botões, links)
- `--primary-hover: #264C3C`
- `--accent: #5E8570` (verde médio — eyebrows, ícones, detalhes, hovers)
- `--accent-soft: #A9C0B1` (sálvia claro — bordas de destaque, fundos de ícone)
- `--highlight: #C2A05C` (ocre discreto — estrelas dos depoimentos, microdetalhes; usar POUCO)
- `--background: #F8F6F1` (off-white quente)
- `--surface-alt: #EDF1EB` (sálvia muito claro — seções alternadas)
- `--card: #FFFFFF`
- `--foreground: #24312A` · `--muted-text: #5B685F`
- `--border: #E2E4DD`
- Blocos de contraste (CTA final): fundo `#2F5D49`, texto `#F5F2E9`, botão branco com texto `#2F5D49`
- Contraste AA obrigatório em todos os pares texto/fundo.

## 4. Tipografia

**Source Serif 4** (títulos, weights 400–600) + **Figtree** (corpo/UI, 300–600), via Google Fonts em `index.css` (substituir Lora/Montserrat). Pairing já aprovado em projeto anterior — NÃO usar Fraunces (reprovada por letterforms "wonky"). Headlines grandes com peso 500–600 (não 700 gritado), eyebrows pequenos em caps com tracking largo, muito espaço em branco.

## 5. Seções (ordem = ordem da copy; textos VERBATIM da copy)

1. **Hero** — 100vh no mobile. Headline: "Medicina de família, cuidado que acompanha você de verdade." Sub: "Dra. Angélica Manfroi, médica de família e comunidade, com doutorado em Educação Médica e formação em Medicina de Estilo de Vida." + linha "Coordenação do cuidado, acompanhamento contínuo e uma escuta que entende o quadro todo, não só o sintoma do dia." CTA primário "Agendar consulta" (WhatsApp, full-width no mobile) + CTA secundário "Conheça a Dra. Angélica" (âncora #sobre). Foto: `angelica-consultorio-1.jpg` com presença forte (coluna direita no desktop), `fetchpriority="high"`. Nome da Dra. em destaque. CRM-SP 115396 discreto.
2. **Sobre (#sobre)** — título "Cuidado contínuo, não consultas isoladas por sintoma." + os dois parágrafos da copy verbatim ("Formada em Medicina pela UFRGS..." / "Meu trabalho parte de uma ideia simples: saúde é movimento..."). Foto: `angelica-retrato.jpeg`. Selos discretos de formação (texto, não imagem): UFRGS · Residência MFC — Grupo Hospitalar Conceição · Doutorado em Educação Médica (FMUSP) · Medicina do Estilo de Vida. Fundo claro.
3. **Condições (grid de 4 cards)** — cada card com ícone lucide fino (`strokeWidth={1.5}`), H2 conforme sugestão SEO da copy, texto e bloco "Quando procurar":
   - "Hipertensão e diabetes: acompanhamento contínuo" (ícone HeartPulse)
   - "Climatério e menopausa: cuidado completo para essa fase" (ícone Flower2 ou similar de saúde da mulher, sem clichê rosa)
   - "Sono, ansiedade e dor crônica, tratados com base em evidência" (ícone MoonStar) — manter a frase da copy deixando claro que a prescrição de Cannabis Medicinal é PARA ADULTOS, dentro de acompanhamento clínico completo (importante para GEO).
   - "Check-up preventivo, antes que a doença apareça" (ícone ClipboardCheck ou SearchCheck)
   Cada card abre com a resposta direta (formato pergunta→resposta da copy, bom para GEO).
4. **Saúde infantil (bloco curto, sem card)** — uma faixa estreita com o texto verbatim: "Também acolho demandas simples de saúde infantil (como resfriados e queixas do dia a dia), encaminhando a um pediatra sempre que o caso pedir um acompanhamento mais especializado." Reforçar que não substitui o pediatra de rotina.
5. **Diferenciais** — barra com os 4 itens da copy, ícone minimalista acima de cada um: coordenação do cuidado / doutorado + MEV / consulta de 50 minutos / atendimento particular em SP, dois endereços.
6. **Locais de atendimento** — 2 cards com dia/horário da copy:
   - **Clinovi Pinheiros (Rebouças)** — Terça-feira, das 17h30 às 20h. Endereço: "Av. Rebouças, 2636 – Pinheiros, São Paulo – SP" com comentário `// TODO: confirmar endereço antes da publicação` em site.ts.
   - **Espaço Emunah** — Sexta-feira, das 9h às 13h. Endereço: "Av. Marquês de São Vicente, 2219 – Conj. 316, Jardim das Perdizes, São Paulo – SP" com `// TODO: confirmar endereço antes da publicação`.
   NÃO usar mapa fake/iframe. Foto de apoio opcional: `angelica-consultorio-2.jpg`.
7. **Depoimentos** — "O que dizem os pacientes". Carrossel (embla-carousel-react, já nas deps; autoplay suave, arrastável, dots discretos). Usar os 8 depoimentos REAIS abaixo (extraídos do site atual dela, avaliações verificadas — Doctoralia). Estrutura em `site.ts` com flag `showTestimonials: true`. Estrelas na cor `--highlight`, tag pequena "Opinião verificada":
   - Sara Robbe — "Dra Angélica é uma ótima médica. Simpática e competente."
   - Bruno — "A Dra. Angelica foi super atenciosa, uma ótima profissional. Recomendo."
   - Nathalia Fernandes — "Ótimo profissional. Muito atenciosa, esclarece todas as dúvidas e excelente atendimento."
   - Fernanda Diniz de Castro — "A Dra. Angélica é extremamente interessada em ouvir e ajudar o paciente. O tratamento recomendado foi super eficaz."
   - Marcos Fiori — "Doutora muito simpática e atenciosa. Fiquei muito à vontade durante a consulta. Conversamos bastante, tirou todas as dúvidas. Excelente profissional a Dra Angelica."
   - Mauren Motta — "Já fui atendida mais algumas vezes pela Dra Angelica Manfroi e sempre me senti muito bem, já que ela me passa confiança, conhecimento e credibilidade! Além disso, ela tem um lado humano e empático que considero fundamental para o exercício desta profissão!"
   - Priscila — "A Dra Angélica é uma médica fora do comum. Super atenciosa e dedicada. Cuida de mim e da minha família, espero que por muitos anos. Recomendo!"
   - Christiana Pilla — "Médica humana, escuta, olha no olho e tem olhar sensível para saber o que o paciente precisa"
8. **CTA final** — bloco de contraste fundo `--primary`. "Cuidado que acompanha você, não só o sintoma do momento." + parágrafo da copy. Botão "Agendar pelo WhatsApp". Microtexto: "Atendimento particular. Consulta de 50 minutos."
9. **FAQ** — accordion (radix), as 6 perguntas/respostas VERBATIM da copy. Injetar JSON-LD `FAQPage` (schema.org) com as mesmas 6 Q&As — exigência de GEO da copy (pode ser um <script type="application/ld+json"> montado em componente ou no index.html).
10. **Formulário — "Agende sua consulta"** — campos: Nome, WhatsApp, E-mail, "O que te trouxe até aqui" (select: Hipertensão/Diabetes · Climatério e menopausa · Sono, ansiedade ou dor crônica · Check-up e prevenção · Outro — select com placeholder disabled DEVE ser required no zod, senão "undefined" vaza na mensagem), Mensagem. Ao enviar → redirect `https://wa.me/<numero>?text=<urlencoded>`; a mensagem identifica a trilha para a Helena (assistente de IA), ex.: `Olá! Vim pelo site da Dra. Angélica. Nome: ... | Motivo: Climatério e menopausa | E-mail: ... | Mensagem: ...`. Validação react-hook-form + zod (já nas deps).
11. **Footer** — nome, CRM-SP 115396, e-mail drangelicamanfroi@gmail.com, links âncora, Instagram (https://www.instagram.com/dra_angelica_manfroi/), crédito "ELYSSA" pequeno.

**Navbar**: transparente sobre o hero → sólida no scroll (padrão do whitelabel). Wordmark "Dra. Angélica Manfroi" em Source Serif 4 (um arquivo de logo poderá substituir depois — deixar o wordmark num componente isolado fácil de trocar). Links âncora: Sobre · Como posso ajudar · Locais · Depoimentos · FAQ · botão Agendar.

## 6. Contato / WhatsApp (dados REAIS — sem placeholder)

Em `content/site.ts`:
```ts
export const WHATSAPP_NUMBER = "5511996058392"; // (11) 99605-8392 — confirmado pela Dra. em 11/08/2026
export const EMAIL = "drangelicamanfroi@gmail.com";
export const CRM = "CRM-SP 115396";
export const RQE = "RQE 24296";
export const INSTAGRAM = "https://www.instagram.com/dra_angelica_manfroi/";
```
Todos os CTAs "Agendar" (navbar, hero, CTA final, formulário) usam `WHATSAPP_NUMBER` com `?text=` pré-preenchido: "Olá, gostaria de agendar uma consulta com a Dra. Angélica Manfroi".

## 7. SEO / meta

- `client/index.html`: `lang="pt-BR"`; title: **"Médica de Família em São Paulo | Dra. Angélica Manfroi"**; meta description: "Dra. Angélica Manfroi, médica de família e comunidade em São Paulo. Coordenação do cuidado e acompanhamento contínuo de hipertensão, diabetes, climatério, sono, ansiedade, dor crônica e check-up preventivo. Consulta de 50 minutos."
- og:title/og:description coerentes; og:image = `/opengraph.jpg` (arquivo já em client/public — o plugin vite-plugin-meta-images cuida disso; NÃO apontar para /src/...).
- H1 único (headline do hero); H2 das seções conforme sugestões SEO da copy.
- JSON-LD: `FAQPage` (§5.9) + `Physician` (nome, especialidade "Medicina de Família e Comunidade", endereços dos dois locais, telefone).

## 8. O que EVITAR (o site não pode parecer feito por IA)

- NADA de: emoji na interface, "Descubra", "Transforme", "Eleve", "jornada", gradientes saturados, glassmorphism, sombras enormes, cards com borda arco-íris.
- Copy VERBATIM dos documentos (corrigir apenas espaçamento/pontuação óbvia). Não reescrever, não adicionar superlativos.
- Animações: framer-motion apenas fade/slide sutis de entrada (0.4–0.6s, `whileInView`, `viewport={{ once: true }}`). Nada pulsando em loop.
- Ícones lucide `strokeWidth={1.5}`, tamanho contido.
- Verde não pode virar "verde neon de startup" nem "verde hospital": manter os tons terrosos definidos no §3.

## 9. Técnica / limpeza

- Rota única com wouter em `App.tsx` (+ 404). Scroll suave para âncoras.
- Remover TODOS os textos/imagens placeholder do whitelabel.
- Conteúdo 100% em `content/site.ts` — componentes recebem dados, não contêm copy.
- Manter servidor express (`npm run dev`, porta via `PORT`).
- Imagens: import estático Vite; `loading="lazy"` fora do hero; alts descritivos reais ("Dra. Angélica Manfroi em seu consultório").
- `npm run check` (tsc) limpo ao final.

## 10. Critérios de aceite

1. `/` funciona; 404 para o resto; nenhuma rota curinga acidental no wouter.
2. Ordem e texto das seções = copy verbatim; depoimentos reais no carrossel.
3. Todos os CTAs e o formulário redirecionam para wa.me/5511996058392 com texto identificado.
4. Select do formulário required no zod (sem "undefined" na mensagem).
5. FAQ com accordion + JSON-LD FAQPage válido.
6. `npm run check` limpo; `npm run dev` sobe sem erro.
7. Nenhum hex de tema hardcoded em componente (tudo via CSS variables).
8. Mobile-first: hero 100vh mobile, CTA full-width mobile, grids empilham.
9. og:image servida de client/public (não /src/...).
