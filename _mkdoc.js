const { execFileSync } = require('child_process');
const GWS = '/opt/homebrew/lib/node_modules/@googleworkspace/cli/run.js';
const DOC = '1ao33nfljL1ARBjzYoDpqZPANMRqs7Y5WgW2KwljjS2Q';

// Build the document as a list of blocks: {text, style}
// style: TITLE, HEADING_1, HEADING_2, NORMAL_TEXT, or BULLET
const blocks = [
  ['Shanni\u2019s Portfolio Website \u2014 Questions to Fill In', 'TITLE'],
  ['Hi Shanni! Your website is built and looks great. Right now a few parts use placeholder text that we guessed \u2014 we need your real answers so the site is accurate and sounds like you. Please answer whatever you can; skip anything that doesn\u2019t apply. You can type answers right under each question.', 'NORMAL_TEXT'],

  ['1. About You (the bio)', 'HEADING_1'],
  ['The current bio is a draft we wrote. Please rewrite it in your own words, or answer these and we\u2019ll shape it:', 'NORMAL_TEXT'],
  ['How would you describe yourself in 1\u20132 sentences? (e.g. \u201cI\u2019m a high school artist and flutist who\u2026\u201d)', 'BULLET'],
  ['What got you into art? Into flute?', 'BULLET'],
  ['What are the themes you care about most in your work? (nature, wildlife, the ocean \u2014 is that right? anything to add?)', 'BULLET'],
  ['What grade are you in / what school? (only if you want it on the site)', 'BULLET'],
  ['One sentence about what you hope your art does for people.', 'BULLET'],

  ['2. Your Artwork', 'HEADING_1'],
  ['For each of these pieces, please confirm or correct: the title, the year, the medium (what it\u2019s made with), and the award/contest it was in. Add a sentence about the piece if you\u2019d like.', 'NORMAL_TEXT'],
  ['\u201cPurple Finch\u201d \u2014 listed as 1st Place, 2025 Songbird Art Contest, colored pencil on paper. Correct?', 'BULLET'],
  ['\u201cHaystack\u201d \u2014 listed as 2025 Art Competition. What\u2019s the real contest name and medium?', 'BULLET'],
  ['\u201cSingBird Contest\u201d \u2014 listed as 2024 Art Competition. Correct title, year, contest name, medium?', 'BULLET'],
  ['\u201cRescue, Respect, Repeat\u201d \u2014 listed as 2025 Bowseat Ocean Awareness Contest. Correct? Did it win anything?', 'BULLET'],
  ['\u201c2026 Songbird Entry\u201d \u2014 what is the real title of this piece? Medium? Did it place?', 'BULLET'],
  ['Are there any other pieces you want on the site that aren\u2019t here?', 'BULLET'],
  ['The \u201cBehind the Scenes\u201d section shows 2 process photos of an ocean drawing \u2014 which artwork are those for, and is that label correct?', 'BULLET'],

  ['3. Your Music', 'HEADING_1'],
  ['The photo captions are guesses \u2014 please give us the real ones.', 'NORMAL_TEXT'],
  ['The 6 music photos are currently labeled: Flute Trio Performance, Solo Flute, Trio Ensemble, Concert Performance, Stage Performance, Recital. For each photo, what was it really? (where, when, what were you playing, solo or group?)', 'BULLET'],
  ['There are 2 award certificates shown with no caption. What are these awards (name, year, what you won)?', 'BULLET'],
  ['What instrument(s) / ensembles are you part of? Any group names?', 'BULLET'],
  ['Anything else musical we should mention?', 'BULLET'],

  ['4. Art4Earth Club (Leadership)', 'HEADING_1'],
  ['In your own words, why did you start Art4Earth? (The current quote \u2014 \u201cI founded Art4Earth because I believe art has the power to change how people see our environment\u201d \u2014 is a draft. Replace it with your real words.)', 'BULLET'],
  ['When did you found it? (we have \u201cFall 2025\u201d \u2014 correct?)', 'BULLET'],
  ['What does the club actually do? The 4 activity photos have no captions \u2014 what\u2019s happening in each?', 'BULLET'],
  ['How many members? Where does it meet? (only if you want it public)', 'BULLET'],
  ['The poster says \u201cdesigned by Shanni\u201d \u2014 correct?', 'BULLET'],

  ['5. Timeline \u2014 please confirm the dates', 'HEADING_1'],
  ['We built a timeline; please fix any wrong dates/details:', 'NORMAL_TEXT'],
  ['2024 \u2014 Entered first art competition (SingBird Art Contest)', 'BULLET'],
  ['Early 2025 \u2014 Submitted \u201cHaystack\u201d to a regional competition', 'BULLET'],
  ['Spring 2025 \u2014 Won 1st Place, Songbird Art Contest, with \u201cPurple Finch\u201d', 'BULLET'],
  ['Summer 2025 \u2014 Entered Bowseat Ocean Awareness Contest', 'BULLET'],
  ['Fall 2025 \u2014 Founded Art4Earth Club', 'BULLET'],
  ['2026 \u2014 New Songbird Art Contest entry', 'BULLET'],
  ['Anything missing or out of order?', 'NORMAL_TEXT'],

  ['6. Contact Info', 'HEADING_1'],
  ['Right now the site uses a placeholder email and website:', 'NORMAL_TEXT'],
  ['Contact email shown: contact@shannili.com \u2014 what email should people actually use? (a parent\u2019s email is fine \u2014 it currently says \u201cmanaged by parents\u201d)', 'BULLET'],
  ['Website domain shown: shannili.com \u2014 is that the real domain, or should we use something else / nothing?', 'BULLET'],
  ['Should we list any social media (Instagram, etc.)? If so, which?', 'BULLET'],

  ['Thank you! Once you fill this in we\u2019ll update the website with your real words and details.', 'NORMAL_TEXT'],
];

// Insert all text sequentially at index 1, building up. Easier: insert top-to-bottom
// by always inserting at a running index. We insert text then newline.
let requests = [];
let idx = 1;
const ranges = []; // {start, end, style, isBullet}
for (const [text, style] of blocks) {
  const content = text + '\n';
  requests.push({ insertText: { location: { index: idx }, text: content } });
  ranges.push({ start: idx, end: idx + content.length, style, isBullet: style === 'BULLET' });
  idx += content.length;
}
// Apply paragraph styles
for (const r of ranges) {
  const named = r.isBullet ? 'NORMAL_TEXT' : r.style;
  requests.push({
    updateParagraphStyle: {
      range: { startIndex: r.start, endIndex: r.end },
      paragraphStyle: { namedStyleType: named },
      fields: 'namedStyleType',
    },
  });
}
// Bullets
for (const r of ranges) {
  if (r.isBullet) {
    requests.push({
      createParagraphBullets: {
        range: { startIndex: r.start, endIndex: r.end },
        bulletPreset: 'BULLET_DISC_CIRCLE_SQUARE',
      },
    });
  }
}

const body = JSON.stringify({ requests });
const out = execFileSync('node', [GWS, 'docs', 'documents', 'batchUpdate',
  '--params', JSON.stringify({ documentId: DOC }),
  '--json', body], { encoding: 'utf8', maxBuffer: 1024 * 1024 * 16 });
console.log('OK batchUpdate sent. Response head:', out.slice(0, 200));
console.log('DOC URL: https://docs.google.com/document/d/' + DOC + '/edit');
