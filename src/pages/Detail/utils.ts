export function getRandomNickname(idx: string) {
  const adjectives = ["열정적인", "소심한", "행복한", "부끄러운"];
  const nouns = ["토마토", "감자", "양파", "당근"];

  // SeedRandom을 사용하여 idx를 시드로 설정합니다.
  // Math.seedrandom(idx);

  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];

  return adjective + " " + noun;
}
