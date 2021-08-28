import { LineAndCharacter } from 'typescript';
import { SingleFileService } from './base';
import { PositionInfo } from '../../types';

const tokenRegex = /[A-Za-z0-9_]/;

// Find all positions of substring
function findAllPositions(
  str: string,
  substr: string,
  res: number[] = [],
  offset: number = 0,
): number[] {
  const idx = str.slice(offset).indexOf(substr);
  if (idx === -1) return res;

  const realIdx = offset + idx;

  if (
    !(str[realIdx - 1] && tokenRegex.test(str[realIdx - 1])) &&
    !(
      str[realIdx + substr.length] &&
      tokenRegex.test(str[realIdx + substr.length])
    )
  ) {
    res.push(realIdx);
  }

  return findAllPositions(str, substr, res, realIdx + substr.length);
}

export default class SimpleService extends SingleFileService {
  lines!: string[];

  createService(code: string) {
    this.lines = code.split('\n');
  }

  // TODO: CJK character
  getOccurrences(info: PositionInfo) {
    const l = this.lines[info.line];
    let token = '';

    // Get token
    for (let i = info.character; i < l.length; i++) {
      if (tokenRegex.test(l[i])) {
        token += l[i];
      } else {
        break;
      }
    }
    for (let i = info.character - 1; i > -1; i--) {
      if (tokenRegex.test(l[i])) {
        token = l[i] + token;
      } else {
        break;
      }
    }

    if (!token) return [];

    // Find the other token
    const range: LineAndCharacter[] = [];
    this.lines.forEach((content, line) => {
      findAllPositions(content, token).forEach((character) => {
        range.push({ line, character });
      });
    });

    const occurrence = range.map((result) => ({
      range: result,
      width: token.length,
    }));

    return occurrence;
  }

  getDefinition() {}
  getQuickInfo() {}
}
