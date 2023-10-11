/**
 *
 * @param positive_feedback
 * @param negative_feedback
 * @param report
 * @param student_id
 * @param k
 *
 * @see https://leetcode.cn/problems/reward-top-k-students
 */
export function topStudents(positive_feedback: string[], negative_feedback: string[], report: string[], student_id: number[], k: number): number[] {
  const positive_feedback_set = new Set(positive_feedback)
  const negative_feedback_set = new Set(negative_feedback)

  return student_id
    .map(
      (id, index) =>
        `${id}#${report[index].split(' ').reduce((s, r) => (s += positive_feedback_set.has(r) ? 3 : negative_feedback_set.has(r) ? -1 : 0), 0)}`
    )
    .sort((a, b) => Number(b.split('#')[1]) - Number(a.split('#')[1]) || Number(a.split('#')[0]) - Number(b.split('#')[0]))
    .map((item) => Number(item.split('#')[0]))
    .slice(0, k)
}

let res = topStudents(
  ['zmyu', 'kcynvdfcv', 'yvayybzbvp', 'notx'],
  ['tiwcyebpu', 'cyglv', 'xhzwcewf', 'vnvyuawz', 'a', 'hwbrlvu', 'cpdyi', 'eu', 'vdbvgac', 'pg'],
  [
    'hwbrlvu pg kcynvdfcv g pg cyglv vdbvgac odflrbply notx zmyu',
    'kcynvdfcv vdbvgac kcynvdfcv vdbvgac nwqqbliz cpdyi notx a yvayybzbvp notx',
    'g golirf gphojo cyglv cpdyi notx eu a yvayybzbvp fcqyraxvz',
    'kxljeqljdd vnvyuawz ul pg cpdyi tszsa notx eu xhzwcewf xkrk',
    'vnvyuawz ibapc cyglv xhzwcewf meabdq cpdyi xhzwcewf ytaeo ogho pg',
    'kcynvdfcv notx xhzwcewf vnvyuawz odjbojutve kcynvdfcv kcynvdfcv vdbvgac tiwcyebpu eu',
    'zmyu hwbrlvu zmyu gxkiytu rhvuf gd xhzwcewf cpdyi yvayybzbvp ybrxhogbzh'
  ],
  [62295992, 560573909, 5313698, 842699354, 372590546, 171310323, 669355474],
  7
)

res
