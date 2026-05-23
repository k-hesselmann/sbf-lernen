import { basisQuestions } from './src/data/questions_basis.js';
import { seeQuestions1 } from './src/data/questions_see_1.js';
import { seeQuestions2 } from './src/data/questions_see_2.js';
import { binnenQuestions1 } from './src/data/questions_binnen_1.js';
import { binnenQuestions2 } from './src/data/questions_binnen_2.js';
import { segelQuestions } from './src/data/questions_segel.js';
import { navigationQuestions } from './src/data/questions_navigation.js';

console.log('basisQuestions:', basisQuestions.length);
console.log('  First:', JSON.stringify(basisQuestions[0]).slice(0, 150));
console.log('  Last:', JSON.stringify(basisQuestions[basisQuestions.length - 1]).slice(0, 150));

console.log('seeQuestions1:', seeQuestions1.length);
console.log('  First:', JSON.stringify(seeQuestions1[0]).slice(0, 150));
console.log('  Last:', JSON.stringify(seeQuestions1[seeQuestions1.length - 1]).slice(0, 150));

console.log('seeQuestions2:', seeQuestions2.length);
console.log('  First:', JSON.stringify(seeQuestions2[0]).slice(0, 150));
console.log('  Last:', JSON.stringify(seeQuestions2[seeQuestions2.length - 1]).slice(0, 150));

console.log('binnenQuestions1:', binnenQuestions1.length);
console.log('  First:', JSON.stringify(binnenQuestions1[0]).slice(0, 150));
console.log('  Last:', JSON.stringify(binnenQuestions1[binnenQuestions1.length - 1]).slice(0, 150));

console.log('binnenQuestions2:', binnenQuestions2.length);
console.log('  First:', JSON.stringify(binnenQuestions2[0]).slice(0, 150));
console.log('  Last:', JSON.stringify(binnenQuestions2[binnenQuestions2.length - 1]).slice(0, 150));

console.log('segelQuestions:', segelQuestions.length);
console.log('  First:', JSON.stringify(segelQuestions[0]).slice(0, 150));
console.log('  Last:', JSON.stringify(segelQuestions[segelQuestions.length - 1]).slice(0, 150));

console.log('navigationQuestions:', navigationQuestions.length);
console.log('  First:', JSON.stringify(navigationQuestions[0]).slice(0, 150));
console.log('  Last:', JSON.stringify(navigationQuestions[navigationQuestions.length - 1]).slice(0, 150));
